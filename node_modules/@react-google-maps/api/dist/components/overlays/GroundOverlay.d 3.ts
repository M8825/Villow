/// <reference types="google.maps" />
import { type ContextType, PureComponent } from 'react';
import MapContext from '../../map-context';
import { noop } from '../../utils/noop';
interface GroundOverlayState {
    groundOverlay: google.maps.GroundOverlay | null;
}
export interface GroundOverlayProps {
    options?: google.maps.GroundOverlayOptions | undefined;
    /** The opacity of the overlay, expressed as a number between 0 and 1. Optional. Defaults to 1. */
    opacity?: number | undefined;
    /** This event is fired when the DOM dblclick event is fired on the GroundOverlay. */
    onDblClick?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** This event is fired when the DOM click event is fired on the GroundOverlay. */
    onClick?: ((e: google.maps.MapMouseEvent) => void) | undefined;
    /** The url of the projected image */
    url: string;
    /** The bounds that the image will be scaled to fit */
    bounds: google.maps.LatLngBoundsLiteral;
    /** This callback is called when the groundOverlay instance has loaded. It is called with the groundOverlay instance. */
    onLoad?: ((groundOverlay: google.maps.GroundOverlay) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the groundOverlay instance. */
    onUnmount?: ((groundOverlay: google.maps.GroundOverlay) => void) | undefined;
    visible?: boolean;
}
declare function GroundOverlayFunctional({ url, bounds, options, visible }: GroundOverlayProps): null;
export declare const GroundOverlayF: import("react").MemoExoticComponent<typeof GroundOverlayFunctional>;
export declare class GroundOverlay extends PureComponent<GroundOverlayProps, GroundOverlayState> {
    static defaultProps: {
        onLoad: typeof noop;
    };
    static contextType: import("react").Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    registeredEvents: google.maps.MapsEventListener[];
    state: GroundOverlayState;
    setGroundOverlayCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: GroundOverlayProps): void;
    componentWillUnmount(): void;
    render(): null;
}
export default GroundOverlay;
