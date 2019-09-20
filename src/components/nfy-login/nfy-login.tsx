import {Component, Event, EventEmitter, h, Listen, Prop, State} from '@stencil/core';
import AuthService from '../../services/authService';
import {RouterHistory} from '@stencil/router';

@Component({
  tag: 'nfy-login',
  styleUrl: 'nfy-login.css',
  shadow: true
})
export class Login {

  @Prop() history: RouterHistory;

  @State() alert: boolean;

  @Event() loggedIn: EventEmitter;

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
      <div class='container'>
        <nfy-header nav={false}/>
        <nfy-container class='main'>
          <div class='flex'>
            <nfy-typography variant='h1' class='margin-right-2'>Login</nfy-typography>
            <stencil-route-link url='/register'>
              <nfy-button>Zum ersten Mal hier?</nfy-button>
            </stencil-route-link>
          </div>
          <div class='form'>
            <form>
              <nfy-textfield name='username' label='Benutzername'/>
              <nfy-textfield name='password' label='Passwort' type='password'/>
              <nfy-button type='submit' variant='contained' color='secondary' onClick={() => this.handleLogin()}>
                Einloggen
              </nfy-button>
            </form>
            {this.alert && <nfy-typography>Falscher Benutzername oder Passwort.</nfy-typography>}
          </div>
        </nfy-container>
      </div>
    );
  }

  @Listen('handleInput')
  handleInput(e: CustomEvent) {
    switch (e.detail.name) {
      case 'username':
        this.user.username = e.detail.value;
        break;
      case 'password':
        this.user.password = e.detail.value;
        break;
    }
  }

  async handleLogin() {
    const res = await this.authService.login(this.user);
    if (res) {
      this.loggedIn.emit();
      this.history.push('/');
    } else {
      this.alert = true;
    }
  }
}
