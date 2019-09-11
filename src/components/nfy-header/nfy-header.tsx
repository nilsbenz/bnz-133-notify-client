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
        <div class='title'>
          <img src='assets/icon/signature.svg' alt='' />
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
          <div>
            <stencil-route-link url="/register" activeClass="active" exact={true}>
              <button>Registrieren</button>
            </stencil-route-link>
            <stencil-route-link url="/login" activeClass="active" exact={true}>
              <button>Login</button>
            </stencil-route-link>
          </div>
        </nav>
      </header>
    );
  }
}
