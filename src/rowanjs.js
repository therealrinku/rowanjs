class State {
  constructor(value) {
    this.state = value;
    this.subscribers = new Array();
  }

  get() {
    return this.state;
  }

  __subscribe(elem) {
    console.log(elem, "sub");
    this.subscribers.push(elem);
  }

  __unused_isPublishable(lastState, newState) {
    if (this.subscribers.length === 0) {
      return false;
    }

    let publishable = true;

    this.subscribers.forEach((sub) => {
      sub.textNodes.forEach((node) => {
        if (typeof node === "object") {
          const { state, key } = node;

          if (!key) {
            publishable = lastState !== newState && publishable;
          }

          let lv = lastState;
          let nv = newState;

          const props = key.split(".");

          props.forEach((prop) => {
            lv = lv?.[prop];
            nv = nv?.[prop];
          });

          publishable = lv !== nv && publishable;
        } else {
          publishable = lastState !== newState && publishable;
        }
      });
    });

    return publishable;
  }

  __publish() {
    this.subscribers.forEach((sub) => sub.callback());
  }

  set(value) {
    const oldState = this.state;
    this.state = value;

    // const publishable = this.__isPublishable(oldState, value);
    // if (publishable) {
    this.__publish();
    // }
  }
}

class DOMElement {
  constructor(elem) {
    this.htmlelement = document.createElement(elem);
    this.textNodes = new Array();
  }

  __paint() {
    const texts = [];

    this.textNodes.forEach((node) => {
      if (typeof node === "object") {
        const { state, key } = node;
        if (!key) {
          texts.push(state.get());
        } else {
          const props = key.split(".");
          let val = state.get();

          for (const prop of props) {
            val = val[prop];
          }

          texts.push(val);
        }
      } else {
        texts.push(node);
      }
    });

    this.htmlelement.innerText = texts.join(" ");
  }

  setText(t) {
    if (Array.isArray(t)) {
      t.forEach((txt) => this.setText(txt));
      return this;
    }

    if (typeof t === "object") {
      const { state, key } = t;
      if ((!state) instanceof State) {
        throw new Error("Invalid state given", this.htmlelement);
      }

      state.__subscribe({ callback: () => this.__paint() });
      this.textNodes.push({ state, key });
    } else {
      this.textNodes.push(t);
    }

    this.__paint();
    return this;
  }

  showIf(v) {
    if (typeof v !== "object" && !(v instanceof State)) {
      throw new Error("showIf method only takes instance of state");
    }

    if (typeof v === "object" && !(v.state instanceof State)) {
      throw new Error("showIf method only takes instance of state");
    }

    v.state.__subscribe({
      callback: () => {
        this.htmlelement.style.display = v.fn() ? "block" : "none";
      },
    });

    this.htmlelement.style.display = v.fn() ? "block" : "none";
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
  element: (elem) => new DOMElement(elem),
  state: (value) => new State(value),
};

window.rowanjs = rowanjs;
