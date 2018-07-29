export const fetchItems = (url) => {
  const fetchOpts = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };
  return fetch(url, fetchOpts)
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
    .then(response => ({ response }), error => ({ error }));
};

export const postItem = (url, payload) => {
  const fetchOpts = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  };
  console.log('URL', url);
  console.log('fetchOpts', JSON.stringify(fetchOpts));
  return fetch(url, fetchOpts)
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
    .then(response => ({ response }), error => ({ error }));
};
