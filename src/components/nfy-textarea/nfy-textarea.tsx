import {Component, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'nfy-textarea',
  styleUrl: 'nfy-textarea.css',
  shadow: true
})
export class TextArea {

  @Prop({reflect: true}) value: string;
  @Prop() name: string;

  @Event() handleInput: EventEmitter;

  componentWillLoad() {
    if (!this.name) {
      console.error('[nfy-textarea]: textarea name missing');
    }
  }

  render() {
    return (
      <textarea value={this.value} name={this.name} onInput={e => this.emitHandleInput(e)}/>
    );
  }

  emitHandleInput(e) {
    this.value = e.target.value;
    this.handleInput.emit({
      name: this.name,
      value: this.value,
    });
  }
}
