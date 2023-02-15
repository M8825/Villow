/// <reference types="google.maps" />
import { PureComponent, type ContextType } from 'react';
import MapContext from '../../map-context';
interface BicyclingLayerState {
    bicyclingLayer: google.maps.BicyclingLayer | null;
}
export interface BicyclingLayerProps {
    /** This callback is called when the bicyclingLayer instance has loaded. It is called with the bicyclingLayer instance. */
    onLoad?: ((bicyclingLayer: google.maps.BicyclingLayer) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the bicyclingLayer instance. */
    onUnmount?: ((bicyclingLayer: google.maps.BicyclingLayer) => void) | undefined;
}
declare function BicyclingLayerFunctional({ onLoad, onUnmount }: BicyclingLayerProps): null;
export declare const BicyclingLayerF: import("react").MemoExoticComponent<typeof BicyclingLayerFunctional>;
export declare class BicyclingLayer extends PureComponent<BicyclingLayerProps, BicyclingLayerState> {
    static contextType: import("react").Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    state: BicyclingLayerState;
    componentDidMount(): void;
    componentWillUnmount(): void;
    setBicyclingLayerCallback: () => void;
    render(): null;
}
export default BicyclingLayer;
