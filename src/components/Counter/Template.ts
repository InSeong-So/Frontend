interface CounterTemplateProps {
  count: number;
}

const CounterTemplate = ({ count }: CounterTemplateProps) => {
  return `
    <div id="counter-app">
      <p id="counter-display">${count}</p>
      <p class="title">Sync</p>
      <div id="counter-buttons">
        <button id="increment-button" class="button"><i class="fa fa-plus"></i></button>
        <button id="decrement-button" class="button"><i class="fa fa-minus"></i></button>
        <button id="reset-button" class="button"><i class="fa fa-refresh"></i></button>
      </div>
      <p class="title">Async</p>
      <div id="counter-buttons-async">
        <button id="increment-button-async" class="button"><i class="fa fa-plus"></i></button>
        <button id="decrement-button-async" class="button"><i class="fa fa-minus"></i></button>
        <button id="reset-button-async" class="button"><i class="fa fa-refresh"></i></button>
      </div>
    </div>`;
};

export default CounterTemplate;
