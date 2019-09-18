import {Component, h, Listen, State} from '@stencil/core';
import AuthService from '../../services/authService';

const PrivateRoute = ({component, loggedIn, ...props}: { [key: string]: any }) => {
  const Component = component;

  return (
    <stencil-route {...props} routeRender={
      (props: { [key: string]: any }) => {
        if (loggedIn) {
          return <Component {...props} {...props.componentProps}/>;
        }
        return <stencil-router-redirect url="/login"/>
      }
    }/>
  );
};

@Component({
  tag: 'nfy-root',
  styleUrl: 'nfy-root.css',
  shadow: true
})
export class Root {

  @State() loggedIn: boolean;

  private authService: AuthService;

  async componentWillLoad() {
    this.authService = new AuthService();
    this.loggedIn = await this.authService.isAuthenticated();
  }

  render() {
    return (
      <div>
        <nfy-header/>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <PrivateRoute url='/' loggedIn={this.loggedIn} component='nfy-home' exact={true}/>
              <PrivateRoute url='/files' loggedIn={this.loggedIn} component='nfy-files'/>
              <stencil-route url='/login' component='nfy-login'/>
              <stencil-route url='/register' component='nfy-register'/>
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }

  @Listen('loggedIn')
  login() {
    this.loggedIn = true;
  }

  @Listen('loggedOut')
  logout() {
    this.loggedIn = false;
    localStorage.removeItem('authorization');
    localStorage.removeItem('authorization-timestamp');
  }
}
