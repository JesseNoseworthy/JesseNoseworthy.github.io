import StyledLink from 'components/StyledLink';
import styled from 'styled-components';

const Button = StyledLink.withComponent('button');

const StyledButton = styled(Button)`
  border: none;
  cursor: pointer;
`;

export default StyledButton;