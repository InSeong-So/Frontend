import { Store } from 'store';
import { setupComponent } from '@/helpers/dom/converter';
import { createVDOM } from '@/helpers/dom/converter';
import CounterComponent from './components/Counter';

const App = (store: Store) => {
  return createVDOM({
    type: 'Element',
    tagName: 'div',
    attributes: { id: 'root' },
    children: setupComponent<Store>(store, [CounterComponent]),
  });
};

export default App;
