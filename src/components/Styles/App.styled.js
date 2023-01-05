import styled from 'styled-components';

export const TitlePrimary = styled.h1`
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes[4]}px;
  color: ${p => p.theme.colors.primary};
  text-transform: uppercase;
  padding: ${p => p.theme.space[3]}px;
`;

export const TitleContactList = styled.h2`
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes[3]}px;
  color: ${p => p.theme.colors.primary};
  text-transform: uppercase;
  padding: ${p => p.theme.space[3]}px;
`

export const Wrapper = styled.main`
display: grid;
/* align-content: center;
justify-content: center;
text-align: center;
margin: 0 auto;
width: 1200px; */
  padding: ${p => p.theme.space[2]}px;
`;


