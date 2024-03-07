export function authHeader(): {
  "Authorization"?: any;
  "X-Requested-With": string;
  "Content-Language": string;
} {
  let userJSON: any = localStorage.getItem("user");
  let user: any = JSON.parse(userJSON);
  let language = localStorage.getItem("Language");
  if (user && user.token) {
    return {
      "Authorization": user.token,
      "X-Requested-With": "XMLHttpRequest",
      "Content-Language": language ?? "en",
    };
  }
  return {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Language": language ?? "en",
  };
}

export function guestHeader() {
  let language = localStorage.getItem("Language");
  return {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Language": language ?? "en",
  };
}
