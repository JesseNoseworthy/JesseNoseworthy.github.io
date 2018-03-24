import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from 'components/Home';
import NavBar from 'components/NavBar';
import media from 'utils/media';

const Container = styled.div`
  height: 100%;
  width: 100vw;
  background: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;

  ${media.desktop`height: 100vh;`};
`;

class Body extends Component {
  render() {
    const { routes } = this.props;

    return (
      <Container>
        <NavBar routes={routes} />
        <Switch>
          {routes.map(route => (
            <Route key={route.id} path={route.path} 
              render={() => <route.main {...route.data} />}
            />
          ))}
          <Redirect to={routes[0].path} />
        </Switch>
      </Container>
    );
  }
}

Body.propTypes = {
  routes: PropTypes.array,
};

export default Body;
