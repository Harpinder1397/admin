import { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import Layout from './components/layout';
import Login from './pages/login';
import './App.less'

function App() {
  const history = useHistory()
  const isAuthorized = localStorage.getItem('token');

  useEffect(() => {
    if(!isAuthorized){
      history.push('/admin/manage-states')
    }
  }, [])
  

  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <PrivateRoute
        exact
        path="/admin"
        component={Layout}
      />
      <PrivateRoute
        exact
        path="/admin/:name"
        component={Layout}
      />
    </Switch>
  )
}

export default App
