(async function () {
  const { State, DOMElement } = window.rowanjs;
  const root = DOMElement("div");
  root.addClass("bg-white h-[100vh] w-full");
  root.createRoot();

  function createSidebar() {
    const sidebar = DOMElement("div");
    sidebar.addClass(
      "bg-gray-700 w-[15vw] h-[100vh] p-2 flex flex-col gap-2 text-white",
    );
    root.append(sidebar);
    return sidebar;
  }

  const sidebar = createSidebar();

  const a = State(1);
  const bojor = State();
  bojor.set({ name: "Alex", lastName: "Hermozi", company: { name: "lms" } });

  const button = DOMElement("button");
  button.setText("increment count");
  button.addClass("bg-green-500 px-5 py-1 text-white");
  button.onClick(() => a.set(a.get() + 1));
  sidebar.append(button);

  const button2 = DOMElement("button");
  button2.addClass("bg-green-500 px-5 py-1 text-white");
  button2.setText("update bojor");
  button2.onClick(() =>
    bojor.set({ ...bojor.get(), company: { name: "GOOGL" } }),
  );
  sidebar.append(button2);

  const text = DOMElement("p");
  text.setText(["Count is:", a]).addDep(a);
  sidebar.append(text);

  const anothertext = DOMElement("p");
  const ist = State(bojor.get().company.name);
  anothertext.setText(ist);
  anothertext.addDep(bojor);
  sidebar.append(anothertext);
})();
