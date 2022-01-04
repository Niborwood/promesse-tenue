import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material'; 
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography align="center" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <strong>promesse.tenue</strong>
          </Typography>

          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
