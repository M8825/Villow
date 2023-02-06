// src/track-size.ts
function trackElementSize(element, callback) {
  var _a;
  if (!element) {
    callback(void 0);
    return;
  }
  callback({ width: element.offsetWidth, height: element.offsetHeight });
  const win = (_a = element.ownerDocument.defaultView) != null ? _a : window;
  const observer = new win.ResizeObserver((entries) => {
    if (!Array.isArray(entries) || !entries.length)
      return;
    const [entry] = entries;
    let width;
    let height;
    if ("borderBoxSize" in entry) {
      const borderSizeEntry = entry["borderBoxSize"];
      const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
      width = borderSize["inlineSize"];
      height = borderSize["blockSize"];
    } else {
      width = element.offsetWidth;
      height = element.offsetHeight;
    }
    callback({ width, height });
  });
  observer.observe(element, { box: "border-box" });
  return () => observer.unobserve(element);
}

// src/track-sizes.ts
function trackElementsSize(options) {
  const { getNodes, observeMutation = true, callback } = options;
  const cleanups = [];
  let firstNode = null;
  function trigger() {
    const elements = getNodes();
    firstNode = elements[0];
    const fns = elements.map(
      (element, index) => trackElementSize(element, (size) => {
        callback(size, index);
      })
    );
    cleanups.push(...fns);
  }
  trigger();
  if (observeMutation) {
    const fn = trackMutation(firstNode, trigger);
    cleanups.push(fn);
  }
  return () => {
    cleanups.forEach((cleanup) => {
      cleanup == null ? void 0 : cleanup();
    });
  };
}
function trackMutation(el, cb) {
  var _a, _b;
  if (!el || !el.parentElement)
    return;
  const win = (_b = (_a = el.ownerDocument) == null ? void 0 : _a.defaultView) != null ? _b : window;
  const observer = new win.MutationObserver(() => {
    cb();
  });
  observer.observe(el.parentElement, { childList: true });
  return () => {
    observer.disconnect();
  };
}
export {
  trackElementSize,
  trackElementsSize
};
