/// <reference types="google.maps" />
/// <reference types="react" />
declare const MapContext: import("react").Context<google.maps.Map | null>;
export declare function useGoogleMap(): google.maps.Map | null;
export default MapContext;
