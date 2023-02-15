
import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function Foobar() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDjeZ25bTcc8oOxF2TZiu9Co42kqbMKcBU",
  });

//   if (!isLoaded) return <div>Loading...</div>;
  return <h1>Map</h1>;
}


