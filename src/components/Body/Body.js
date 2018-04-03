import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from 'components/Home';
import NavBar from 'components/NavBar';
import NotFound from 'components/NotFound';
import media from 'utils/media';
import WithResponsive from 'utils/WithResponsive';

const Container = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;

  ${media.desktop`height: 100vh;`};
`;

class Body extends Component {
  render() {
    const { routes, redirectTo } = this.props;

    return (
      <Container>
        <NavBar routes={routes} />
        <Switch>
          {redirectTo && <Redirect to={redirectTo} />}
          <Route path={'/'} exact component={Home} />
          {routes.map(route => (
            <Route key={route.id} path={route.path} 
              render={props => (
                <WithResponsive>
                  <route.main {...route.data} />
                </WithResponsive>
              )}
            />
          ))}
          <Redirect to={routes[0].path} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    );
  }
}

Body.propTypes = {
  routes: PropTypes.array,
};

export default Body;
