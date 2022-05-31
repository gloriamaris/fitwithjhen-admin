import './App.css';

/* import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css'; */
import { createTheme, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
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
