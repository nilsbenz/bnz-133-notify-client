class AuthService {
  async register(user) {
    return await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json',
      }
    });
  }

  async login(user) {
    return await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json',
      }
    });
  }
}

export default AuthService;
