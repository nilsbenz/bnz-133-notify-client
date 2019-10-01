import {Component, h} from '@stencil/core';

@Component({
  tag: 'nfy-container',
  styleUrl: 'nfy-container.css',
  shadow: true
})
export class Container {

  render() {
    return (
      <div class="container">
        <div class="content">
          <slot/>
        </div>
      </div>
    );
  }
}
