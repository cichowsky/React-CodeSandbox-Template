import styled from 'styled-components';

const Paragraph = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

export default Paragraph;
