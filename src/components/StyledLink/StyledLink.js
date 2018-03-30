import Link from 'components/Link'
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: lowercase;
  font-weight: 100;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: 10px 15px;
  text-align: center;
  border-radius: 5px;
  font-size: 0.8rem;
  height: 40px;
  line-height: 20px;
  width: 150px;
`;

export default StyledLink;