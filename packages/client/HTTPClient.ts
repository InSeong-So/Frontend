import { DELETE, GET, PATCH, POST, PUT } from '@/constants';
import { DefaultsHeader, Error, ParamsProps, ReqeustParameter } from 'http';
import HTTPError from './HTTPError';

// ROUTE
const enum HTTP_URL {
  DEV = 'http://localhost:3000',
}

const LIMIT_DELAY_FIVE_SECOND = <const>5000;

export default class HTTPClient {
  private baseURL: string;
  private config: DefaultsHeader;

  constructor(defaults: Partial<DefaultsHeader>) {
    this.baseURL = HTTP_URL.DEV;
    this.config = {
      mode: 'same-origin', // no-cors, cors, *same-origin
      cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {},
      redirect: 'follow', // manual, *follow, error
      referrer: 'client', // no-referrer, *client
      ...defaults,
    };
  }

  /**
   * 인스턴스 없이 호출 가능한 request 객체
   *
   * @param {Object} params
   * @returns
   */
  async request(params: ParamsProps) {
    const { url, body, headers, method } = params;
    const requestHeaders: HeadersInit = new Headers();

    for (const [key, value] of Object.entries(headers as HeadersInit)) {
      requestHeaders.set(key, value as string);
    }

    /**
     * 참조 https://developer.mozilla.org/ko/docs/Web/API/AbortController
     */
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), LIMIT_DELAY_FIVE_SECOND);
    const config: ReqeustParameter = {
      ...this.config,
      headers: requestHeaders,
      method,
      body: body !== undefined ? JSON.stringify(body) : body,
      signal: controller.signal,
    };

    try {
      const response = await fetch(`${this.baseURL}${url}`, config);
      return await this.parse(response);
    } catch (error) {
      throw new HTTPError(error as Error, method);
    } finally {
      clearTimeout(timeoutId);
    }
  }

  /**
   * 응답 본문 변환
   * - Fetch API의 Body 믹스인 활용(arrayBuffer(), blob(), json(), text(), formData())
   * - 여기서 사용하는 것은 json() 메서드, @TODO 추후 확장하기
   *
   * @param {Response} response
   * @returns
   */
  async parse(response: Response) {
    const { status } = response;
    try {
      const data = status !== 204 ? await response.json() : null;
      return { data, status };
    } catch (error) {
      return { status };
    }
  }

  /**
   * HTTP: 데이터 반환 요청
   * - 쿠키(Cookie), 자격 증명(credentials) 등 필요시 커스텀
   *
   * @param {String} url
   * @param {Header} headers
   * @returns
   */
  get(url: string, headers?: HeadersInit) {
    return this.request({ url, headers, method: GET });
  }

  /**
   * HTTP: 데이터 생성 요청
   * - 쿠키(Cookie), 자격 증명(credentials) 등 필요시 커스텀
   *
   * @param {String} url
   * @param {Object} body
   * @param {Header} headers
   * @returns
   */
  async post(url: string, body: any, headers?: HeadersInit) {
    return await this.request({ url, body, headers, method: POST });
  }

  /**
   * HTTP: 데이터 전체 치환 요청
   * - 쿠키(Cookie), 자격 증명(credentials) 등 필요시 커스텀
   *
   * @param {String} url
   * @param {Object} body
   * @param {Header} headers
   * @returns
   */
  async put(url: string, body: any, headers?: HeadersInit) {
    return await this.request({ url, body, headers, method: PUT });
  }

  /**
   * HTTP: 데이터 일부분 치환 요청
   * - 쿠키(Cookie), 자격 증명(credentials) 등 필요시 커스텀
   *
   * @param {String} url
   * @param {Object} body
   * @param {Header} headers
   * @returns
   */
  async patch(url: string, body: any, headers?: HeadersInit) {
    return await this.request({ url, body, headers, method: PATCH });
  }

  /**
   * HTTP: 데이터 삭제 요청
   * - 쿠키(Cookie), 자격 증명(credentials) 등 필요시 커스텀
   *
   * @param {String} url
   * @param {Header} headers
   * @returns
   */
  async delete(url: string, headers?: HeadersInit) {
    return await this.request({ url, headers, method: DELETE });
  }
}
