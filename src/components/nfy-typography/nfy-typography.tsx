import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'nfy-typography',
  styleUrl: 'nfy-typography.css',
  shadow: true
})
export class Typography {

  @Prop() variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | undefined;

  render() {
    return (
      <p class={this.variant || 'p'}>
        <slot />
      </p>
    );
  }
}
