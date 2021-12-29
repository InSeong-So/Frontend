// APP_INFO
export const NOT_FOUND_PAGE = 'NOT_FOUND_PAGE' as const;
export const APP_TITLE = '🌝 문벅스 메뉴 관리' as const;

// ROUTE
export const HTTP_URL = {
  DEV: 'http://localhost:3000',
} as const;
export const HTTP_DEFAULT_HEADER = {
  mode: 'no-cors',
  cache: 'no-cache',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
  },
  referrer: 'no-referrer',
} as const;
export const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};
export const HTTP_LIMIT_DELAY_SECOND = 5000 as const;

// EVENT
export const EVENT_TYPE_CLICK = 'click' as const;
