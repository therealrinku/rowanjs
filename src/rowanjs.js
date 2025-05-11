class Component {
  constructor(fn) {
    this.fn = fn;
    this.element = this.fn();
    this.#render(this.element.model);
  }

  #render(model) {
    const node = document.createElement(model.nodeName);
    const childNodes = model.children.map((childNode) => {
      return this.#render(childNode.model);
    });

    node.innerText = model.innerText;
    for (const [key, value] of model.styles) {
      node.style[key] = value;
    }
    for (const className of model.classNames) {
      node.classList.add(className);
    }
    for (const [name, value] of model.attributes) {
      node.setAttribute(name, value);
    }
    for (const [event, callback] of model.eventListeners) {
      node.addEventListener(event, callback);
    }
    for (const childNode of childNodes) {
      node.appendChild(childNode);
    }

    this.element.model.node = node;
    return this.element.model.node;
  }

  #reRender() {
    const newElementModel = this.fn().model;
    const oldElementModel = this.element.model;
  }

  makeRoot() {
    document.body.appendChild(this.element.model.node);
  }

  addDep(...states) {
    for (const state of states) {
      if (!(state instanceof State)) {
        throw new Error("addDep only takes state as a dependency");
      }
      state.subscribe({ callback: () => this.#reRender() });
    }
  }

  appendComponent(...components) {
    for (const component of components) {
      if (!(component instanceof Component)) {
        throw new Error("append only takes component as a dependency");
      }
      this.element.model.node.appendChild(component.element.model.node);
    }
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
    this.subscribers.push(elem);
  }

  #publish() {
    this.subscribers.forEach((sub) => sub.callback());
  }

  set(value) {
    const oldState = this.state;
    this.state = value;

    this.#publish();
  }
}

class Element {
  constructor(nodeName) {
    this.model = {
      nodeName: nodeName,
      innerText: null,
      classNames: new Set(),
      styles: new Map(),
      attributes: new Map(),
      eventListeners: new Map(),
      children: new Array(),
    };
  }

  setText(text) {
    this.model.innerText = text;
    return this;
  }

  addClass(classNames) {
    classNames = classNames.split(" ");
    classNames.forEach((cls) => this.model.classNames.add(cls));
    return this;
  }

  addStyles(stylesObj) {
    const styles = Object.entries(stylesObj);
    for (const s of styles) {
      const [key, value] = s;
      this.model.styles.set(key, value);
    }
    return this;
  }

  setAttribute(name, value) {
    this.model.attributes.set(name, value);
    return this;
  }

  addEventListener(event, callback) {
    this.model.eventListeners.set(event, callback);
    return this;
  }

  append(child) {
    if (!(child instanceof Element)) {
      throw new Error("append only takes element");
    }

    this.model.children.push(child);
    return this;
  }

}

const rowanjs = {
  component: (fn) => new Component(fn),
  element: (elem) => new Element(elem),
  state: (value) => new State(value),
};

window.rowanjs = rowanjs;
