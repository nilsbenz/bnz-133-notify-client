import {Component, h} from '@stencil/core';

@Component({
  tag: 'nfy-login',
  styleUrl: 'nfy-login.css',
  shadow: true
})
export class Login {

  render() {
    return (
      <nfy-container class='container'>
        <nfy-typography variant='h1'>Login</nfy-typography>
        <div class='form'>
          <form>
            <nfy-textfield name='username' label='Benutzername'/>
            <nfy-textfield name='password' label='Passwort' type='password'/>
            <nfy-button type='submit' variant='contained' color='primary'>Einloggen</nfy-button>
          </form>
        </div>
      </nfy-container>
    );
  }
}
