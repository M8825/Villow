// src/spacer.tsx
import { chakra } from "@chakra-ui/system";
var Spacer = chakra("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
});
Spacer.displayName = "Spacer";

export {
  Spacer
};
