(function robojs() {
  class StateManager {
    constructor() {
      this.state = new Map();
    }

    initializeState() {
      const definedStates = document.querySelectorAll("[rjs-state]");
      definedStates.forEach((ds) => {
        let state = ds.getAttribute("rjs-state");
        state = state.replace(/'([^']+)'/g, '"$1"');
        state = state.replace(/([a-zA-Z0-9_]+)(?=\s*:)/g, '"$1"');
        const obj = JSON.parse(state);

        for (const key in obj) {
          this.state.set(key, obj[key]);
        }
      });
    }

    updateState() {
      const statesToAdd = document.querySelectorAll("[rjs-state-value]");
      statesToAdd.forEach((sta) => {
        const state = sta.getAttribute("rjs-state-value");
        sta.innerHTML = this.state.get(state);
      });
    }
  }
  const sm = new StateManager();
  sm.initializeState();
  sm.updateState();
})();
