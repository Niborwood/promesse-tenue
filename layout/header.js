import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FactCheckIcon from '@mui/icons-material/FactCheck';

import Link from '../components/ui/link';

export default function Header() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <Typography align="left" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" color="neutral.main"><strong>promesse.tenue</strong></Link>
          </Typography>

          <Link href="/add" color="white">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <AddCircleIcon fontSize="inherit" />
            </IconButton>
          </Link>

          <Link href="/list" color="white">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <FactCheckIcon fontSize="inherit" />
            </IconButton>
          </Link>

        </Toolbar>
      </AppBar>
    </Box>
  )
}
