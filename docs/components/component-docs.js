const { component, element } = window.rowanjs;
import { selectedDocItem } from "../state-store.js";

const componentDocsData = [
  {
    title: "Component",
    description:
      "Components are the building blocks for creating reactive UI elements. They encapsulate DOM elements and provide reactivity when state changes.",
    examples: [
      "const counter = component(() => {",
      "  const container = element('div');",
      "  container.setText(count.get());",
      "  return container;",
      "});",
      "counter.addDep(count); // Will re-render when count changes",
    ],
  },
  {
    title: "appendComponent()",
    description:
      "Appends one or more child components to the current component. Accepts multiple components as parameters.",
    examples: [
      "// Append a single component",
      "parent.appendComponent(child);",
      "// Append multiple components",
      "parent.appendComponent(header, content, footer);",
    ],
  },
  {
    title: "getElement()",
    description: "Returns the underlying DOM element of the component.",
    examples: ["const element = myComponent.getElement();"],
  },
  {
    title: "addDep()",
    description:
      "Makes the component reactive by adding dependencies to state objects. The component will automatically re-render when any of the dependent states change.",
    examples: [
      "// Add a single state dependency",
      "myComponent.addDep(countState);",
      "// Add multiple state dependencies",
      "myComponent.addDep(name, age, theme);",
    ],
  },
];

export const componentDocs = component(() => {
  const mainContent = element("div");

  componentDocsData.forEach((doc) => {
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
