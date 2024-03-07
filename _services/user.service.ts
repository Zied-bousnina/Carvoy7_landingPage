import { authHeader, ApiConfigs } from "../_helpers";

export const UserService = {
  getCurrentAccessList,
  addAccessCode,
  getAllUsersWithSameBinAccessCode,
  getAllUsers,
};

async function getCurrentAccessList() {
  const requestOptions = {
    method: "GET",
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  return await fetch(
    ApiConfigs.base_url + ApiConfigs.apis.user.getCurrentAccessList,
    requestOptions
  ).then(handleResponse);
}

async function getAllUsersWithSameBinAccessCode() {
  const requestOptions = {
    method: "GET",
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  return await fetch(
    ApiConfigs.base_url + ApiConfigs.apis.user.getAllUsersWithSameBinAccessCode,
    requestOptions
  ).then(handleResponse);
}

async function addAccessCode(data) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return await fetch(
    ApiConfigs.base_url + ApiConfigs.apis.user.addAccessCode,
    requestOptions
  ).then(handleResponse);
}

async function getAllUsers() {
  const requestOptions = {
    method: "GET",
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  return await fetch(
    ApiConfigs.base_url + ApiConfigs.apis.user.getAllUsers,
    requestOptions
  ).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        window.location.href = "/login";
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
