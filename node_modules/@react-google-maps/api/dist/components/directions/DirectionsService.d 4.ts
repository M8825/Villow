/// <reference types="google.maps" />
import * as React from 'react';
interface DirectionsServiceState {
    directionsService: google.maps.DirectionsService | null;
}
export interface DirectionsServiceProps {
    options: google.maps.DirectionsRequest;
    callback: (
    /** The directions response retrieved from the directions server. You can render these using a DirectionsRenderer or parse this object and render it yourself. You must display the warnings and copyrights as noted in the Google Maps Platform Terms of Service. Note that though this result is "JSON-like," it is not strictly JSON, as it indirectly includes LatLng objects */
    result: google.maps.DirectionsResult | null, 
    /** The status returned by the DirectionsService on the completion of a call to route(). Specify these by value, or by using the constant's name. For example, 'OK' or google.maps.DirectionsStatus.OK */
    status: google.maps.DirectionsStatus) => void;
    /** This callback is called when the directionsService instance has loaded. It is called with the directionsService instance. */
    onLoad?: ((directionsService: google.maps.DirectionsService) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the directionsService instance. */
    onUnmount?: ((directionsService: google.maps.DirectionsService) => void) | undefined;
}
export declare class DirectionsService extends React.PureComponent<DirectionsServiceProps, DirectionsServiceState> {
    state: DirectionsServiceState;
    setDirectionsServiceCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): null;
}
export default DirectionsService;
