const { element, state } = window.rowanjs;

// create root
const root = element("div");
root.addClass("flex flex-row");
root.createRoot();

// create topbar
const topbar = element("div");
topbar.addClass(
  "bg-gray-300 h-12 p-2 fixed top-0 left-0 right-0 px-5 border-b",
);
root.append(topbar);

// add little title to topbar
const topbartitle = element("p");
topbartitle.setText("rowanjs docs");
topbar.append(topbartitle);

// create a sidebar
const sidebar = element("div");
sidebar.addClass(
  "w-[18%] min-h-screen max-w-[300px] bg-gray-300 pt-16 px-5 flex flex-col gap-3 py-5",
);
root.append(sidebar);

const selectedDocItem = state("state");

// add doc elements headers to sidebar
const coretitle = element("p");
coretitle.setText("Core");
coretitle.addClass("font-bold");
sidebar.append(coretitle);

const statedoc = element("button");
statedoc.onClick(() => selectedDocItem.set("state"));
statedoc.setText("state");
sidebar.append(statedoc);

const elementdoc = element("button");
elementdoc.onClick(() => selectedDocItem.set("element"));
elementdoc.setText("element");
sidebar.append(elementdoc);

// add doc elements headers to sidebar
const stateapititle = element("p");
stateapititle.setText("state API");
stateapititle.addClass("font-bold");
sidebar.append(stateapititle);

const setdoc = element("button");
setdoc.onClick(() => selectedDocItem.set("setdoc"));
setdoc.setText("set()");
sidebar.append(setdoc);

const getdoc = element("button");
getdoc.onClick(() => selectedDocItem.set("getdoc"));
getdoc.setText("get()");
sidebar.append(getdoc);

const elementapititle = element("p");
elementapititle.setText("element API");
elementapititle.addClass("font-bold");
sidebar.append(elementapititle);

const createdoc = element("button");
createdoc.onClick(() => selectedDocItem.set("createdoc"));
createdoc.setText("create()");
sidebar.append(createdoc);

const addclassdoc = element("button");
addclassdoc.onClick(() => selectedDocItem.set("addclassdoc"));
addclassdoc.setText("addClass()");
sidebar.append(addclassdoc);

const addstylesdoc = element("button");
addstylesdoc.onClick(() => selectedDocItem.set("addstylesdoc"));
addstylesdoc.setText("addStyles()");
sidebar.append(addstylesdoc);

const settextdoc = element("button");
settextdoc.onClick(() => selectedDocItem.set("settextdoc"));
settextdoc.setText("setText()");
sidebar.append(settextdoc);

const onclickdoc = element("button");
onclickdoc.onClick(() => selectedDocItem.set("onclickdoc"));
onclickdoc.setText("onClick()");
sidebar.append(onclickdoc);

const setattributedoc = element("button");
setattributedoc.onClick(() => selectedDocItem.set("setattributedoc"));
setattributedoc.setText("setAttribute()");
sidebar.append(setattributedoc);

const createrootdoc = element("button");
createrootdoc.onClick(() => selectedDocItem.set("createrootdoc"));
createrootdoc.setText("createRoot()");
sidebar.append(createrootdoc);

const appenddoc = element("button");
appenddoc.onClick(() => selectedDocItem.set("appenddoc"));
appenddoc.setText("append()");
sidebar.append(appenddoc);

const showifdoc = element("button");
showifdoc.onClick(() => selectedDocItem.set("showifdoc"));
showifdoc.setText("showIf()");
sidebar.append(showifdoc);

// main
const main = element("div");
main.addClass("w-[82%] bg-gray-200 pt-16 min-h-screen px-5");
root.append(main);

/// element docs
const elemdocs = element("div");
elemdocs.showIf({
  state: selectedDocItem,
  fn: () => selectedDocItem.get() === "element",
});
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

main.append(elemdocs);

/// state docs
const statedocs = element("div");
statedocs.showIf({
  state: selectedDocItem,
  fn: () => selectedDocItem.get() === "state",
});
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

main.append(statedocs);

const setdocdiv = element("div");
setdocdiv.showIf({
  state: selectedDocItem,
  fn: () => selectedDocItem.get() === "setdoc",
});
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

main.append(setdocdiv);


const getdocdiv = element("div");
getdocdiv.showIf({
  state: selectedDocItem,
  fn: () => selectedDocItem.get() === "getdoc",
});
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

main.append(getdocdiv);

const addclassdocdiv = element("div");
addclassdocdiv.showIf({
  state: selectedDocItem,
  fn: () => selectedDocItem.get() === "addclassdoc",
});
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

main.append(addclassdocdiv);


const addstylesdocdiv = element("div");
addstylesdocdiv.showIf({
  state: selectedDocItem,
  fn: () => selectedDocItem.get() === "addstylesdoc",
});
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

main.append(addstylesdocdiv);

const settextdocdiv = element("div");
settextdocdiv.showIf({
  state: selectedDocItem,
  fn: () => selectedDocItem.get() === "settextdoc",
});
settextdocdiv.addClass("flex flex-col gap-5");

const settexttitle = element("h5");
settexttitle.setText("setText()");
settexttitle.addClass("font-bold");
settextdocdiv.append(settexttitle);

const settextdes = element("p");
settextdes.setText("Sets text content on the DOM element. Can include reactive states.");
settextdocdiv.append(settextdes);

const settextexample = element("div");
settextexample.setText('elem.setText(["hello", { state, key: "name" }])');
settextexample.addClass("bg-gray-800 text-white p-2 rounded-md");
settextdocdiv.append(settextexample);

main.append(settextdocdiv);


const onclickdocdiv = element("div");
onclickdocdiv.showIf({
  state: selectedDocItem,
  fn: () => selectedDocItem.get() === "onclickdoc",
});
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

main.append(onclickdocdiv);


const setattributedocdiv = element("div");
setattributedocdiv.showIf({
  state: selectedDocItem,
  fn: () => selectedDocItem.get() === "setattributedoc",
});
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

main.append(setattributedocdiv);

const createrootdocdiv = element("div");
createrootdocdiv.showIf({
  state: selectedDocItem,
  fn: () => selectedDocItem.get() === "createrootdoc",
});
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

main.append(createrootdocdiv);

const appenddocdiv = element("div");
appenddocdiv.showIf({
  state: selectedDocItem,
  fn: () => selectedDocItem.get() === "appenddoc",
});
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

main.append(appenddocdiv);


const showifdocdiv = element("div");
showifdocdiv.showIf({
  state: selectedDocItem,
  fn: () => selectedDocItem.get() === "showifdoc",
});
showifdocdiv.addClass("flex flex-col gap-5");

const showiftitle = element("h5");
showiftitle.setText("showIf()");
showiftitle.addClass("font-bold");
showifdocdiv.append(showiftitle);

const showifdes = element("p");
showifdes.setText("Conditionally shows the element based on a state-derived boolean.");
showifdocdiv.append(showifdes);

const showifexample = element("div");
showifexample.setText(
  "elem.showIf({ state: visibility, fn: () => visibility.get() === true })",
);
showifexample.addClass("bg-gray-800 text-white p-2 rounded-md");
showifdocdiv.append(showifexample);

main.append(showifdocdiv);

const createdocdiv = element("div");
createdocdiv.showIf({
  state: selectedDocItem,
  fn: () => selectedDocItem.get() === "createdoc",
});
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

main.append(createdocdiv);
