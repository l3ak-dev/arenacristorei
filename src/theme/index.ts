import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Inter', sans-serif",
    logo: "'Montserrat', sans-serif",
  },
  colors: {
    brand: {
      50: '#e6f0ff',
      100: '#b3d1ff',
      200: '#80b3ff',
      300: '#4d94ff',
      400: '#1a75ff',
      500: '#0069ff', // primary
      600: '#0052cc',
      700: '#003d99',
      800: '#002966',
      900: '#001433',
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
    },
    Link: {
      baseStyle: {
        color: 'gray.700',
        _hover: {
          color: 'brand.500',
          textDecoration: 'none',
        },
      },
    },
  },
  styles: {
    global: {
      'html, body': {
        color: 'gray.800',
        lineHeight: 'tall',
      },
    },
  },
})

export default theme 