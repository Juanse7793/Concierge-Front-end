const api = 'http://localhost:3000/api/v1/';

export default async (url = '', method = 'POST', body = '') => {
  try {
    const response = await fetch(`${api}${url}`, {
      method,
      // headers,
      body,
    }).then((res) => res.json());
    if (response.status === 201 || !response.error) {
      console.log('res: ', response);
      return response;
    }
    console.error('error: ', response.error);
  } catch (err) {
    console.error('err: ', err);
    return err;
  }
  return false;
};
