// 기본 예제
import '@css/counter-app/index.scss';
// 메인 scss 파일
import '@css/index.scss';

import App from './App';
import http from '@/client';

(document.querySelector('#root') as HTMLElement).innerHTML = App();

(async () => {
  const response = await http.get('https://jsonplaceholder.typicode.com/posts/1');
  console.log(response);
})();
