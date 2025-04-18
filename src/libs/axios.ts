import { axios } from '@haibazo/its-rct-truonghd-common';

axios.defaults.baseURL = import.meta.env.VITE_APP_API_BASE_URL as string;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.response.use(
  (response) => {
    if (typeof response.data === 'string' && response.data.includes('<!doctype html>')) {
      return Promise.resolve({
        ...response,
        data: null,
      });
    }

    return response;
  },
  (error) => {
    throw error;
  },
);

export { axios };
