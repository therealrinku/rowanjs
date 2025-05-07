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
  constructor(elem) {
    this.htmlelement = document.createElement(elem);
  }

  #rerender() {
    const parentElement = this.htmlelement.parentElement;
    const originalElement = this.htmlelement;

    //preserve useful states from last render
    const scrollTop = this.htmlelement.scrollTop;
    const scrollLeft = this.htmlelement.scrollLeft;

    this.component = this.componentFn();
    if (parentElement) {
      parentElement.replaceChild(this.htmlelement, originalElement);
      //apply last useful states
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

  setValue(value) {
    this.htmlelement.value = value;
  }

  onClick(callbackFn) {
    this.htmlelement.onclick = callbackFn;
    return this;
  }

  onChange(callbackFn) {
    this.htmlelement.onchange = callbackFn;
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
  element: (elem) => new element(elem),
  state: (value) => new State(value),
};

window.rowanjs = rowanjs;
