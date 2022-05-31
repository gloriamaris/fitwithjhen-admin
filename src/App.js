import './App.css';

import { createTheme, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import styles from './styles';
import Header from './components/Header';
import AuthenticatedLayout from './layouts/AuthenticatedLayout';

const theme = createTheme(styles);

const App = props => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth='false'
      >
        <Header />
      </Container>
      <AuthenticatedLayout>
        {props.children}
      </AuthenticatedLayout>
    </ThemeProvider>
  );
}

export default App;
