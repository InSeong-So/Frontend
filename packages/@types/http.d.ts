declare module 'http' {
  export interface Error {
    message: string;
    status: number;
  }

  export interface DefaultsHeader {
    mode: RequestMode;
    cache: RequestCache;
    credentials: RequestCredentials;
    headers: HeadersInit;
    redirect: RequestRedirect;
    referrer: RequestReferrer;
  }

  export interface ParamsProps {
    url: string;
    body?: string;
    headers?: HeadersInit;
    method: string;
  }

  export interface ReqeustParameter extends DefaultsHeader {
    method: string;
    body?: string;
    signal: AbortSignal;
  }
}
