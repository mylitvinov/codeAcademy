const clientId = 'ad27b406a3814573a4522a6ee5e31e0c';
const redirectUri = 'http://localhost:3000/'

let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    // check for access token match

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch =  window.location.href.match(/expires_in=([^&]*)/);

    if(accessTokenMatch && expiresInMatch) {
        accessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);

        // Используйте следующий код, чтобы стереть токен доступа и параметры URL.

        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');

        return accessToken;
    }
  }
};

export default Spotify;
