/// <reference types="google.maps" />
import { PureComponent, type ContextType } from 'react';
import MapContext from '../../map-context';
interface TrafficLayerState {
    trafficLayer: google.maps.TrafficLayer | null;
}
export interface TrafficLayerProps {
    options?: google.maps.TrafficLayerOptions | undefined;
    /** This callback is called when the trafficLayer instance has loaded. It is called with the trafficLayer instance. */
    onLoad?: ((trafficLayer: google.maps.TrafficLayer) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the trafficLayer instance. */
    onUnmount?: ((trafficLayer: google.maps.TrafficLayer) => void) | undefined;
}
declare function TrafficLayerFunctional({ options, onLoad, onUnmount }: TrafficLayerProps): null;
export declare const TrafficLayerF: import("react").MemoExoticComponent<typeof TrafficLayerFunctional>;
export declare class TrafficLayer extends PureComponent<TrafficLayerProps, TrafficLayerState> {
    static contextType: import("react").Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    state: {
        trafficLayer: null;
    };
    setTrafficLayerCallback: () => void;
    registeredEvents: google.maps.MapsEventListener[];
    componentDidMount(): void;
    componentDidUpdate(prevProps: TrafficLayerProps): void;
    componentWillUnmount(): void;
    render(): null;
}
export default TrafficLayer;
