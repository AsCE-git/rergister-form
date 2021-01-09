import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { ITheme } from './themes';

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider, 
  withTheme } = styledComponents as ThemedStyledComponentsModule<ITheme>;

export { css, keyframes, ThemeProvider, withTheme };
export default styled;
