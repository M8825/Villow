/// <reference types="google.maps" />
import { ContextType, PureComponent } from 'react';
import MapContext from '../../map-context';
interface HeatmapLayerState {
    heatmapLayer: google.maps.visualization.HeatmapLayer | null;
}
export interface HeatmapLayerProps {
    /** The data points to display. Required. */
    data: google.maps.MVCArray<google.maps.LatLng | google.maps.visualization.WeightedLocation> | google.maps.LatLng[] | google.maps.visualization.WeightedLocation[];
    options?: google.maps.visualization.HeatmapLayerOptions | undefined;
    /** This callback is called when the heatmapLayer instance has loaded. It is called with the heatmapLayer instance. */
    onLoad?: ((heatmapLayer: google.maps.visualization.HeatmapLayer) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the heatmapLayer instance. */
    onUnmount?: ((heatmapLayer: google.maps.visualization.HeatmapLayer) => void) | undefined;
}
declare function HeatmapLayerFunctional({ data, onLoad, onUnmount, options, }: HeatmapLayerProps): null;
export declare const HeatmapLayerF: import("react").MemoExoticComponent<typeof HeatmapLayerFunctional>;
export declare class HeatmapLayer extends PureComponent<HeatmapLayerProps, HeatmapLayerState> {
    static contextType: import("react").Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    registeredEvents: google.maps.MapsEventListener[];
    state: HeatmapLayerState;
    setHeatmapLayerCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: HeatmapLayerProps): void;
    componentWillUnmount(): void;
    render(): null;
}
export default HeatmapLayer;
