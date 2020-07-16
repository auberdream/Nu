import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { readableColor } from 'polished';
import { Theme } from './Theme';

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
  grid-template-columns: repeat(auto-fill, 50%);
  padding: 10px;
  height: 100vh;
  align-items: center;
  justify-items: center;
width: 100%;
`;

export const Palette = () => (
    <ThemeProvider theme={Theme}>
        <section>
            <SwatchContainer>
                {Object.keys(Theme.palette).map(group => (
                    <React.Fragment key={group}>
                        <Swatch group={group} color={Theme.palette[group].main}>
                            <span>
                                {group}.main
                            </span>
                            <span>{Theme.palette[group].main}</span>
                        </Swatch>
                    </React.Fragment>
                ))}
            </SwatchContainer>
        </section>
    </ThemeProvider>
);

