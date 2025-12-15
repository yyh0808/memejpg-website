import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#000000', // Black
          secondary: '#424242', // Dark Gray
          accent: '#616161',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          background: '#FFFFFF',
          surface: '#FFFFFF',
          'surface-variant': '#F5F5F5', // Light Gray for sections/tags
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#FFFFFF', // White
          secondary: '#BDBDBD', // Light Gray
          accent: '#757575',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          background: '#050505', // Deep Black
          surface: '#121212', // Slightly lighter black for cards
          'surface-variant': '#212121', // Dark Gray for sections/tags
        },
      },
    },
  },
})