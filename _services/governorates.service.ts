import {  guestHeader, ApiConfigs } from "../_helpers";

export const GovernoratesService = {
    getGovernorates,
};

async function getGovernorates() {
  const requestOptions = {
    method: "GET",
    headers: { ...guestHeader(), "Content-Type": "application/json" },
  };
  return await fetch(
    ApiConfigs.base_url+ApiConfigs.apis.governorates.getGovernorates,
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
