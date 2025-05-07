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
      children: [],
      attributes: [],
      eventListeners: []
    };
  }

  #rerender() {
    const { node } = this.model;
    const parentElement = node.parentElement;
    const originalElement = node;

    //preserve useful states from last render
    const scrollTop = node.scrollTop;
    const scrollLeft = node.scrollLeft;

    this.component = this.componentFn();

    if (parentElement) {
      parentElement.replaceChild(this.component, originalElement);

      requestAnimationFrame(() => {
        this.htmlelement.scrollTop = scrollTop;
        this.htmlelement.scrollLeft = scrollLeft;
      });
    }
  }

  addDep(...states) {
    // TODO: add ability to add granular dependecies
    states.forEach((state) => {
      if (!(state instanceof State)) {
        throw new Error("addDep() method only takes State as an argument.");
      }

      state.subscribe({ callback: () => this.#rerender() });
    });
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
    return this;
  }

  setValue(value) {
    this.model.node.value = value;
  }

  onClick(callbackFn) {
    this.mode.node.onclick = callbackFn;
    return this;
  }

  onChange(callbackFn) {
    this.model.node.onchange = callbackFn;
    return this;
  }

  addStyles(stylesObj) {
    const styles = Object.entries(stylesObj);
    for (const s of styles) {
      const [key, value] = s;
      this.model.node.style[key] = value;
    }
    return this;
  }

  setAttribute(name, value) {
    this.model.node.setAttribute(name, value);
    return this;
  }

  createRoot() {
    document.body.appendChild(this.model.node);
    return this;
  }

  append(child) {
    this.model.node.appendChild(child.model.node);
    return this;
  }
}

const rowanjs = {
  element: (elem) => new Element(elem),
  state: (value) => new State(value),
};

window.rowanjs = rowanjs;
