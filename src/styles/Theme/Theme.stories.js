import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { readableColor } from 'polished';
import { theme } from './Theme';

export default {
    title: 'Theme',
};

const Swatch = styled.div`
  background: ${props => props.color};
  border-radius: 9px;
  color: ${props =>
        readableColor(
            props.color,
            '#ffffff',
            '#000000',
            true
        )};
  display: flex;
  flex-direction: column;
  font-size: 13px;
  font-weight: 300;
  height: 60px;
  justify-content: space-between;
  margin: 20px;
  width: 180px;
  padding: 10px;
  position: relative;
  box-shadow: ${({ theme, group }) => `
    5px 5px 10px 0 ${theme.palette.background.shadow}, 
    -5px -5px 10px 0 ${theme.palette.background.highlight}, 
    inset -5px -5px 10px 0 ${theme.palette[group].highlight}, 
    inset 5px 5px 10px 0 ${theme.palette[group].shadow}`
    } 
`;

const SwatchContainer = styled.div`
  background: ${({ theme }) => theme.palette.background.main};
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-row-gap: 20px;
  padding: 40px 10px 0 10px;
`;

export const Palette = () => (
    <ThemeProvider theme={theme}>
        <section>
            {Object.keys(theme.palette).map(group => (
                <React.Fragment key={group}>
                    <SwatchContainer>
                        <Swatch group={group} color={theme.palette[group].main}>
                            <span>
                                {group}.main
                            </span>
                            <span>{theme.palette[group].main}</span>
                        </Swatch>
                    </SwatchContainer>
                </React.Fragment>
            ))}
        </section>
    </ThemeProvider>
);

