import { Placement } from '@popperjs/core';
export { Placement } from '@popperjs/core';

declare type Logical = "start-start" | "start-end" | "end-start" | "end-end" | "start" | "end";
declare type PlacementWithLogical = Placement | Logical;

declare function getPopperPlacement(placement: PlacementWithLogical, dir?: "ltr" | "rtl"): Placement;

export { PlacementWithLogical, getPopperPlacement };
