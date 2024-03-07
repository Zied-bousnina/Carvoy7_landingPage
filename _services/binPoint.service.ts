import { authHeader, ApiConfigs } from "../_helpers";

export const BinPointService = {
  getAll,
  getAllBinPoints
};

async function getAll() {
  const requestOptions = {
    method: "GET",
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  return await fetch(
    ApiConfigs.base_url + ApiConfigs.apis.binPoint.getAll,
    requestOptions
  ).then(handleResponse);
}
async function getAllBinPoints() {
  const requestOptions = {
    method: "GET",
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  return await fetch(
    ApiConfigs.base_url + ApiConfigs.apis.binPoint.getAllBinPoints,
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
