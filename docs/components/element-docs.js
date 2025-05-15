const { element, component } = window.rowanjs;
import { selectedDocItem } from "../state-store.js";

const elementDocsData = [
  {
    title: "Element",
    description:
      "element is the building block of your web apps. it's wrapper around document.createElement essentially.",
    examples: [
      "const element = window.rowanjs.element",
      "const root = element('div')",
      "root.addClass('h-full w-full')",
    ],
  },
  {
    title: "addClass()",
    description: "Adds one or more Tailwind/CSS classes to the element.",
    examples: ['elem.addClass("bg-red-500 text-white")'],
  },
  {
    title: "addStyles()",
    description: "Applies inline styles via a JavaScript object.",
    examples: ['elem.addStyles({ backgroundColor: "black", color: "white" })'],
  },
  {
    title: "setText()",
    description:
      "Sets text content on the DOM element. Can include reactive states.",
    examples: ['elem.setText(["hello", { state, key: "name" }])'],
  },
  {
    title: "addEventListener()",
    description: "Attaches a event handler to the element.",
    examples: ["elem.addEventListener('click', () => alert('clicked'))"],
  },
  {
    title: "setAttribute()",
    description: "Sets an HTML attribute on the element.",
    examples: ["elem.setAttribute('aria-label', 'Close')"],
  },
  {
    title: "append()",
    description: "Appends a child element to a parent.",
    examples: ["parent.append(child)"],
  },
  {
    title: "setKey()",
    description: "set a unique key of child element - important for re-render",
    examples: ["element.setKey(stringKey)"],
  },
  {
    title: "element()",
    description:
      "Creates a new DOM element using a tag name. It's the starting point for building UI components in rowanjs.",
    examples: [
      "const root = element('div')",
      "const button = element('button')",
      "button.setText('Click me')",
    ],
  },
];

export const elementDocs = component(() => {
  const mainContent = element("div");

  elementDocsData.forEach((doc) => {
    const isVisible = selectedDocItem.get() === doc.title;

    const docDiv = element("div");
    docDiv.addClass(isVisible ? "block" : "hidden");
    docDiv.addClass("flex flex-col gap-5");

    const title = element("h5");
    title.setText(doc.title);
    title.addClass("font-bold");
    docDiv.append(title);

    const desc = element("p");
    desc.setText(doc.description);
    docDiv.append(desc);

    doc.examples.forEach((code) => {
      const example = element("div");
      example.setText(code);
      example.addClass("bg-gray-800 text-white p-2 rounded-md");
      docDiv.append(example);
    });

    mainContent.append(docDiv);
  });

  return mainContent;
});
