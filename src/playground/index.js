import {
  State,
  DOMElement,
} from "https://github.com/therealrinku/rowanjs/blob/main/src/rowanjs.js";

(async function () {
  const root = DOMElement("div");
  root.addStyles({ backgroundColor: "white", height: "100vh", width: "100%" });
  root.createRoot();

  function createSidebar() {
    const sidebar = DOMElement("div");
    // sidebar.addClass("bg-gray-500 w-[15vw] h-[100vh]");

    sidebar.addStyles({
      backgroundColor: "rgba(0,0,0,0.5)",
      width: "15vw",
      height: "100vh",
    });

    root.append(sidebar);
    return sidebar;
  }

  const sidebar = createSidebar();

  const a = State(1);
  const bojor = State();
  bojor.set({ name: "Alex", lastName: "Hermozi", company: { name: "lms" } });

  const button = DOMElement("button");
  button.setText("increment a");
  button.onClick(() => a.set(a.get() + 1));
  sidebar.append(button);

  const button2 = DOMElement("button");
  button2.setText("update bojor");
  button2.onClick(() =>
    bojor.set({ ...bojor.get(), company: { name: "GOOGL" } }),
  );
  sidebar.append(button2);

  const span = DOMElement("span");
  span.addStyles({ color: "white", display: "flex", gap: "4px" });
  sidebar.append(span);

  const text = DOMElement("p");
  text.setText(["Count is:", a]).addDep(a);
  span.append(text);

  const anothertext = DOMElement("p");
  const ist = State(bojor.get().company.name);
  anothertext.setText(ist);
  anothertext.addDep(bojor);
  span.append(anothertext);
})();
