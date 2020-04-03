import styled from 'styled-components';

const Heading = styled.h1`
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xxl : theme.fontSize.l)};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export default Heading;
