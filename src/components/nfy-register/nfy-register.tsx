import {Component, h, Listen} from '@stencil/core';
import AuthService from '../../services/authService';

@Component({
  tag: 'nfy-register',
  styleUrl: 'nfy-register.css',
  shadow: true
})
export class Register {

  private authService: AuthService;
  private user: {
    username: string,
    password: string,
  };

  componentWillLoad() {
    this.authService = new AuthService();
    this.user = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <nfy-container class='container'>
        <nfy-typography variant='h1'>Registrieren</nfy-typography>
        <div class='form'>
          <form>
            <nfy-textfield name='username' label='Benutzername'/>
            <nfy-textfield name='password' label='Passwort' type='password'/>
            <nfy-button type='submit' variant='contained' color='primary' onClick={() => this.handleRegister()}>Registrieren</nfy-button>
          </form>
        </div>
      </nfy-container>
    );
  }

  @Listen('handleInput')
  handleInput(e: CustomEvent) {
    switch(e.detail.name) {
      case 'username':
        this.user.username = e.detail.value;
        break;
      case 'password':
        this.user.password = e.detail.value;
        break;
    }
  }

  async handleRegister() {
    const res = await this.authService.register(this.user);
    console.log(res);
  }
}
