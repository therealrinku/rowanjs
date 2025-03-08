(function robojs() {
  console.log("initialized robojs");

  // goal 1: state management 🔥
  function stateManager() {
    const robojsState = new Map();

    // store state
    const definedStates = document.querySelectorAll("[rjs-state]");
    definedStates.forEach((ds) => {
      let state = ds.getAttribute("rjs-state");
      state = state.replace(/'([^']+)'/g, '"$1"');
      state = state.replace(/([a-zA-Z0-9_]+)(?=\s*:)/g, '"$1"');
      const obj = JSON.parse(state);

      for (const key in obj) {
        robojsState.set(key, obj[key]);
      }
    });

    // automagically replace values from state
    const statesToAdd = document.querySelectorAll("[rjs-state-value]");
    statesToAdd.forEach((sta) => {
      const state = sta.getAttribute("rjs-state-value");
      sta.innerHTML = robojsState.get(state);
    });
  }

  stateManager();
})();
