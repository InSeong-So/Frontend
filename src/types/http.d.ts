import { IObject } from 'global';

declare module 'http' {
  export interface DefaultsHeader {
    mode: 'no-cors' | 'cors' | 'same-origin';
    cache: 'default' | 'no-cache' | 'reload' | 'force-cache' | 'only-if-cached';
    credentials: 'include' | 'same-origin' | 'omit';
    headers: Partial<{
      'Content-Type': string;
      'Access-Control-Allow-Origin': string;
      'Access-Control-Allow-Credentials': string;
      [key: string | symbol]: string;
    }>;
    redirect: 'manual' | 'follow' | 'error';
    referrer: 'no-referrer' | 'client';
  }

  export interface ParamsProps {
    url: string;
    body?: IObject;
    method: string;
  }

  export interface ReqeustParameter {
    method: string;
    headers: HeadersInit;
    body?: BodyInit;
    signal: AbortSignal;
  }

  export interface Error {
    message: string;
    status: number;
  }

  export type TReturnPromise = Promise<{ data?: any; status: number }>;
  export type TRequestNonBody = (url: string) => TReturnPromise;
  export type TRequestExtBody = (url: string, body: IObject) => TReturnPromise;
}
