import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Container, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation } from 'react-router-dom';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'The Stack', href: '#layers' },
  { label: 'Excerpts', href: '#excerpts' },
  { label: 'Author', href: '#author' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll for anchor links
  const handleNavClick = (e, href) => {
    if (location.pathname === '/' && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setMobileOpen(false);
    }
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          transition: 'all 0.3s ease',
          backgroundColor: scrolled ? 'rgba(8, 12, 20, 0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(34, 211, 238, 0.1)' : 'none',
          boxShadow: 'none',
          pt: scrolled ? 1 : 2,
          pb: scrolled ? 1 : 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Typography
              variant="h6"
              component="a"
              href="#"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                color: 'secondary.main',
                textDecoration: 'none',
                letterSpacing: '2px',
                fontSize: { xs: '1.2rem', md: '1.5rem' },
              }}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              TLA
            </Typography>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
              {navItems.map((item) => (
                <Button 
                  key={item.label} 
                  onClick={(e) => handleNavClick(e, item.href)}
                  sx={{ 
                    color: 'text.secondary', 
                    fontWeight: 500,
                    '&:hover': {
                      color: 'text.primary',
                      background: 'transparent',
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button 
                variant="contained" 
                color="primary"
                href="Book.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Free
              </Button>
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{ display: { md: 'none' }, color: 'text.secondary' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{
          keepMounted: true, 
        }}
        PaperProps={{
          sx: {
            width: 250,
            backgroundColor: 'rgba(8, 12, 20, 0.98)',
            backdropFilter: 'blur(10px)',
            borderLeft: '1px solid rgba(34, 211, 238, 0.1)',
          }
        }}
      >
        <Box sx={{ p: 2, pt: 4 }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
                <Button 
                  fullWidth 
                  sx={{ color: 'text.secondary', justifyContent: 'flex-start', py: 1.5, fontSize: '1.1rem' }}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </Button>
              </ListItem>
            ))}
            <ListItem disablePadding sx={{ mt: 3 }}>
              <Button 
                fullWidth 
                variant="contained" 
                color="primary"
                href="Book.pdf"
                target="_blank"
                rel="noopener noreferrer"
                size="large"
              >
                Read Free
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
