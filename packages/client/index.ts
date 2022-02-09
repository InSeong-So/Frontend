import HTTPClient from '@/client/HTTPClient';

const httpClient = new HTTPClient({
  mode: 'no-cors',
  cache: 'no-cache',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
  },
  referrer: 'no-referrer',
});

export const loadMenu = async ({ category }: any) => {
  return await httpClient.get(`/api/category/${category}/menu`);
};

export const insertItem = async ({ category, name }: any) => {
  return await httpClient.post(`/api/category/${category}/menu`, { name });
};

export const modifyItem = async ({ category, menuId, name }: any) => {
  return await httpClient.put(`/api/category/${category}/menu/${menuId}`, { name });
};

export const soldOutItem = async ({ category, menuId, name }: any) => {
  return await httpClient.put(`/api/category/${category}/menu/${menuId}/soldout`, { name });
};

export const removeItem = async ({ category, menuId }: any) => {
  return await httpClient.delete(`/api/category/${category}/menu/${menuId}`);
};
