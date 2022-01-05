import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useRouter } from 'next/router';
import Link from '../components/ui/link';

export default function Header() {
  const router = useRouter();
  function handleBack() {
    router.back();
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleBack}
          >
            <ArrowBackIcon />
          </IconButton>

          <Typography align="right" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" color="neutral.main"><strong>promesse.tenue</strong></Link>
          </Typography>


        </Toolbar>
      </AppBar>
    </Box>
  )
}
