const App = () => {
  const render = () => {
    return `
    <div id="counter-app">
      <p id="counter-display">0</p>
      <div id="counter-buttons">
        <button id="increment-button" class="button"><i class="fa fa-plus"></i></button>
        <button id="decrement-button" class="button"><i class="fa fa-minus"></i></button>
        <button id="reset-button" class="button"><i class="fa fa-refresh"></i></button>
      </div>
    </div>
      `;
  };

  return render();
};

export default App;
