(function robojs() {
  console.log("initialized robojs");

  // goal 1: state management 🔥
  function stateManager() {
    const robojsState = new Map();

    // store state
    const definedStates = document.querySelectorAll("[attribute='rjs-state']");
    definedStates.forEach((ds) => {
      const state = ds.getAttribute("rjs-state");
      const obj = JSON.parse(state);

      for (const key in obj) {
        robojsState.add(key, obj[key]);
      }
    });

    // automagically replace values from state
    const statesToAdd = document.querySelectorAll(
      "[attribute='rjs-state-value']",
    );
    statesToAdd.forEach((sta) => {
      const state = sta.getAttribute("rjs-state-value");
      sta.innerHTML = robojsState.get(state);
    });
  }
})();
