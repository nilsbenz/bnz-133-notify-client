import {Component, h, Listen, Prop, State} from '@stencil/core';
import NotesService from '../../../services/notesService';

@Component({
  tag: 'nfy-home',
  styleUrl: 'nfy-home.css',
  shadow: true
})
export class Home {

  @State() newNoteHeading: string;
  @State() newNoteContent: string;
  @State() updatedNoteId: string;
  @State() notes: any[];

  @Prop() alert: boolean;
  @Prop() darkMode: boolean;

  private notesService: NotesService;
  private newNoteForm!: HTMLDivElement;

  async componentWillLoad() {
    this.notesService = new NotesService();
    this.notes = [];
    this.notes = await this.notesService.getNotes();
  }

  render() {
    return (
      <div>
        <nfy-container>
          <nfy-typography variant="h1">Notizen</nfy-typography>
          <div class='new-note' ref={el => this.newNoteForm = el as HTMLDivElement}>
            <nfy-typography variant='h3'>Notiz {this.updatedNoteId ? 'bearbeiten' : 'erstellen'}</nfy-typography>
            <input class='new-note-heading'
                   type='text'
                   placeholder='Neue Notiz'
                   onInput={e => this.handleHeadingInput(e)}
                   value={this.newNoteHeading}/>
            <textarea class='new-note-content'
                      onInput={e => this.handleContentInput(e)}
                      placeholder='Hier Text eingeben'
                      value={this.newNoteContent}/>
            <div class='align-center'>
              <nfy-button onClick={() => this.handleSubmit()} variant='contained' color='primary'>
                Speichern
              </nfy-button>
              {this.updatedNoteId && <nfy-button onClick={() => this.handleAbort()}>Abbrechen</nfy-button>}
              {this.alert && <nfy-typography class='alert'>Bitte alle Felder ausfüllen.</nfy-typography>}
            </div>
          </div>
          <nfy-notes-list notes={this.notes} darkMode={this.darkMode}/>
        </nfy-container>
      </div>
    );
  }

  handleHeadingInput(e) {
    this.newNoteHeading = e.target.value;
  }

  handleContentInput(e) {
    this.newNoteContent = e.target.value;
  }

  async handleSubmit() {
    if (!this.newNoteHeading || !this.newNoteContent) {
      this.alert = true;
    } else {
      this.alert = false;
      if (this.updatedNoteId) {
        await this.notesService.updateNote(this.updatedNoteId, {
          heading: this.newNoteHeading,
          content: this.newNoteContent
        });
        this.updatedNoteId = undefined;
      } else {
        await this.notesService.saveNote({heading: this.newNoteHeading, content: this.newNoteContent});
      }
      this.notes = await this.notesService.getNotes();
      this.newNoteHeading = undefined;
      this.newNoteContent = undefined;
    }
  }

  handleAbort() {
    this.newNoteHeading = undefined;
    this.newNoteContent = undefined;
    this.updatedNoteId = undefined;
  }

  @Listen('updateNote')
  handleUpdateNote(event: CustomEvent) {
    this.newNoteHeading = event.detail.heading;
    this.newNoteContent = event.detail.content;
    this.updatedNoteId = event.detail._id;
    const pos = this.newNoteForm.style.position;
    const top = this.newNoteForm.style.top;
    this.newNoteForm.style.position = 'relative';
    this.newNoteForm.style.top = '-20px';
    this.newNoteForm.scrollIntoView({behavior: 'smooth', block: 'start'});
    this.newNoteForm.style.top = top;
    this.newNoteForm.style.position = pos;
  }

  @Listen('deleteNote')
  async handleDeleteNote(event: CustomEvent) {
    await this.notesService.deleteNote(event.detail._id);
    this.notes = await this.notesService.getNotes();
  }
}
