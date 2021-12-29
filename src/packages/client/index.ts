import { HTTP_DEFAULT_HEADER, HTTP_LIMIT_DELAY_SECOND, HTTP_METHOD } from '@/constants';
import {
  DefaultsHeader,
  ParamsProps,
  ReqeustParameter,
  Error,
  TRequestNonBody,
  TRequestExtBody,
} from 'http';

const { GET, POST, PUT, PATCH, DELETE } = HTTP_METHOD;

class HTTPClient {
  private baseURL: string;
  private config: DefaultsHeader;

  constructor(defaults: Partial<DefaultsHeader>) {
    this.baseURL = '';
    this.config = {
      mode: 'same-origin',
      cache: 'default',
      credentials: 'same-origin',
      headers: {},
      redirect: 'follow',
      referrer: 'client',
      ...defaults,
    };
  }

  /**
   * 인스턴스 없이 호출 가능한 request 객체
   *
   * @param {ParamsProps} params
   * @returns
   */
  request = async (params: ParamsProps) => {
    const { url, body, method } = params;
    const requestHeaders: HeadersInit = new Headers();
    const REQUEST_URL = `${this.baseURL}${url}`;

    for (const [key, value] of Object.entries(this.config.headers)) {
      requestHeaders.set(key, value as string);
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), HTTP_LIMIT_DELAY_SECOND);
    const config: ReqeustParameter = {
      method,
      headers: requestHeaders,
      signal: controller.signal,
    };

    if (body) config.body = JSON.stringify(body);

    try {
      const response = await fetch(REQUEST_URL, config);
      return await this.parse(response);
    } catch (error) {
      throw new Error(`${(error as Error).status}: ${(error as Error).message}`);
    } finally {
      clearTimeout(timeoutId);
    }
  };

  /**
   * 응답 본문 변환
   * - Fetch API의 Body 믹스인 활용(arrayBuffer(), blob(), json(), text(), formData())
   * - 여기서 사용하는 것은 json() 메서드
   *
   * @param {Response} response
   * @returns
   */
  parse = async (response: Response) => {
    const { status } = response;
    try {
      const data = status !== 204 ? await response.json() : null;
      return { data, status };
    } catch (error) {
      return { status };
    }
  };

  /**
   * HTTP: 데이터 반환 요청
   *
   * @param url
   * @returns
   */
  get: TRequestNonBody = async url => this.request({ url, method: GET });

  /**
   * HTTP: 데이터 생성 요청
   *
   * @param url
   * @param body
   * @returns
   */
  post: TRequestExtBody = async (url, body) => await this.request({ url, body, method: POST });

  /**
   * HTTP: 데이터 전체 치환 요청
   *
   * @param url
   * @param body
   * @returns
   */
  put: TRequestExtBody = async (url, body) => await this.request({ url, body, method: PUT });

  /**
   * HTTP: 데이터 일부분 치환 요청
   *
   * @param url
   * @param body
   * @returns
   */
  patch: TRequestExtBody = async (url, body) => await this.request({ url, body, method: PATCH });

  /**
   * HTTP: 데이터 삭제 요청
   *
   * @param url
   * @returns
   */
  delete: TRequestNonBody = async url => await this.request({ url, method: DELETE });
}

export default new HTTPClient(HTTP_DEFAULT_HEADER);
