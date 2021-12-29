import httpClient from '@/client';

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
