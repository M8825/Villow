/**
 * returns active element from document or from nested shadowdoms
 */
export const getActiveElement = (inDocument = document) => {
    var _a;
    if (!inDocument || !inDocument.activeElement) {
        return undefined;
    }
    const { activeElement } = inDocument;
    return (activeElement.shadowRoot
        ? getActiveElement(activeElement.shadowRoot)
        : activeElement instanceof HTMLIFrameElement && ((_a = activeElement.contentWindow) === null || _a === void 0 ? void 0 : _a.document)
            ? getActiveElement(activeElement.contentWindow.document)
            : activeElement);
};
