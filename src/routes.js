import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/index';
import CreateNote from './pages/CreateNote/index';
import Layout from './layouts/Default/index';
import WithoutFooter from './layouts/WithoutFooter';

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={() => (
        <Layout name="Home" to="criar">
          <Home />
        </Layout>
      )}
    />
    <Route
      path="/criar"
      component={() => (
        <WithoutFooter name="Criar anotação" icon="save">
          <CreateNote />
        </WithoutFooter>
      )}
    />

    <Route path="*" component={() => <h1>Page not found</h1>} />
  </Switch>
);

export default Routes;
