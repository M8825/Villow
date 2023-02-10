// src/checkbox-context.ts
import { createContext } from "@chakra-ui/react-context";
var [CheckboxGroupProvider, useCheckboxGroupContext] = createContext({
  name: "CheckboxGroupContext",
  strict: false
});

export {
  CheckboxGroupProvider,
  useCheckboxGroupContext
};
