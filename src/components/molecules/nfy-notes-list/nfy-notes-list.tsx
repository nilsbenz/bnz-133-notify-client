import {Component, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'nfy-notes-list',
  styleUrl: 'nfy-notes-list.css',
  shadow: true
})
export class NotesList {

  @Prop() notes: any[];

  @Event() updateNote: EventEmitter;
  @Event() deleteNote: EventEmitter;

  render() {
    return (
      <div class='list'>
        {this.notes.map(note =>
          <div class='item'>
            <div class='heading'>
              <nfy-typography variant='h5'>{note.heading}</nfy-typography>
              <div class='actions'>
                <img src='assets/icon/edit.svg' alt='' onClick={() => this.updateNote.emit(note)}/>
                <img src='assets/icon/trash.svg' alt='' onClick={() => this.deleteNote.emit(note)}/>
              </div>
            </div>
            <nfy-typography>{note.content}</nfy-typography>
          </div>
        )}
      </div>
    );
  }
}
