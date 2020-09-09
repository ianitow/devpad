import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/index';
import CreateNote from './pages/CreateNote/index';
import ViewNote from './pages/ViewNote/index';
import Layout from './layouts/Default/index';
import WithoutFooter from './layouts/WithoutFooter';

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={() => (
        <Layout name="Home" to="create">
          <Home />
        </Layout>
      )}
    />
    <Route
      path="/create"
      component={() => (
        <WithoutFooter name="Criar anotação" to="/" icon="save">
          <CreateNote />
        </WithoutFooter>
      )}
    />
    <Route
      path="/view/:path"
      component={() => (
        <WithoutFooter name="Ver anotação" to="/edit" icon="edit">
          <ViewNote />
        </WithoutFooter>
      )}
    />

    <Route path="*" component={() => <h1>Page not found</h1>} />
  </Switch>
);

export default Routes;
