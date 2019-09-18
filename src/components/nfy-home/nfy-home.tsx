import {Component, h, Listen, State} from '@stencil/core';
import NotesService from '../../services/notesService';

@Component({
  tag: 'nfy-home',
  styleUrl: 'nfy-home.css',
  shadow: true
})
export class Home {

  @State() username: string;
  @State() password: string;
  @State() textarea: string;

  @State() notes: any[];

  private notesService: NotesService;

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
          {this.notes.map(note =>
            <p>{note.heading}</p>
          )}
        </nfy-container>
      </div>
    );
  }

  @Listen('handleInput')
  handleInput(event: CustomEvent) {
    switch (event.detail.name) {
      case 'user':
        this.username = event.detail.value;
        break;
      case 'pw':
        this.password = event.detail.value;
        break;
      case 'textarea':
        this.textarea = event.detail.value;
        break;
    }
    console.log(this.textarea);
  }

  @Listen('handleTextAreaInput')
  handleTextAreaInput(event: CustomEvent) {
    switch (event.detail.name) {
      case 'user':
        this.username = event.detail.value;
        break;
      case 'pw':
        this.password = event.detail.value;
        break;
      case 'textarea':
        this.textarea = event.detail.value;
        break;
    }
    console.log(this.textarea);
  }

  handlesubmit() {
    console.log(this.username);
  }
}
