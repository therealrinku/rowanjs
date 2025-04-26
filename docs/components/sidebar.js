const { element, component } = window.rowanjs;
import { selectedDocItem } from "../state-store.js";

const sidebarData = {
  Core: ["Component", "State", "Element"],
  "Component API": ["appendElement()", "getElement()", "addDep()"],
  "State API": ["set()", "get()"],
  "Element API": [
    "create()",
    "addClass()",
    "addStyles()",
    "setText()",
    "onClick()",
    "setAttribute()",
    "createRoot()",
    "append()",
    "showIf()",
  ],
};

function createAndAppendSection(title, root) {
  const section = element("p");
  section.setText(title);
  section.addClass("font-bold mt-3");
  root.append(section);
}

function createAndAppendDocButton(title, root) {
  const elem = element("button");
  elem.setText(title);
  elem.onClick(() => selectedDocItem.set(title));

  const active = selectedDocItem.get() === title;
  if (active) {
    elem.addClass("text-green-800");
  }

  root.append(elem);
}

export const sidebar = component(() => {
  const sidebarElem = element("div");
  sidebarElem.addClass(
    "w-[18%] min-h-screen max-h-screen overflow-y-auto max-w-[300px] bg-gray-300 pt-16 px-5 flex flex-col gap-3 py-5",
  );

  for (const [section, buttons] of Object.entries(sidebarData)) {
    createAndAppendSection(section, sidebarElem);
    buttons.forEach((title) => createAndAppendDocButton(title, sidebarElem));
  }

  return sidebarElem;
});
