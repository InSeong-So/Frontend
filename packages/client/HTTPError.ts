import { Error } from 'http';

/**
 * 요청의 오류 출력
 * @extends Error
 */
export default class HTTPError extends Error {
  public status: number;
  public method: string;
  public name: string;

  constructor({ message, status }: Error, method: string, name?: string) {
    super(message);

    /**
     * 에러명
     * @type {string}
     */
    this.name = name || `[ REJECTION ] HTTPError`;

    /**
     * 요청에서 반환된 HTTP 오류 코드
     * @type {number}
     */
    this.status = status ?? 500;

    /**
     * 요청에 사용되는 HTTP 메서드
     * @type {string}
     */
    this.method = method;

    /**
     * 앱으로 전송된 HTTP 데이터
     * @typedef {Object} HTTPErrorData
     * @property {*} json 전송된 JSON 데이터
     * @property {HTTPAttachmentData[]} files 이 요청과 함께 전송된 파일이 있는 경우
     */

    /**
     * @TODO 확장 생각하기
     *
     * 앱으로 전송된 첨부 데이터
     * @typedef {Object} HTTPAttachmentData
     * @property {string|Buffer|Stream} attachment 첨부 데이터의 원본
     * @property {string} name 파일명
     * @property {Buffer|Stream} file 파일버퍼
     */
  }
}
