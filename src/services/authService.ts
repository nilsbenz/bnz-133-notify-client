import {fetchWithToken} from '../util/fetch';

class AuthService {
  async register(user) {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json',
      }
    });
    const json = await res.json();
    if (json.success === true) {
      return await this.login(user);
    }
    return false;
  }

  async login(user) {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json',
      }
    });
    const json = await res.json();
    if (json.success === true) {
      localStorage.setItem('authorization', json.token);
      localStorage.setItem('authorization-timestamp', new Date().toString());
    }
    return json.success;
  }

  async isAuthenticated() {
    if (!localStorage.getItem('authorization-timestamp') || !localStorage.getItem('authorization')) {
      return false;
    }
    const loggedInSince = new Date().getTime() - new Date(localStorage.getItem('authorization-timestamp')).getTime();
    const maxLoggedInTime = 1000 * 60 * 59 * 24;
    if (loggedInSince > maxLoggedInTime) {
      localStorage.removeItem('authorization');
      localStorage.removeItem('authorization-timestamp');
      return false;
    }
    const res = await fetchWithToken('/api/myself');
    const user = await res.json();
    return user.success;
  }
}

export default AuthService;
export const authService = new AuthService();
