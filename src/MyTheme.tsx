import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import amber from '@material-ui/core/colors/amber';

interface ThemeProps {
  darkmode: boolean;
  children: object;
}

const MyTheme = ({ darkmode, children }: ThemeProps) => {
  const theme = createMuiTheme({
    palette: {
      type: darkmode ? 'dark' : 'light',
      primary: blue,
      secondary: amber,
    },
    typography: {
      fontFamily: 'Quicksand',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>{children}</CssBaseline>
    </ThemeProvider>
  );
};

export default MyTheme;
