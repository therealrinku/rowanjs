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

    listenForStateChangesOnClick() {
      const elements = document.querySelectorAll("[rjs-onclick]");

      for (const element of elements) {
        element.addEventListener("click", (_) => {
          const evalCode = element.getAttribute("rjs-onclick");
          const stateKey = this._extractStateKeyFromCode(evalCode);
          const stateValue = this.state.get(stateKey);

          window[stateKey] = stateValue; // leveraging window object here
          eval(evalCode); // very very unsafe code

          this.state.set(stateKey, window[stateKey]);
          delete window[stateKey];

          this.updateState();
        });
      }
    }

    _extractStateKeyFromCode(code) {
      //idk wth this regex is doing
      const match = code.match(
        /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=[\+\-\*\/\=\!%&\|\^]|$)/,
      );
      return match ? match[1] : null;
    }
  }
  const sm = new StateManager();
  sm.initializeState();
  sm.updateState();
  sm.listenForStateChangesOnClick();
})();
