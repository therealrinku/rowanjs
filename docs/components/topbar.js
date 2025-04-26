const { element, component } = window.rowanjs;

export const topbar = component(() => {
  const topbarElem = element("div");

  topbarElem.addClass(
    "bg-gray-300 h-12 p-2 fixed top-0 left-0 right-0 px-5 border-b",
  );

  const topbartitle = element("p");
  topbartitle.setText("rowanjs docs");
  topbarElem.append(topbartitle);

  return topbarElem;
});

