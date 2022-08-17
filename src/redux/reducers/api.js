const api = 'http://localhost:3000/api/v1/';

export default async (url = '', method = 'POST', body = '') => {
  try {
    const response = await fetch(`${api}/${url}`, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body,
    }).then((res) => res.json());
    if (response.status === 201) {
      return response;
    }
  } catch (err) {
    return err;
  }
  return false;
};
