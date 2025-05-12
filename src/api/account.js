import httpClient from "./httpClient";

export async function login(email, password) {
  const res = await httpClient.post("/account/login", { email, password });
  return res;
}

export async function register(email, password) {
  const res = await httpClient.post("/account/register", { email, password });
  return res;
}

export async function logout() {
  const res = await httpClient.post("/account/logout", {});
  return res;
}

export async function me() {
  const res = await httpClient.get("/account/me");
  return res;
}
