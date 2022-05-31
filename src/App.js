import logo from './logo.svg';
import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button, createTheme, ThemeProvider, Typography } from '@mui/material';
import { Container } from '@mui/system';
import styles from './styles';
import Header from './components/Header';

const theme = createTheme(styles);


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container 
        disableGutters
        maxWidth='false'>
        <Header/>
      </Container>
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Typography variant="h1" component="h2">
            h1. Heading
          </Typography>
          <Button variant="contained" disableElevation>
            Disable elevation
          </Button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
