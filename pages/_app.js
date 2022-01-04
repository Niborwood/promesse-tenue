import { Fragment } from 'react';
import Layout from '../layout';
import { CssBaseline } from '@mui/material';

import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '../styles/mui-theme';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={muiTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp
