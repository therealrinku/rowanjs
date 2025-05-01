const { element, component } = window.rowanjs;
import { selectedDocItem } from "../state-store.js";

const installationDocData = [
  {
    title: "Installation",
    description:
      "Installation is quick and simple just add this script to your html body tag and you're good to go!",
    examples: [
      '<script src="https://cdn.jsdelivr.net/gh/therealrinku/rowanjs@main/src/rowanjs.js" type="module"></script>',
    ],
  },
];

export const installationDocs = component(() => {
  const mainContent = element("div");

  installationDocData.forEach((doc) => {
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
