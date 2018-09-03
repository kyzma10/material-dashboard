class SessionService {

  get token() {
    return JSON.parse(localStorage.getItem("token"));
  }

  set token(value) {
    return localStorage.setItem("token", JSON.stringify(value));
  }
}

export default SessionService;