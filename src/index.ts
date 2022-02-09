import '../assets/scss/index.scss';
//
import App from './App';
import store from '@/store';
import render from '@/helpers/dom/render';

const diffRenderer = () => {
  const $root = document.body;
  const $old = $root.firstChild as HTMLElement;
  const $new = App(store);

  render($root, $old, $new);
};

store.subscribe({ render: diffRenderer });

diffRenderer();
