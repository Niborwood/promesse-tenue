import Header from './header';
import { Container } from '@mui/material';
import { Fragment } from 'react';

export default function Layout({ children }) {
  return (
    
    <Fragment>
      <Header />
      <Container maxWidth="sm" sx={{ background: 'linear-gradient(#14b8a6, #06b6d4)', minHeight: '100vh' }}>
        {children}
      </Container>
    </Fragment>
  )
}
