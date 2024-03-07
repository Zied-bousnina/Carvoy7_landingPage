import { authHeader, ApiConfigs } from "../_helpers";

export const QuoteRequestsService = {
  getAll,
  createQuote
};

async function getAll() {
  const requestOptions = {
    method: "GET",
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  return await fetch(
    ApiConfigs.base_url + ApiConfigs.apis.quoteRequests.getAll,
    requestOptions
  ).then(handleResponse);
}

async function createQuote(formData) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader() },
    body: formData,
  };
  return await fetch(
    ApiConfigs.base_url + ApiConfigs.apis.quoteRequests.createQuote,
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
