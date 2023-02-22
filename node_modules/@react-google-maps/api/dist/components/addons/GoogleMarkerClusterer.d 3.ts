import { type ReactElement } from 'react';
import { MarkerClusterer, type MarkerClustererOptions } from '@googlemaps/markerclusterer';
export type MarkerClustererOptionsSubset = Omit<MarkerClustererOptions, 'map' | 'markers'>;
export interface GoogleMarkerClustererProps {
    /** Render prop that exposes marker clusterer to children components
     *
     * The callback function should return a list of Marker components.
     */
    children: (markerClusterer: MarkerClusterer) => ReactElement<any, any>;
    /** Subset of {@link MarkerClustererOptions} options
     *
     * ```
     * {
     *   algorithm?: Algorithm;
     *   renderer?: Renderer;
     *   onClusterClick?: onClusterClickHandler;
     * }
     * ```
     */
    options: MarkerClustererOptionsSubset;
}
export declare function useGoogleMarkerClusterer(options: MarkerClustererOptionsSubset): MarkerClusterer | null;
/** Wrapper around [@googlemaps/markerclusterer](https://github.com/googlemaps/js-markerclusterer)
 *
 * Accepts {@link  MarkerClustererOptionsSubset} which is a subset of  {@link MarkerClustererOptions}
 */
declare function GoogleMarkerClusterer({ children, options }: GoogleMarkerClustererProps): ReactElement<any, any> | null;
declare const _default: import("react").MemoExoticComponent<typeof GoogleMarkerClusterer>;
export default _default;
