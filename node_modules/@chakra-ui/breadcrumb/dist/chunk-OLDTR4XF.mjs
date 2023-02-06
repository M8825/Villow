// src/breadcrumb-context.ts
import { createContext } from "@chakra-ui/react-context";
var [BreadcrumbStylesProvider, useBreadcrumbStyles] = createContext({
  name: `BreadcrumbStylesContext`,
  errorMessage: `useBreadcrumbStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `
});

export {
  BreadcrumbStylesProvider,
  useBreadcrumbStyles
};
