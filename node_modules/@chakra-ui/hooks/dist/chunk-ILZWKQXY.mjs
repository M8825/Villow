// src/use-clipboard.ts
import { useState, useCallback, useEffect } from "react";
import copy from "copy-to-clipboard";
function useClipboard(initialValue, optionsOrTimeout = {}) {
  const [hasCopied, setHasCopied] = useState(false);
  const [value, setValue] = useState(initialValue);
  const { timeout = 1500, ...copyOptions } = typeof optionsOrTimeout === "number" ? { timeout: optionsOrTimeout } : optionsOrTimeout;
  const onCopy = useCallback(() => {
    const didCopy = copy(value, copyOptions);
    setHasCopied(didCopy);
  }, [value, copyOptions]);
  useEffect(() => {
    let timeoutId = null;
    if (hasCopied) {
      timeoutId = window.setTimeout(() => {
        setHasCopied(false);
      }, timeout);
    }
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [timeout, hasCopied]);
  return { value, setValue, onCopy, hasCopied };
}

export {
  useClipboard
};
