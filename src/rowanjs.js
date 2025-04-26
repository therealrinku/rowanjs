class Component {
  constructor(fn) {
    this.component = fn();
    this.componentFn = fn;
  }

  appendElement(...elements) {
    elements.forEach((element) => {
      if(!(element instanceof Component)){
        throw new Error("append() method only takes Component as an argument.");
      }

      this.component.htmlelement.appendChild(element.get().htmlelement);
    });
    return this;
  }

  get() {
    return this.component;
  }

  #rerender() {
    const parentElement = this.component.htmlelement.parentElement;
    const originalElement = this.component.htmlelement;
    
    this.component = this.componentFn();
    
    if (parentElement) {
      parentElement.replaceChild(this.component.htmlelement, originalElement);
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

class DOMElement {
  constructor(elem) {
    this.htmlelement = document.createElement(elem);
  }

  setText(...t) {
    t.forEach((txt) => {
      this.htmlelement.innerText += txt;
    });
    return this;
  }

  showIf(fn) {
    if (typeof fn !== "function") {
      throw new Error("showIf() only takes function argument.");
    }

    // TODO: make it better?
    this.htmlelement.innerHTML = fn() ? true : false;
    return this;
  }

  addClass(classNames) {
    classNames = classNames.split(" ");
    this.htmlelement.classList.add(...classNames);
    return this;
  }

  onClick(callbackFn) {
    this.htmlelement.onclick = callbackFn;
    return this;
  }

  addStyles(stylesObj) {
    const styles = Object.entries(stylesObj);
    for (const s of styles) {
      const [key, value] = s;
      this.htmlelement.style[key] = value;
    }
    return this;
  }

  setAttribute(name, value) {
    this.htmlelement.setAttribute(name, value);
    return this;
  }

  createRoot() {
    document.body.appendChild(this.htmlelement);
    return this;
  }

  append(child) {
    this.htmlelement.appendChild(child.htmlelement);
    return this;
  }
}

const rowanjs = {
  component: (fn) => new Component(fn),
  element: (elem) => new DOMElement(elem),
  state: (value) => new State(value),
};

window.rowanjs = rowanjs;
