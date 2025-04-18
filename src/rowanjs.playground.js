(async function () {
  const { state, element } = window.rowanjs;
  const root = element("div");
  root.addClass("bg-white h-[100vh] w-full flex items-center w-[100%]");
  root.createRoot();

  function createSidebar() {
    const sidebar = element("div");
    sidebar.addClass(
      "bg-gray-700 w-[15%] h-[100vh] px-3 py-2 flex flex-col gap-2 text-white text-sm",
    );
    root.append(sidebar);
    return sidebar;
  }

  const sidebar = createSidebar();
  const main = element("main");
  main.addClass("w-[85%] h-[100vh] bg-gray-100 px-5 py-2");
  root.append(main);

  const a = state(1);
  const bojor = state();
  bojor.set({ name: "Alex", lastName: "Hermozi", company: { name: "lms" } });

  const button = element("button");
  button.setText("toggle hola mundo");
  button.addClass("bg-green-500 px-5 py-1 text-white");
  button.onClick(() => a.set(a.get() + 1));
  sidebar.append(button);

  const showhola = state({show: false});
    
  const button2 = element("button");
  button2.addClass("bg-green-500 px-5 py-1 text-white");
  // button2.onClick(()=>bojor.set({...bojor.get(), name:"Poops"}))
  // button2.onClick(() =>
  //   bojor.set({ ...bojor.get(), company: { name: "algolia" } }),
  // );
  button2.onClick(()=>showhola.set({show: !showhola.get().show}))
  button2.setText("fetch users");
  sidebar.append(button2);
  
  const jpt = element("p");
  jpt.setText("hola mundo");
  jpt.showIf({ state: showhola, fn: () => showhola.get().show === true});
  sidebar.append(jpt);

  const text = element("p");
  text.setText(["Count is:", { state: bojor, key: "company.name" }]);
  sidebar.append(text);

  async function apicall() {
    // const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    // const users = await resp.json();
    const users = [{ name: "Alex", id: 29, company: { name: "oops" } }];

    const div = element("div");
    div.addClass("flex flex-col gap-2");

    const title = element("h5");
    title.setText("Users list");
    title.addClass("font-bold");
    div.append(title);

    for (const user of users) {
      const elem = element("p");
      const name = state(user.name);
      const id = state(user.id);
      elem.setText([name, id]);

      const bt = element("button");
      bt.setText("change");
      bt.onClick(() => name.set(user.company.name));
      elem.append(bt);

      div.append(elem);
    }

    main.append(div);
  }

  // button2.onClick(apicall);
})();
