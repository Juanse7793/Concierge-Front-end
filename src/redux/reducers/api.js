export const apiUrl = 'https://ancient-lake-57758.herokuapp.com/api/v1/';

export default async (url = '', method = 'POST', body = null, headers = { 'Content-Type': 'application/json' }) => {
  try {
    const response = await fetch(`${apiUrl}${url}`, {
      method,
      headers,
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
