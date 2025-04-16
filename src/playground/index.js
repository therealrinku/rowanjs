(async function () {
  const { state, element } = window.rowanjs;
  const root = element("div");
  root.addClass("bg-white h-[100vh] w-full");
  root.createRoot();

  function createSidebar() {
    const sidebar = element("div");
    sidebar.addClass(
      "bg-gray-700 w-[15vw] h-[100vh] p-2 flex flex-col gap-2 text-white",
    );
    root.append(sidebar);
    return sidebar;
  }

  const sidebar = createSidebar();

  const a = state(1);
  const bojor = state();
  bojor.set({ name: "Alex", lastName: "Hermozi", company: { name: "lms" } });

  const button = element("button");
  button.setText("increment count");
  button.addClass("bg-green-500 px-5 py-1 text-white");
  button.onClick(() => a.set(a.get() + 1));
  sidebar.append(button);

  const button2 = element("button");
  button2.addClass("bg-green-500 px-5 py-1 text-white");
  button2.setText("update bojor");
  sidebar.append(button2);

  const text = element("p");
  text.setText(["Count is:", a]);
  text.addDep(a);
  sidebar.append(text);

  const anothertext = element("p");
  const ist = state(bojor.get().company.name);
  button2.onClick(() => ist.set(ist.get() === "poof" ? "lms" : "poof"));
  anothertext.setText(ist);
  anothertext.addDep(ist);
  sidebar.append(anothertext);
})();
