"use strict";
/**
 * returns active element from document or from nested shadowdoms
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActiveElement = void 0;
var getActiveElement = function (inDocument) {
    var _a;
    if (inDocument === void 0) { inDocument = document; }
    if (!inDocument || !inDocument.activeElement) {
        return undefined;
    }
    var activeElement = inDocument.activeElement;
    return (activeElement.shadowRoot
        ? (0, exports.getActiveElement)(activeElement.shadowRoot)
        : activeElement instanceof HTMLIFrameElement && ((_a = activeElement.contentWindow) === null || _a === void 0 ? void 0 : _a.document)
            ? (0, exports.getActiveElement)(activeElement.contentWindow.document)
            : activeElement);
};
exports.getActiveElement = getActiveElement;
