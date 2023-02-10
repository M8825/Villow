import { useRef, useCallback } from 'react';
import { isNodeOrChild } from './utils/is-node-or-child.mjs';
import { addPointerEvent, usePointerEvent } from '../events/use-pointer-event.mjs';
import { useUnmountEffect } from '../utils/use-unmount-effect.mjs';
import { AnimationType } from '../render/utils/types.mjs';
import { isDragActive } from './drag/utils/lock.mjs';
import { pipe } from '../utils/pipe.mjs';
import { addDomEvent, useDomEvent } from '../events/use-dom-event.mjs';
import { extractEventInfo } from '../events/event-info.mjs';

function fireSyntheticPointerEvent(name, handler) {
    if (!handler)
        return;
    const syntheticPointerEvent = new PointerEvent("pointer" + name);
    handler(syntheticPointerEvent, extractEventInfo(syntheticPointerEvent));
}
/**
 * @param handlers -
 * @internal
 */
function useTapGesture({ onTap, onTapStart, onTapCancel, whileTap, visualElement, ...props }) {
    const hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
    const isPressing = useRef(false);
    const cancelPointerEndListeners = useRef(null);
    /**
     * Only set listener to passive if there are no external listeners.
     */
    const eventOptions = {
        passive: !(onTapStart ||
            onTap ||
            onTapCancel ||
            props["onPointerDown"]),
    };
    function removePointerEndListener() {
        cancelPointerEndListeners.current && cancelPointerEndListeners.current();
        cancelPointerEndListeners.current = null;
    }
    function checkPointerEnd() {
        removePointerEndListener();
        isPressing.current = false;
        const latestProps = visualElement.getProps();
        if (latestProps.whileTap && visualElement.animationState) {
            visualElement.animationState.setActive(AnimationType.Tap, false);
        }
        return !isDragActive();
    }
    function onPointerUp(event, info) {
        var _a, _b, _c, _d;
        if (!checkPointerEnd())
            return;
        /**
         * We only count this as a tap gesture if the event.target is the same
         * as, or a child of, this component's element
         */
        !isNodeOrChild(visualElement.current, event.target)
            ? (_b = (_a = visualElement.getProps()).onTapCancel) === null || _b === void 0 ? void 0 : _b.call(_a, event, info)
            : (_d = (_c = visualElement.getProps()).onTap) === null || _d === void 0 ? void 0 : _d.call(_c, event, info);
    }
    function onPointerCancel(event, info) {
        var _a, _b;
        if (!checkPointerEnd())
            return;
        (_b = (_a = visualElement.getProps()).onTapCancel) === null || _b === void 0 ? void 0 : _b.call(_a, event, info);
    }
    function onPointerStart(event, info) {
        var _a;
        const latestProps = visualElement.getProps();
        /**
         * Ensure we trigger animations before firing event callback
         */
        if (latestProps.whileTap && visualElement.animationState) {
            visualElement.animationState.setActive(AnimationType.Tap, true);
        }
        (_a = latestProps.onTapStart) === null || _a === void 0 ? void 0 : _a.call(latestProps, event, info);
    }
    const callbackDependencies = [
        Boolean(onTapStart),
        Boolean(onTap),
        Boolean(whileTap),
        visualElement,
    ];
    const startPress = useCallback((event, info) => {
        removePointerEndListener();
        if (isPressing.current)
            return;
        isPressing.current = true;
        cancelPointerEndListeners.current = pipe(addPointerEvent(window, "pointerup", onPointerUp, eventOptions), addPointerEvent(window, "pointercancel", onPointerCancel, eventOptions));
        onPointerStart(event, info);
    }, callbackDependencies);
    usePointerEvent(visualElement, "pointerdown", hasPressListeners ? startPress : undefined, eventOptions);
    const startAccessiblePress = useCallback(() => {
        const stopKeydownListener = addDomEvent(visualElement.current, "keydown", (event) => {
            if (event.key !== "Enter" || isPressing.current)
                return;
            isPressing.current = true;
            cancelPointerEndListeners.current = addDomEvent(visualElement.current, "keyup", () => {
                if (event.key !== "Enter" || !checkPointerEnd())
                    return;
                fireSyntheticPointerEvent("up", visualElement.getProps().onTap);
            }, eventOptions);
            fireSyntheticPointerEvent("down", onPointerStart);
        });
        const stopBlurListener = addDomEvent(visualElement.current, "blur", () => {
            stopKeydownListener();
            stopBlurListener();
            if (isPressing.current) {
                fireSyntheticPointerEvent("cancel", onPointerCancel);
            }
        });
    }, callbackDependencies);
    useDomEvent(visualElement, "focus", hasPressListeners ? startAccessiblePress : undefined);
    useUnmountEffect(removePointerEndListener);
}

export { useTapGesture };
