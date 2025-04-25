const { element, component, state } = window.rowanjs;

const selectedDocItem = state("state");

const root = component(() => {
  const rootElem = element("div");

  rootElem.addClass("flex flex-row");
  rootElem.createRoot();

  return rootElem;
});

const topbar = component(() => {
  const topbarElem = element("div");
  topbarElem.addClass(
    "bg-gray-300 h-12 p-2 fixed top-0 left-0 right-0 px-5 border-b",
  );
  // add little title to topbar
  const topbartitle = element("p");
  topbartitle.setText("rowanjs docs");
  topbarElem.append(topbartitle);

  return topbarElem;
});

const sidebar = component(() => {
  const sidebarElem = element("div");
  sidebarElem.addClass(
    "w-[18%] min-h-screen max-h-screen overflow-y-auto max-w-[300px] bg-gray-300 pt-16 px-5 flex flex-col gap-3 py-5",
  );
  const coretitle = element("p");
  coretitle.setText("Core");
  coretitle.addClass("font-bold");
  sidebarElem.append(coretitle);

  const componentdoc = element("button");
  componentdoc.onClick(() => selectedDocItem.set("component"));
  componentdoc.setText("component");
  componentdoc.addClass(
    `${selectedDocItem.get() === "component" && "text-green-800"}`,
  );
  sidebarElem.append(componentdoc);

  const statedoc = element("button");
  statedoc.onClick(() => {
    selectedDocItem.set("state");
  });
  statedoc.setText("state");
  statedoc.addClass(`${selectedDocItem.get() === "state" && "text-green-800"}`);
  sidebarElem.append(statedoc);

  const elementdoc = element("button");
  elementdoc.onClick(() => {
    selectedDocItem.set("element");
  });
  elementdoc.setText("element");
  elementdoc.addClass(
    `${selectedDocItem.get() === "element" && "text-green-800"}`,
  );
  sidebarElem.append(elementdoc);

  // Component API header
  const componentapititle = element("p");
  componentapititle.setText("component API");
  componentapititle.addClass("font-bold mt-3");
  sidebarElem.append(componentapititle);

  const componentappenddoc = element("button");
  componentappenddoc.onClick(() => selectedDocItem.set("componentAppend"));
  componentappenddoc.setText("append()");
  componentappenddoc.addClass(
    `${selectedDocItem.get() === "componentAppend" && "text-green-800"}`,
  );
  sidebarElem.append(componentappenddoc);

  const componentgetdoc = element("button");
  componentgetdoc.onClick(() => selectedDocItem.set("componentGet"));
  componentgetdoc.setText("get()");
  componentgetdoc.addClass(
    `${selectedDocItem.get() === "componentGet" && "text-green-800"}`,
  );
  sidebarElem.append(componentgetdoc);

  const componentadddep = element("button");
  componentadddep.onClick(() => selectedDocItem.set("componentAddDep"));
  componentadddep.setText("addDep()");
  componentadddep.addClass(
    `${selectedDocItem.get() === "componentAddDep" && "text-green-800"}`,
  );
  sidebarElem.append(componentadddep);

  // State API header
  const stateapititle = element("p");
  stateapititle.setText("state API");
  stateapititle.addClass("font-bold mt-3");
  sidebarElem.append(stateapititle);

  const setdoc = element("button");
  setdoc.onClick(() => selectedDocItem.set("setdoc"));
  setdoc.setText("set()");
  setdoc.addClass(`${selectedDocItem.get() === "setdoc" && "text-green-800"}`);
  sidebarElem.append(setdoc);

  const getdoc = element("button");
  getdoc.onClick(() => selectedDocItem.set("getdoc"));
  getdoc.setText("get()");
  getdoc.addClass(`${selectedDocItem.get() === "getdoc" && "text-green-800"}`);
  sidebarElem.append(getdoc);

  const elementapititle = element("p");
  elementapititle.setText("element API");
  elementapititle.addClass("font-bold");
  sidebarElem.append(elementapititle);

  const createdoc = element("button");
  createdoc.onClick(() => selectedDocItem.set("createdoc"));
  createdoc.setText("create()");
  createdoc.addClass(
    `${selectedDocItem.get() === "createdoc" && "text-green-800"}`,
  );
  sidebarElem.append(createdoc);

  const addclassdoc = element("button");
  addclassdoc.onClick(() => selectedDocItem.set("addclassdoc"));
  addclassdoc.setText("addClass()");
  addclassdoc.addClass(
    `${selectedDocItem.get() === "addclassdoc" && "text-green-800"}`,
  );
  sidebarElem.append(addclassdoc);

  const addstylesdoc = element("button");
  addstylesdoc.onClick(() => selectedDocItem.set("addstylesdoc"));
  addstylesdoc.setText("addStyles()");
  addstylesdoc.addClass(
    `${selectedDocItem.get() === "addstylesdoc" && "text-green-800"}`,
  );
  sidebarElem.append(addstylesdoc);

  const settextdoc = element("button");
  settextdoc.onClick(() => selectedDocItem.set("settextdoc"));
  settextdoc.setText("setText()");
  settextdoc.addClass(
    `${selectedDocItem.get() === "settextdoc" && "text-green-800"}`,
  );
  sidebarElem.append(settextdoc);

  const onclickdoc = element("button");
  onclickdoc.onClick(() => selectedDocItem.set("onclickdoc"));
  onclickdoc.setText("onClick()");
  onclickdoc.addClass(
    `${selectedDocItem.get() === "onclickdoc" && "text-green-800"}`,
  );
  sidebarElem.append(onclickdoc);

  const setattributedoc = element("button");
  setattributedoc.onClick(() => selectedDocItem.set("setattributedoc"));
  setattributedoc.setText("setAttribute()");
  setattributedoc.addClass(
    `${selectedDocItem.get() === "setattributedoc" && "text-green-800"}`,
  );
  sidebarElem.append(setattributedoc);

  const createrootdoc = element("button");
  createrootdoc.onClick(() => selectedDocItem.set("createrootdoc"));
  createrootdoc.setText("createRoot()");
  createrootdoc.addClass(
    `${selectedDocItem.get() === "createrootdoc" && "text-green-800"}`,
  );
  sidebarElem.append(createrootdoc);

  const appenddoc = element("button");
  appenddoc.onClick(() => selectedDocItem.set("appenddoc"));
  appenddoc.setText("append()");
  appenddoc.addClass(
    `${selectedDocItem.get() === "appenddoc" && "text-green-800"}`,
  );
  sidebarElem.append(appenddoc);

  const showifdoc = element("button");
  showifdoc.onClick(() => selectedDocItem.set("showifdoc"));
  showifdoc.setText("showIf()");
  showifdoc.addClass(
    `${selectedDocItem.get() === "showifdoc" && "text-green-800"}`,
  );
  sidebarElem.append(showifdoc);

  return sidebarElem;
});

const elementDocs = component(() => {
  // Debug to show when this component renders
  console.log(
    "elementdocs-render - current selectedDocItem:",
    selectedDocItem.get(),
  );
  const elemdocs = element("div");
  elemdocs.addClass(selectedDocItem.get() === "element" ? "block" : "hidden");
  elemdocs.addClass("flex flex-col gap-5");

  const elemdocstitle = element("h5");
  elemdocstitle.setText("Element");
  elemdocstitle.addClass("font-bold");
  elemdocs.append(elemdocstitle);

  const elemdocsdes = element("p");
  elemdocsdes.setText(
    "element is the building block of your web apps. it's wrapper around document.createElement essentially.",
  );
  elemdocs.append(elemdocsdes);

  const elemexample0 = element("div");
  elemexample0.setText("const element = window.rowanjs.element");
  elemexample0.addClass("bg-gray-800 text-white p-2 rounded-md");
  elemdocs.append(elemexample0);

  const elemexample1 = element("div");
  elemexample1.setText("const root = element('div')");
  elemexample1.addClass("bg-gray-800 text-white p-2 rounded-md");
  elemdocs.append(elemexample1);

  const elemexample2 = element("div");
  elemexample2.setText("root.createRoot()");
  elemexample2.addClass("bg-gray-800 text-white p-2 rounded-md");
  elemdocs.append(elemexample2);

  const mainContent = element("div");
  mainContent.append(elemdocs);

  const addclassdocdiv = element("div");
  addclassdocdiv.addClass(
    selectedDocItem.get() === "addclassdoc" ? "block" : "hidden",
  );
  addclassdocdiv.addClass("flex flex-col gap-5");

  const addclasstitle = element("h5");
  addclasstitle.setText("addClass()");
  addclasstitle.addClass("font-bold");
  addclassdocdiv.append(addclasstitle);

  const addclassdes = element("p");
  addclassdes.setText("Adds one or more Tailwind/CSS classes to the element.");
  addclassdocdiv.append(addclassdes);

  const addclassexample = element("div");
  addclassexample.setText('elem.addClass("bg-red-500 text-white")');
  addclassexample.addClass("bg-gray-800 text-white p-2 rounded-md");
  addclassdocdiv.append(addclassexample);

  mainContent.append(addclassdocdiv);

  const addstylesdocdiv = element("div");
  addstylesdocdiv.addClass(
    selectedDocItem.get() === "addstylesdoc" ? "block" : "hidden",
  );
  addstylesdocdiv.addClass("flex flex-col gap-5");

  const addstylestitle = element("h5");
  addstylestitle.setText("addStyles()");
  addstylestitle.addClass("font-bold");
  addstylesdocdiv.append(addstylestitle);

  const addstylesdes = element("p");
  addstylesdes.setText("Applies inline styles via a JavaScript object.");
  addstylesdocdiv.append(addstylesdes);

  const addstylesexample = element("div");
  addstylesexample.setText(
    'elem.addStyles({ backgroundColor: "black", color: "white" })',
  );
  addstylesexample.addClass("bg-gray-800 text-white p-2 rounded-md");
  addstylesdocdiv.append(addstylesexample);

  mainContent.append(addstylesdocdiv);

  const settextdocdiv = element("div");
  settextdocdiv.addClass(
    selectedDocItem.get() === "settextdoc" ? "block" : "hidden",
  );
  settextdocdiv.addClass("flex flex-col gap-5");

  const settexttitle = element("h5");
  settexttitle.setText("setText()");
  settexttitle.addClass("font-bold");
  settextdocdiv.append(settexttitle);

  const settextdes = element("p");
  settextdes.setText(
    "Sets text content on the DOM element. Can include reactive states.",
  );
  settextdocdiv.append(settextdes);

  const settextexample = element("div");
  settextexample.setText('elem.setText(["hello", { state, key: "name" }])');
  settextexample.addClass("bg-gray-800 text-white p-2 rounded-md");
  settextdocdiv.append(settextexample);

  mainContent.append(settextdocdiv);

  const onclickdocdiv = element("div");
  onclickdocdiv.addClass(
    selectedDocItem.get() === "onclickdoc" ? "block" : "hidden",
  );
  onclickdocdiv.addClass("flex flex-col gap-5");

  const onclicktitle = element("h5");
  onclicktitle.setText("onClick()");
  onclicktitle.addClass("font-bold");
  onclickdocdiv.append(onclicktitle);

  const onclickdes = element("p");
  onclickdes.setText("Attaches a click handler function to the element.");
  onclickdocdiv.append(onclickdes);

  const onclickexample = element("div");
  onclickexample.setText("elem.onClick(() => alert('clicked'))");
  onclickexample.addClass("bg-gray-800 text-white p-2 rounded-md");
  onclickdocdiv.append(onclickexample);

  mainContent.append(onclickdocdiv);

  const setattributedocdiv = element("div");
  setattributedocdiv.addClass(
    selectedDocItem.get() === "setattributedoc" ? "block" : "hidden",
  );
  setattributedocdiv.addClass("flex flex-col gap-5");

  const setattributetitle = element("h5");
  setattributetitle.setText("setAttribute()");
  setattributetitle.addClass("font-bold");
  setattributedocdiv.append(setattributetitle);

  const setattributedes = element("p");
  setattributedes.setText("Sets an HTML attribute on the element.");
  setattributedocdiv.append(setattributedes);

  const setattributeexample = element("div");
  setattributeexample.setText("elem.setAttribute('aria-label', 'Close')");
  setattributeexample.addClass("bg-gray-800 text-white p-2 rounded-md");
  setattributedocdiv.append(setattributeexample);

  mainContent.append(setattributedocdiv);

  const createrootdocdiv = element("div");
  createrootdocdiv.addClass(
    selectedDocItem.get() === "createrootdoc" ? "block" : "hidden",
  );
  createrootdocdiv.addClass("flex flex-col gap-5");

  const createroottitle = element("h5");
  createroottitle.setText("createRoot()");
  createroottitle.addClass("font-bold");
  createrootdocdiv.append(createroottitle);

  const createrootdes = element("p");
  createrootdes.setText("Mounts the element to the document body.");
  createrootdocdiv.append(createrootdes);

  const createrootexample = element("div");
  createrootexample.setText("root.createRoot()");
  createrootexample.addClass("bg-gray-800 text-white p-2 rounded-md");
  createrootdocdiv.append(createrootexample);

  mainContent.append(createrootdocdiv);

  const appenddocdiv = element("div");
  appenddocdiv.addClass(
    selectedDocItem.get() === "appenddoc" ? "block" : "hidden",
  );
  appenddocdiv.addClass("flex flex-col gap-5");

  const appendtitle = element("h5");
  appendtitle.setText("append()");
  appendtitle.addClass("font-bold");
  appenddocdiv.append(appendtitle);

  const appenddes = element("p");
  appenddes.setText("Appends a child element to a parent.");
  appenddocdiv.append(appenddes);

  const appendexample = element("div");
  appendexample.setText("parent.append(child)");
  appendexample.addClass("bg-gray-800 text-white p-2 rounded-md");
  appenddocdiv.append(appendexample);

  mainContent.append(appenddocdiv);

  const showifdocdiv = element("div");
  showifdocdiv.addClass(
    selectedDocItem.get() === "showifdoc" ? "block" : "hidden",
  );
  showifdocdiv.addClass("flex flex-col gap-5");

  const showiftitle = element("h5");
  showiftitle.setText("showIf()");
  showiftitle.addClass("font-bold");
  showifdocdiv.append(showiftitle);

  const showifdes = element("p");
  showifdes.setText(
    "Conditionally shows the element based on a state-derived boolean.",
  );
  showifdocdiv.append(showifdes);

  const showifexample = element("div");
  showifexample.setText(
    "elem.showIf({ state: visibility, fn: () => visibility.get() === true })",
  );
  showifexample.addClass("bg-gray-800 text-white p-2 rounded-md");
  showifdocdiv.append(showifexample);

  mainContent.append(showifdocdiv);

  const createdocdiv = element("div");
  createdocdiv.addClass(
    selectedDocItem.get() === "createdoc" ? "block" : "hidden",
  );
  createdocdiv.addClass("flex flex-col gap-5");

  const createtitle = element("h5");
  createtitle.setText("element()");
  createtitle.addClass("font-bold");
  createdocdiv.append(createtitle);

  const createdocdes = element("p");
  createdocdes.setText(
    "Creates a new DOM element using a tag name. It's the starting point for building UI components in rowanjs.",
  );
  createdocdiv.append(createdocdes);

  const createexample0 = element("div");
  createexample0.setText("const root = element('div')");
  createexample0.addClass("bg-gray-800 text-white p-2 rounded-md");
  createdocdiv.append(createexample0);

  const createexample1 = element("div");
  createexample1.setText("const button = element('button')");
  createexample1.addClass("bg-gray-800 text-white p-2 rounded-md");
  createdocdiv.append(createexample1);

  const createexample2 = element("div");
  createexample2.setText("button.setText('Click me')");
  createexample2.addClass("bg-gray-800 text-white p-2 rounded-md");
  createdocdiv.append(createexample2);

  mainContent.append(createdocdiv);

  return mainContent;
});

const stateDocs = component(() => {
  const statedocs = element("div");
  statedocs.addClass(selectedDocItem.get() === "state" ? "block" : "hidden");
  statedocs.addClass("flex flex-col gap-5");

  const statedocstitle = element("h5");
  statedocstitle.setText("State");
  statedocstitle.addClass("font-bold");
  statedocs.append(statedocstitle);

  const statedocsdes = element("p");
  statedocsdes.setText(
    "state can hold all the essential data for your web app. It can hold any primitive values, objects or arrays.",
  );
  statedocs.append(statedocsdes);

  const stateexample0 = element("div");
  stateexample0.setText("const state = window.rowanjs.state");
  stateexample0.addClass("bg-gray-800 text-white p-2 rounded-md");
  statedocs.append(stateexample0);

  const stateexample = element("div");
  stateexample.setText("const a = state(1)");
  stateexample.addClass("bg-gray-800 text-white p-2 rounded-md");
  statedocs.append(stateexample);

  const stateexample1 = element("div");
  stateexample1.setText("console.log(a.get()) // 1");
  stateexample1.addClass("bg-gray-800 text-white p-2 rounded-md");
  statedocs.append(stateexample1);

  const stateexample2 = element("div");
  stateexample2.setText(
    "const deep = state({ name : 'Alex', company: { name: 'Google' } })",
  );
  stateexample2.addClass("bg-gray-800 text-white p-2 rounded-md");
  statedocs.append(stateexample2);

  const stateexample3 = element("div");
  stateexample3.setText("console.log(deep.get().company.name) // Google");
  stateexample3.addClass("bg-gray-800 text-white p-2 rounded-md");
  statedocs.append(stateexample3);

  const mainContent = element("div");
  mainContent.append(statedocs);

  const setdocdiv = element("div");
  setdocdiv.addClass(selectedDocItem.get() === "setdoc" ? "block" : "hidden");
  setdocdiv.addClass("flex flex-col gap-5");

  const setdoctitle = element("h5");
  setdoctitle.setText("set()");
  setdoctitle.addClass("font-bold");
  setdocdiv.append(setdoctitle);

  const setdocdes = element("p");
  setdocdes.setText("Used to update the value of a state instance.");
  setdocdiv.append(setdocdes);

  const setexample = element("div");
  setexample.setText("a.set(2)");
  setexample.addClass("bg-gray-800 text-white p-2 rounded-md");
  setdocdiv.append(setexample);

  mainContent.append(setdocdiv);

  const getdocdiv = element("div");
  getdocdiv.addClass(selectedDocItem.get() === "getdoc" ? "block" : "hidden");
  getdocdiv.addClass("flex flex-col gap-5");

  const getdoctitle = element("h5");
  getdoctitle.setText("get()");
  getdoctitle.addClass("font-bold");
  getdocdiv.append(getdoctitle);

  const getdocdes = element("p");
  getdocdes.setText("Used to retrieve the current value of a state instance.");
  getdocdiv.append(getdocdes);

  const getexample = element("div");
  getexample.setText("console.log(a.get()) // 2");
  getexample.addClass("bg-gray-800 text-white p-2 rounded-md");
  getdocdiv.append(getexample);

  mainContent.append(getdocdiv);

  return mainContent;
});

const main = component(() => {
  const mainElem = element("div");

  mainElem.addClass("w-[82%] bg-gray-200 pt-16 min-h-screen px-5");

  return mainElem;
});

// Create component documentation
const componentDocs = component(() => {
  const mainContent = element("div");

  // Component documentation
  const componentdocs = element("div");
  componentdocs.addClass(
    selectedDocItem.get() === "component" ? "block" : "hidden",
  );
  componentdocs.addClass("flex flex-col gap-5");

  const componenttitle = element("h5");
  componenttitle.setText("Component");
  componenttitle.addClass("font-bold");
  componentdocs.append(componenttitle);

  const componentdes = element("p");
  componentdes.setText(
    "Components are the building blocks for creating reactive UI elements. They encapsulate DOM elements and provide reactivity when state changes.",
  );
  componentdocs.append(componentdes);

  const componentexample1 = element("div");
  componentexample1.setText("const counter = component(() => {");
  componentexample1.addClass("bg-gray-800 text-white p-2 rounded-md");
  componentdocs.append(componentexample1);

  const componentexample2 = element("div");
  componentexample2.setText("  const container = element('div');");
  componentexample2.addClass("bg-gray-800 text-white p-2 rounded-md");
  componentdocs.append(componentexample2);

  const componentexample3 = element("div");
  componentexample3.setText("  container.setText(count.get());");
  componentexample3.addClass("bg-gray-800 text-white p-2 rounded-md");
  componentdocs.append(componentexample3);

  const componentexample4 = element("div");
  componentexample4.setText("  return container;");
  componentexample4.addClass("bg-gray-800 text-white p-2 rounded-md");
  componentdocs.append(componentexample4);

  const componentexample5 = element("div");
  componentexample5.setText("});");
  componentexample5.addClass("bg-gray-800 text-white p-2 rounded-md");
  componentdocs.append(componentexample5);

  const componentexample6 = element("div");
  componentexample6.setText(
    "counter.addDep(count); // Will re-render when count changes",
  );
  componentexample6.addClass("bg-gray-800 text-white p-2 rounded-md");
  componentdocs.append(componentexample6);

  mainContent.append(componentdocs);

  // Component append() documentation
  const componentappenddiv = element("div");
  componentappenddiv.addClass(
    selectedDocItem.get() === "componentAppend" ? "block" : "hidden",
  );
  componentappenddiv.addClass("flex flex-col gap-5");

  const componentappendtitle = element("h5");
  componentappendtitle.setText("append()");
  componentappendtitle.addClass("font-bold");
  componentappenddiv.append(componentappendtitle);

  const componentappenddes = element("p");
  componentappenddes.setText(
    "Appends one or more child components to the current component. Accepts multiple components as parameters.",
  );
  componentappenddiv.append(componentappenddes);

  const componentappendex1 = element("div");
  componentappendex1.setText("// Append a single component");
  componentappendex1.addClass("bg-gray-800 text-white p-2 rounded-md");
  componentappenddiv.append(componentappendex1);

  const componentappendex2 = element("div");
  componentappendex2.setText("parent.append(child);");
  componentappendex2.addClass("bg-gray-800 text-white p-2 rounded-md");
  componentappenddiv.append(componentappendex2);

  const componentappendex3 = element("div");
  componentappendex3.setText("// Append multiple components");
  componentappendex3.addClass("bg-gray-800 text-white p-2 rounded-md");
  componentappenddiv.append(componentappendex3);

  const componentappendex4 = element("div");
  componentappendex4.setText("parent.append(header, content, footer);");
  componentappendex4.addClass("bg-gray-800 text-white p-2 rounded-md");
  componentappenddiv.append(componentappendex4);

  mainContent.append(componentappenddiv);

  // Component get() documentation
  const componentgetdiv = element("div");
  componentgetdiv.addClass(
    selectedDocItem.get() === "componentGet" ? "block" : "hidden",
  );
  componentgetdiv.addClass("flex flex-col gap-5");

  const componentgettitle = element("h5");
  componentgettitle.setText("get()");
  componentgettitle.addClass("font-bold");
  componentgetdiv.append(componentgettitle);

  const componentgetdes = element("p");
  componentgetdes.setText(
    "Returns the underlying DOM element of the component.",
  );
  componentgetdiv.append(componentgetdes);

  const componentgetex = element("div");
  componentgetex.setText("const element = myComponent.get();");
  componentgetex.addClass("bg-gray-800 text-white p-2 rounded-md");
  componentgetdiv.append(componentgetex);

  mainContent.append(componentgetdiv);

  // Component addDep() documentation
  const componentadddiv = element("div");
  componentadddiv.addClass(
    selectedDocItem.get() === "componentAddDep" ? "block" : "hidden",
  );
  componentadddiv.addClass("flex flex-col gap-5");

  const componentaddtitle = element("h5");
  componentaddtitle.setText("addDep()");
  componentaddtitle.addClass("font-bold");
  componentadddiv.append(componentaddtitle);

  const componentadddes = element("p");
  componentadddes.setText(
    "Makes the component reactive by adding dependencies to state objects. The component will automatically re-render when any of the dependent states change.",
  );
  componentadddiv.append(componentadddes);

  const componentaddex1 = element("div");
  componentaddex1.setText("// Add a single state dependency");
  componentaddex1.addClass("bg-gray-800 text-white p-2 rounded-md");
  componentadddiv.append(componentaddex1);

  const componentaddex2 = element("div");
  componentaddex2.setText("myComponent.addDep(countState);");
  componentaddex2.addClass("bg-gray-800 text-white p-2 rounded-md");
  componentadddiv.append(componentaddex2);

  const componentaddex3 = element("div");
  componentaddex3.setText("// Add multiple state dependencies");
  componentaddex3.addClass("bg-gray-800 text-white p-2 rounded-md");
  componentadddiv.append(componentaddex3);

  const componentaddex4 = element("div");
  componentaddex4.setText("myComponent.addDep(name, age, theme);");
  componentaddex4.addClass("bg-gray-800 text-white p-2 rounded-md");
  componentadddiv.append(componentaddex4);

  mainContent.append(componentadddiv);

  return mainContent;
});

// Set up dependencies
sidebar.addDep(selectedDocItem);
elementDocs.addDep(selectedDocItem);
stateDocs.addDep(selectedDocItem);
componentDocs.addDep(selectedDocItem);

main.append(elementDocs, stateDocs, componentDocs);
root.append(sidebar, main, topbar);

root.get().createRoot();
