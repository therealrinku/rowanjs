class Component {
  constructor(fn) {
    this.component = fn();
    this.fn = fn;
  }

  #applyDiff() {}

  #findDiff() {
    // #no fucking clue
    const last = this.component.model;
    const current = this.fn();

    const diff = {};

    //calculate diff
    return diff;
  }

  #rerender() {
    const diff = this.#findDiff();
    this.#applyDiff(diff);
  }

  addDep(...states) {
    states.forEach((state) => {
      if (!(state instanceof State)) {
        throw new Error("addDep() method only takes State as an argument.");
      }

      state.subscribe({ callback: () => this.#rerender() });
    });

    return this;
  }
}

class State {
  constructor(value) {
    this.state = value;
    this.subscribers = new Array();
  }

  get() {
    return this.state;
  }

  subscribe(elem) {
    // TODO: ability to subscribe to inner properties changes only
    this.subscribers.push(elem);
  }

  #publish() {
    // TODO: publish only when specified inner properties changes if provided
    this.subscribers.forEach((sub) => sub.callback());
  }

  set(value) {
    const oldState = this.state;
    this.state = value;

    this.#publish();
  }
}

class Element {
  constructor(name) {
    this.model = {
      node: document.createElement(name),
      children: new Array(),
      attributes: new Map(),
      eventListeners: new Map(),
      classNames: new Set(),
      styles: new Map(),
    };
  }

  setText(...t) {
    t.forEach((txt) => {
      this.model.node.innerText += txt;
    });

    return this;
  }

  showIf(fn) {
    if (typeof fn !== "function") {
      throw new Error("showIf() only takes function argument.");
    }

    // TODO: make it better?
    this.model.node.innerHTML = fn() ? true : false;
    return this;
  }

  addClass(classNames) {
    classNames = classNames.split(" ");
    this.model.node.classList.add(...classNames);
    this.model.classNames.add(...classNames);

    return this;
  }

  addStyles(stylesObj) {
    const styles = Object.entries(stylesObj);

    for (const s of styles) {
      const [key, value] = s;
      this.model.node.style[key] = value;
      this.model.styles.set(key, value);
    }

    return this;
  }

  setAttribute(name, value) {
    this.model.node.setAttribute(name, value);
    this.model.attributes.set(name, value);

    return this;
  }

  addEventListener(event, callback) {
    this.model.node.addEventListener(event, callback);
    this.model.eventListeners.set(event, callback);

    return this;
  }

  createRoot() {
    document.body.appendChild(this.model.node);

    return this;
  }

  append(child) {
    this.model.node.appendChild(child.model.node);
    this.model.children.push(child);

    return this;
  }
}

const rowanjs = {
  component: (elem) => new Component(),
  element: (elem) => new Element(elem),
  state: (value) => new State(value),
};

window.rowanjs = rowanjs;
