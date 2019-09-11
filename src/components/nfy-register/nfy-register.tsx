import {Component, h} from '@stencil/core';

@Component({
  tag: 'nfy-register',
  styleUrl: 'nfy-register.css',
  shadow: true
})
export class Register {

  render() {
    return (
      <nfy-container class='container'>
        <nfy-typography variant='h1'>Registrieren</nfy-typography>
        <div class='form'>
          <form>
            <nfy-textfield name='username' label='Benutzername'/>
            <nfy-textfield name='password' label='Passwort' type='password'/>
            <nfy-button type='submit' variant='contained' color='primary'>Registrieren</nfy-button>
          </form>
        </div>
      </nfy-container>
    );
  }
}
