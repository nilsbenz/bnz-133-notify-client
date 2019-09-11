import {Component, h} from '@stencil/core';

@Component({
  tag: 'nfy-root',
  styleUrl: 'nfy-root.css',
  shadow: true
})
export class Root {

  render() {
    return (
      <div>
        <nfy-header/>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='nfy-home' exact={true}/>
              <stencil-route url='/files' component='nfy-files'/>
              <stencil-route url='/login' component='nfy-login'/>
              <stencil-route url='/register' component='nfy-register'/>
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
