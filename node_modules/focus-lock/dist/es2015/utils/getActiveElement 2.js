/**
 * returns active element from document or from nested shadowdoms
 */
export var getActiveElement = function (inDocument) {
    var _a;
    if (inDocument === void 0) { inDocument = document; }
    if (!inDocument || !inDocument.activeElement) {
        return undefined;
    }
    var activeElement = inDocument.activeElement;
    return (activeElement.shadowRoot
        ? getActiveElement(activeElement.shadowRoot)
        : activeElement instanceof HTMLIFrameElement && ((_a = activeElement.contentWindow) === null || _a === void 0 ? void 0 : _a.document)
            ? getActiveElement(activeElement.contentWindow.document)
            : activeElement);
};
