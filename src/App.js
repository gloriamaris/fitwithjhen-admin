import logo from './logo.svg';
import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button, createTheme, Grid, ThemeProvider, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import styles from './styles';
import Header from './components/Header';
import Navigation from './components/Navigation';

const theme = createTheme(styles);


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth='false'
      >
        <Header />
      </Container>
      <Navigation/>
    </ThemeProvider>
  );
}

export default App;
