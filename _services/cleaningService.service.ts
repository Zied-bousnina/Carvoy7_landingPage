import { authHeader, ApiConfigs } from "../_helpers";

export const CleaningServiceService = {
  getCleaningService,
  store,
  remove
};

async function getCleaningService() {
  const requestOptions = {
    method: "GET",
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  return await fetch(
    ApiConfigs.base_url + ApiConfigs.apis.cleaningService.getCleaningService,
    requestOptions
  ).then(handleResponse);
}

async function store(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      ...authHeader(),
      "Accept": "application/json",
      "Content-Type": "multipart/form-data",
    },
    body: data,
  };
  return await fetch(
    ApiConfigs.base_url + ApiConfigs.apis.cleaningService.store,
    requestOptions
  ).then(handleResponse);
}


async function remove(id:string) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      ...authHeader(),
      "Content-Type": "application/json",
    },
  };
  return await fetch(
    ApiConfigs.base_url + ApiConfigs.apis.cleaningService.remove.replace('{id}',id),
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
