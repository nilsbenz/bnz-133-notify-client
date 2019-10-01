import {Component, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'nfy-header',
  styleUrl: 'nfy-header.css',
  shadow: true
})
export class Header {

  @Prop() nav: boolean = true;

  @Event() loggedOut: EventEmitter;

  render() {
    if (this.nav) {
      return (
        <header class="with-nav">
          <div class='title'>
            <img src='assets/icon/signature.svg' alt=''/>
            <h1>notify</h1>
          </div>
          <nav>
            <div>
              <stencil-route-link url="/" activeClass="active" exact={true}>
                <button>Notizen</button>
              </stencil-route-link>
              <stencil-route-link url="/files" activeClass="active" exact={true}>
                <button>Dokumente</button>
              </stencil-route-link>
            </div>
            <button onClick={() => this.loggedOut.emit()}>Ausloggen</button>
          </nav>
        </header>
      );
    } else {
      return (
        <header class='no-nav'>
          <div class='flex'>
            <img src='assets/icon/signature.svg' alt=''/>
            <h1>notify</h1>
          </div>
        </header>
      )
    }
  }
}
