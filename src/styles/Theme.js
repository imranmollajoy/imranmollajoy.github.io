// CHakra ui theme
//
// Language: javascript
// Path: src/styles/Theme.js
import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
} from "@chakra-ui/react"
const theme = extendTheme(
  {
    colors: {
      ...base.colors,

      // Custom colors
      brand: {
        500: "#4941fa",
      },
      background: "#e0dcdb",
      text: "#2a2726",
    },

    fonts: {
      ...base.fonts,
      body: `Lato, ${base.fonts?.body}`,
      heading: `Roboto Flex, Montserrat, sans-serif, ${base.fonts?.heading}`,
    },
    components: {
      ...base.components,
      Heading: {
        baseStyle: {
          fontFamily: "heading",
          color: "brand.500",
          fontWeight: 900,
        },
      },
      Text: {
        baseStyle: {
          fontFamily: "body",
          color: "text",
        },
      },
    },
    styles: {
      global: {
        body: {
          color: "text",
          backgroundColor: "background",
        },
        a: {
          transition: "all 0.2s",
          _hover: {
            color: "brand.500",
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    components: [
      "Link",
      "Box",
      "Input",
      "FormControl",
      "FormLabel",
      "FormErrorMessage",
      "FormHelperText",
      "FormControl",
      "Button",
    ],
  })
)

export default theme
