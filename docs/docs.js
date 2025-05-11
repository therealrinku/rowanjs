const { element, component } = window.rowanjs;

import { selectedDocItem, searchState } from "./state-store.js";
import { sidebar } from "./components/sidebar.js";
import { topbar } from "./components/topbar.js";
import { stateDocs } from "./components/state-docs.js";
import { elementDocs } from "./components/element-docs.js";
import { componentDocs } from "./components/component-docs.js";
import { installationDocs } from "./components/installation-docs.js";

const root = component(() => {
  const rootElem = element("div");
  rootElem.addClass("flex flex-row");
  return rootElem;
});

const main = component(() => {
  const mainElem = element("div");
  mainElem.addClass("w-[82%] bg-gray-200 pt-16 min-h-screen px-5");

  return mainElem;
});

sidebar.addDep(selectedDocItem, searchState);
elementDocs.addDep(selectedDocItem);
stateDocs.addDep(selectedDocItem);
componentDocs.addDep(selectedDocItem);
installationDocs.addDep(selectedDocItem);

main.appendComponent(elementDocs, stateDocs, componentDocs, installationDocs);
root.appendComponent(sidebar, main, topbar);

root.makeRoot();
