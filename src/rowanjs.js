class Component {
  constructor(fn) {
    this.fn = fn;
    this.element = this.fn();
    this.#render();
  }

  #render(model = this.element.model) {
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

    model.node = node;
    return model.node;
  }

  #reRender(newElem, elem, parent) {
    if (!newElem && !elem) {
      return;
    }

    // Handle child elements
    // very unperformant right now!! obviously!
    if (newElem && elem) {
      const c1 = elem?.children?.length || 0;
      const c2 = newElem?.children?.length || 0;

      // append new child
      for (let i = 0; i < c2; i++) {
        this.#reRender(newElem.children?.[i]?.model, null, elem);
      }

      // remove old child
      for (let i = c1 - 1; i >= 0; i--) {
        this.#reRender(null, elem.children?.[i]?.model, elem);
      }
    }

    // if this child is new, append it
    if (newElem && !elem && parent) {
      const updatedNewElem = this.#render(newElem);
      const childModelRef = { model: newElem };
      newElem.node = updatedNewElem;
      parent.children.push(childModelRef);
      parent.node.appendChild(updatedNewElem);
      return;
    }

    // if this child is removed in new render, remove it
    if (!newElem && elem && parent) {
      parent.node.removeChild(elem.node);
      const index = parent.children.findIndex((child) => child.model === elem);
      if (index !== -1) {
        parent.children.splice(index, 1);
      }
      return;
    }

    if (newElem.nodeName !== elem.nodeName) {
      elem.nodeName = newElem.nodeName;
      parent.node.removeChild(elem.node);
      const updatedNewElem = this.#render(newElem);
      newElem.node = updatedNewElem;
      const childModelRef = { model: newElem };
      const idx = parent.children.findIndex((child) => child.model === elem);
      parent.children.splice(idx, 1, childModelRef);
    }
    if (newElem.innerText !== elem.innerText) {
      elem.innerText = newElem.innerText;
      elem.node.innerText = newElem.innerText;
    }

    // styles
    const addedStyles = new Map();
    const removedStyles = new Map();
    const updatedStyles = new Map();

    newElem.styles.forEach((value, key, map) => {
      if (!elem.styles.has(key)) {
        addedStyles.set(key, value);
      }
    });
    elem.styles.forEach((value, key, map) => {
      if (!newElem.styles.has(key)) {
        removedStyles.set(key, value);
      } else if (newElem.styles.get(key) !== map.get(key)) {
        updatedStyles.set(key, newElem.styles.get(key));
      }
    });
    for (const [key, value] of addedStyles) {
      elem.node.styles[key] = value;
      elem.styles.set(key, value);
    }
    for (const [key, value] of updatedStyles) {
      elem.node.styles[key] = value;
      elem.styles.set(key, value);
    }
    for (const [key, value] of removedStyles) {
      delete elem.node.styles[key];
    }

    //classnames
    const addedClassNames = new Set();
    const removedClassNames = new Set();

    newElem.classNames.forEach((value) => {
      if (!elem.classNames.has(value)) {
        addedClassNames.add(value);
      }
    });
    elem.classNames.forEach((value) => {
      if (!newElem.classNames.has(value)) {
        removedClassNames.add(value);
      }
    });
    addedClassNames.forEach((cls) => {
      elem.classNames.add(cls);
      elem.node.classList.add(cls);
    });
    removedClassNames.forEach((cls) => {
      elem.classNames.delete(cls);
      elem.node.classList.remove(cls);
    });

    //attribures,
    const addedAttributes = new Map();
    const removedAttributes = new Map();
    const updatedAttributes = new Map();

    newElem.attributes.forEach((value, key, map) => {
      if (!elem.attributes.has(key)) {
        addedAttributes.set(key, value);
      }
    });
    elem.attributes.forEach((value, key, map) => {
      if (!newElem.attributes.has(key)) {
        removedAttributes.set(key, value);
      } else if (newElem.attributes.get(key) !== map.get(key)) {
        updatedAttributes.set(key, newElem.attributes.get(key));
      }
    });
    for (const [key, value] of addedAttributes) {
      elem.node.setAttribute(key, value);
      elem.attributes.set(key, value);
    }
    for (const [key, value] of updatedAttributes) {
      elem.node.setAttribute(key, value);
      elem.attributes.set(key, value);
    }
    for (const [key, value] of removedAttributes) {
      elem.node.removeAttribute(key);
      elem.attributes.delete(key);
    }

    //eventlistenres
    const addedEventListeners = new Map();
    const removedEventListeners = new Map();
    const updatedEventListeners = new Map();

    newElem.eventListeners.forEach((value, key, map) => {
      if (!elem.eventListeners.has(key)) {
        addedEventListeners.set(key, value);
      }
    });
    elem.eventListeners.forEach((value, key, map) => {
      if (!newElem.eventListeners.has(key)) {
        removedEventListeners.set(key, value);
      } else if (newElem.eventListeners.get(key) !== map.get(key)) {
        updatedEventListeners.set(key, newElem.eventListeners.get(key));
      }
    });
    for (const [key, value] of addedEventListeners) {
      elem.node.addEventListener(key, value);
      elem.eventListeners.set(key, value);
    }
    for (const [key, value] of updatedEventListeners) {
      elem.node.removeEventListener(key, elem.eventListeners.get(key));
      elem.node.addEventListener(key, value);
      elem.eventListeners.set(key, value);
    }
    for (const [key, value] of removedEventListeners) {
      elem.node.removeEventListener(key, elem.eventListeners.get(key));
      elem.eventListeners.delete(key);
    }
  }

  makeRoot() {
    document.body.appendChild(this.element.model.node);
  }

  addDep(...states) {
    for (const state of states) {
      if (!(state instanceof State)) {
        throw new Error("addDep only takes state as a dependency");
      }
      state.subscribe({
        callback: () => {
          this.#reRender(this.fn().model, this.element.model);
        },
      });
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
      key: null,
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

  setKey(key){
    this.model.key = key;
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
