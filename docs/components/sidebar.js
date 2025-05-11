const { element, component, state } = window.rowanjs;
import { selectedDocItem } from "../state-store.js";
import { searchState } from "../state-store.js";

const sidebarData = {
  Core: ["Installation", "Component", "State", "Element"],
  "Component API": ["appendComponent()", "getElement()", "addDep()"],
  "State API": ["set()", "get()"],
  "Element API": [
    "create()",
    "addClass()",
    "addStyles()",
    "setText()",
    "addEventListener()",
    "setAttribute()",
    "append()",
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
  elem.addEventListener("click", () => selectedDocItem.set(title));

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

  const input = element("input");
  input.setAttribute("value", searchState.get());
  input.addEventListener("onchange", (e) => searchState.set(e.target.value));
  input.setAttribute("placeholder", "search...");
  input.addClass(
    "border border-gray-500 w-full min-h-12 max-h-12 outline-none px-2",
  );
  sidebarElem.append(input);

  const filteredSidebarData = Object.entries(sidebarData).map((obj) => {
    const title = obj[0];
    const sectionTitles = obj[1];

    const filteredSectionTitles = [...sectionTitles].filter((sectionTitle) => {
      if (
        sectionTitle.toLowerCase().includes(searchState.get().toLowerCase())
      ) {
        return true;
      }

      return false;
    });

    return [title, filteredSectionTitles];
  });

  for (const [section, buttons] of filteredSidebarData) {
    if (buttons.length > 0) {
      createAndAppendSection(section, sidebarElem);
      buttons.forEach((title) => createAndAppendDocButton(title, sidebarElem));
    }
  }

  return sidebarElem;
});
