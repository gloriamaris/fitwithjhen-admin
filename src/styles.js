const styles = {
  typography: {
    fontFamily: [
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#F0DEDC',
      darker: '#E2ACA6',
      dark: '#E2ACA6',
      contrastText: '#362F2E',
    },
    info: {
      main: '#CDF8FD',
      dark: '#93ECF7',
      contrastText: '#212B2C',
    },
    neutral: {
      main: '#E2ACA6',
      contrastText: '#fff',
    },
    secondary: {
      light: '#CDF8FD',
      main: '#FAF2F1',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#362F2E',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
}

export default styles