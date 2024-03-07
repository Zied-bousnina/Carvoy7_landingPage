import { guestHeader, ApiConfigs } from "../_helpers";

export const CollectorService = {
  store,
};


async function store(data) {
  const requestOptions = {
    method: "POST",
    headers: { ...guestHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return await fetch(
    ApiConfigs.base_url + ApiConfigs.apis.collector.store,
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
