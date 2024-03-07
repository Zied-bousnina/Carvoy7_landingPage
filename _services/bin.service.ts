import { authHeader, ApiConfigs } from "../_helpers";

export const BinService = {
  getAllBinsNotInPointBins,
  getAllBins,
  store,
  remove,
  update,
};

async function getAllBinsNotInPointBins() {
  const requestOptions = {
    method: "GET",
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  return await fetch(
    ApiConfigs.base_url + ApiConfigs.apis.bin.getAllBinsNotInPointBins,
    requestOptions
  ).then(handleResponse);
}
async function getAllBins() {
  const requestOptions = {
    method: "GET",
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  return await fetch(
    ApiConfigs.base_url + ApiConfigs.apis.bin.getAllBins,
    requestOptions
  ).then(handleResponse);
}

async function store(data) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return await fetch(
    ApiConfigs.base_url + ApiConfigs.apis.bin.store,
    requestOptions
  ).then(handleResponse);
}

async function update(id, data) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return await fetch(
    ApiConfigs.base_url + ApiConfigs.apis.bin.update.replace("{id}", id),
    requestOptions
  ).then(handleResponse);
}

async function remove(id) {
  const requestOptions = {
    method: "DELETE",
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  return await fetch(
    ApiConfigs.base_url + ApiConfigs.apis.bin.remove.replace("{id}", id),
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
