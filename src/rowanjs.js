class State {
  constructor(value) {
    this.state = value;
    this.subscribers = new Array();
  }

  __subscribe(elem) {
    this.subscribers.push(elem);
  }

  __publish() {
    for (const subscriber of this.subscribers) {
      const v = subscriber.texts.map((txt) => {
        return txt instanceof State ? txt.get() : txt;
      });
      console.log(subscriber.innerText, v);
      subscriber.innerText = v.join(" ");
    }
  }

  get() {
    return this.state;
  }

  set(value) {
    this.state = value;
    this.__publish();
  }
}

class DOMElement {
  constructor(elem) {
    this.htmlelement = document.createElement(elem);
  }

  setText(v) {
    if (Array.isArray(v)) {
      v.forEach((p) => this.setText(p));
      return this;
    }

    if (!this.htmlelement.texts) {
      this.htmlelement.texts = [];
    }

    this.htmlelement.texts.push(v);

    const renderedText = this.htmlelement.texts
      .map((txt) => (txt instanceof State ? txt.get() : txt))
      .join(" ");

    this.htmlelement.innerText = renderedText;
    return this;
  }

  addClass(classNames) {
    classNames = classNames.split(" ");
    this.htmlelement.classList.add(...classNames);
    return this;
  }

  addDep(deps) {
    deps = Array.isArray(deps) ? deps : [deps];
    for (const dep of deps) {
      dep.__subscribe(this.htmlelement);
    }
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

function deep(s, key, node) {
  if ((!s) instanceof State) {
    throw new Error(`deep only takes instances of State`);
  }

  const k = key.split(".");

  let state = s.state;

  k.forEach((p) => {
    state = state[p];
  });
  const stt = new State(state);
  node.setText(stt);
}

const rowanDotJs = {
  deep,
  DOMElement: (elem) => new DOMElement(elem),
  State: (value) => new State(value),
};

export default rowanDotJs;
