/// <reference types="google.maps" />
import * as React from 'react';
interface DistanceMatrixServiceState {
    distanceMatrixService: google.maps.DistanceMatrixService | null;
}
export interface DistanceMatrixServiceProps {
    options: google.maps.DistanceMatrixRequest;
    callback: (
    /** The response to a DistanceMatrixService request, consisting of the formatted origin and destination addresses, and a sequence of DistanceMatrixResponseRows, one for each corresponding origin address. */
    response: google.maps.DistanceMatrixResponse | null, 
    /** The top-level status about the request in general returned by the DistanceMatrixService upon completion of a distance matrix request. Specify these by value, or by using the constant's name. For example, 'OK' or google.maps.DistanceMatrixStatus.OK. */
    status: google.maps.DistanceMatrixStatus) => void;
    /** This callback is called when the distanceMatrixService instance has loaded. It is called with the distanceMatrixService instance. */
    onLoad?: ((distanceMatrixService: google.maps.DistanceMatrixService) => void) | undefined;
    /** This callback is called when the component unmounts. It is called with the distanceMatrixService instance. */
    onUnmount?: ((distanceMatrixService: google.maps.DistanceMatrixService) => void) | undefined;
}
export declare class DistanceMatrixService extends React.PureComponent<DistanceMatrixServiceProps, DistanceMatrixServiceState> {
    state: DistanceMatrixServiceState;
    setDistanceMatrixServiceCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): null;
}
export default DistanceMatrixService;
