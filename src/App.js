import './App.css'

import { createTheme, ThemeProvider } from '@mui/material'
import styles from './styles'
import { Route, Routes } from 'react-router-dom'
import Users from './pages/Users'
import Notifications from './pages/Notifications'
import GuidedProgram from './pages/GuidedProgram'
import Habits from './pages/Habits'
import Articles from './pages/Articles'
import CreateProgram from './pages/CreateProgram'

const theme = createTheme(styles)

const routes = [
  {
    path: '/',
    element: <Users />
  },
  {
    path: 'notifications',
    element: <Notifications />
  },
  {
    path: 'guided-program',
    element: <GuidedProgram />
  },
  {
    path: 'habits',
    element: <Habits />
  },
  {
    path: 'notifications',
    element: <Notifications />
  },
  {
    path: 'users',
    element: <Users />
  },
  {
    path: 'articles',
    element: <Articles />
  },
  {
    path: 'guided-program/create',
    element: <CreateProgram />
  },
]

const App = props => {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Routes>
          {routes.map((item, i) => <Route key={i} path={item.path} element={item.element} />)}
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
