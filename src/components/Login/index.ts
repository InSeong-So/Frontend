import { Store } from 'store';
import LoginTemplate from './Template';

const LoginComponent = (store: Store) => {
  return { component: LoginTemplate({ form: 'login' }), events: [] };
};

export default LoginComponent;
