/// <reference types="google.maps" />
import { type ContextType, PureComponent } from 'react';
import MapContext from '../../map-context';
interface TransitLayerState {
    transitLayer: google.maps.TransitLayer | null;
}
export interface TransitLayerProps {
    /** This callback is called when the transitLayer instance has loaded. It is called with the transitLayer instance. */
    onLoad?: ((transitLayer: google.maps.TransitLayer) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the transitLayer instance. */
    onUnmount?: ((transitLayer: google.maps.TransitLayer) => void) | undefined;
}
declare function TransitLayerFunctional({ onLoad, onUnmount }: TransitLayerProps): null;
export declare const TransitLayerF: import("react").MemoExoticComponent<typeof TransitLayerFunctional>;
export declare class TransitLayer extends PureComponent<TransitLayerProps, TransitLayerState> {
    static contextType: import("react").Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    state: {
        transitLayer: null;
    };
    setTransitLayerCallback: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): null;
}
export default TransitLayer;
