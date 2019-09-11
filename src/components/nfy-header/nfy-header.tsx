import {Component, h} from '@stencil/core';

@Component({
  tag: 'nfy-header',
  styleUrl: 'nfy-header.css',
  shadow: true
})
export class Header {

  render() {
    return (
      <header>
        <h1>notify</h1>
        <nav>
          <button>Notizen</button>
          <button>Dokumente</button>
        </nav>
      </header>
    );
  }
}
