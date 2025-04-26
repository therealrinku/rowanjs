const { component, element } = window.rowanjs;
import { selectedDocItem } from "../state-store.js";

const stateDocsData = [
  {
    title: "State",
    description:
      "state can hold all the essential data for your web app. It can hold any primitive values, objects or arrays.",
    examples: [
      "const state = window.rowanjs.state",
      "const a = state(1)",
      "console.log(a.get()) // 1",
      "const deep = state({ name : 'Alex', company: { name: 'Google' } })",
      "console.log(deep.get().company.name) // Google",
    ],
  },
  {
    title: "set()",
    description: "Used to update the value of a state instance.",
    examples: ["a.set(2)"],
  },
  {
    title: "get()",
    description: "Used to retrieve the current value of a state instance.",
    examples: ["console.log(a.get()) // 2"],
  },
];

export const stateDocs = component(() => {
  const mainContent = element("div");

  stateDocsData.forEach((doc) => {
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
