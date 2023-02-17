/// <reference types="google.maps" />
import { type ContextType, PureComponent, type ReactNode, type RefObject } from 'react';
import MapContext from '../../map-context';
interface StandaloneSearchBoxState {
    searchBox: google.maps.places.SearchBox | null;
}
export interface StandaloneSearchBoxProps {
    children?: ReactNode | undefined;
    /** The area towards which to bias query predictions. Predictions are biased towards, but not restricted to, queries targeting these bounds. */
    bounds?: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral | undefined;
    options?: google.maps.places.SearchBoxOptions | undefined;
    /** This event is fired when the user selects a query, getPlaces should be used to get new places. */
    onPlacesChanged?: (() => void) | undefined;
    /** This callback is called when the searchBox instance has loaded. It is called with the searchBox instance. */
    onLoad?: ((searchBox: google.maps.places.SearchBox) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the searchBox instance. */
    onUnmount?: ((searchBox: google.maps.places.SearchBox) => void) | undefined;
}
declare class StandaloneSearchBox extends PureComponent<StandaloneSearchBoxProps, StandaloneSearchBoxState> {
    static contextType: import("react").Context<google.maps.Map | null>;
    context: ContextType<typeof MapContext>;
    registeredEvents: google.maps.MapsEventListener[];
    containerElement: RefObject<HTMLDivElement>;
    state: StandaloneSearchBoxState;
    setSearchBoxCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: StandaloneSearchBoxProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default StandaloneSearchBox;
