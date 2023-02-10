// src/button-context.ts
import { createContext } from "@chakra-ui/react-context";
var [ButtonGroupProvider, useButtonGroup] = createContext({
  strict: false,
  name: "ButtonGroupContext"
});

export {
  ButtonGroupProvider,
  useButtonGroup
};
