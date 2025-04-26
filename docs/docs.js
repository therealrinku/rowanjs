const { element, component } = window.rowanjs;

import { selectedDocItem } from "./state-store.js";
import { sidebar } from "./components/sidebar.js";
import { topbar } from "./components/topbar.js";
import { stateDocs } from "./components/state-docs.js";
import { elementDocs } from "./components/element-docs.js";
import { componentDocs } from "./components/component-docs.js";

const root = component(() => {
  const rootElem = element("div");
  rootElem.addClass("flex flex-row");
  rootElem.createRoot();

  return rootElem;
});

const main = component(() => {
  const mainElem = element("div");
  mainElem.addClass("w-[82%] bg-gray-200 pt-16 min-h-screen px-5");

  return mainElem;
});

sidebar.addDep(selectedDocItem);
elementDocs.addDep(selectedDocItem);
stateDocs.addDep(selectedDocItem);
componentDocs.addDep(selectedDocItem);

main.appendElement(elementDocs, stateDocs, componentDocs);
root.appendElement(sidebar, main, topbar);

root.get().createRoot();
