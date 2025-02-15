export function authHeader() {
  let authToken = localStorage.getItem('authToken');
  console.log(authToken);
  if (authToken) {
    return {
      Authorization: `Bearer ${authToken}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "PUT, GET, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "WWW-Authenticate": "Basic",
      "Access-Control-Allow-Credentials": true,
    };
  } else {
    return {};
  }
}
