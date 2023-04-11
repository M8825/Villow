// TODO: try to use the theme instead of .scss file for every
// style component
import { extendTheme } from "@chakra-ui/react";

const tabListTheme = extendTheme({
	components: {
		Tabs: {
			baseStyle: {
				tab: {
					_selected: {
						color: "black",
						borderColor: "#006AFF",
						borderBottom:
							"4px solid #006AFF",
						borderRadius: "4px",
					},

					_hover: {
						color: "#006AFF",
					},
				},
			},
		},
	},
});

export default tabListTheme;
