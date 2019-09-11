import {Component, h} from '@stencil/core';

@Component({
  tag: 'nfy-files',
  styleUrl: 'nfy-files.css',
  shadow: true
})
export class Files {

  render() {
    return (
      <nfy-container>
        Here you can put your files.
      </nfy-container>
    );
  }
}
