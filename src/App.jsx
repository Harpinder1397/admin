import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import Login from './components/login'
import MainLayout from './components/layout';
import './App.css'

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <PrivateRoute
        exact
        path="/admin/:name"
        component={MainLayout}
      />
    </Switch>
  )
}

export default App
