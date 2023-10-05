class Api {
  constructor(opt) {
    this.baseUrl = opt.baseUrl;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  getAdvice() {
    return fetch(this.baseUrl)
      .then(this._checkResponse)
  }
}

export const api = new Api({
  baseUrl: 'https://api.adviceslip.com/advice',
})