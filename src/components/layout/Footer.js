import { 
    Box, 
    Container, 
    Grid, 
    Typography, 
    Link, 
    IconButton, 
    Divider,
    TextField,
    InputAdornment
  } from '@mui/material';
  import { 
    Facebook, 
    Twitter, 
    Instagram, 
    YouTube, 
    LinkedIn,
    Send,
    LocationOn,
    Phone,
    Email
  } from '@mui/icons-material';
  import { Link as RouterLink } from 'react-router-dom';
  import Logo from './Logo';
  
  function Footer() {
    return (
      <Box 
        component="footer" 
        sx={{ 
          bgcolor: 'background.paper',
          pt: 8,
          pb: 3,
          mt: 'auto'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Logo and About */}
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 3 }}>
                <Logo />
              </Box>
              <Typography variant="body2" color="text.secondary" paragraph>
                GYMFLEX is your ultimate fitness companion, offering personalized workouts, 
                expert guidance, and a supportive community to help you achieve your fitness goals.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <IconButton color="primary" aria-label="facebook">
                  <Facebook />
                </IconButton>
                <IconButton color="primary" aria-label="twitter">
                  <Twitter />
                </IconButton>
                <IconButton color="primary" aria-label="instagram">
                  <Instagram />
                </IconButton>
                <IconButton color="primary" aria-label="youtube">
                  <YouTube />
                </IconButton>
                <IconButton color="primary" aria-label="linkedin">
                  <LinkedIn />
                </IconButton>
              </Box>
            </Grid>
  
            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                Quick Links
              </Typography>
              <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                {['Home', 'About', 'Workouts', 'Classes', 'Pricing', 'Contact'].map((item) => (
                  <Box component="li" key={item} sx={{ mb: 1 }}>
                    <Link 
                      component={RouterLink} 
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      color="text.secondary"
                      sx={{ 
                        textDecoration: 'none',
                        '&:hover': {
                          color: 'primary.main',
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      {item}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
  
            {/* Support */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                Support
              </Typography>
              <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                {['FAQ', 'Help Center', 'Privacy Policy', 'Terms of Service', 'Careers', 'Blog'].map((item) => (
                  <Box component="li" key={item} sx={{ mb: 1 }}>
                    <Link 
                      component={RouterLink} 
                      to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      color="text.secondary"
                      sx={{ 
                        textDecoration: 'none',
                        '&:hover': {
                          color: 'primary.main',
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      {item}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
  
            {/* Newsletter and Contact */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                Subscribe to Our Newsletter
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Get the latest updates on new workouts, features, and promotions.
              </Typography>
              <Box sx={{ display: 'flex', mb: 3 }}>
                <TextField
                  fullWidth
                  placeholder="Your email address"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton color="primary" edge="end">
                          <Send />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
  
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mt: 3 }}>
                Contact Us
              </Typography>
              <Box sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                <LocationOn color="action" sx={{ mr: 1 }} fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                  123 Fitness Street, Workout City, WO 12345
                </Typography>
              </Box>
              <Box sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                <Phone color="action" sx={{ mr: 1 }} fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                  (123) 456-7890
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Email color="action" sx={{ mr: 1 }} fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                  info@gymflex.com
                </Typography>
              </Box>
            </Grid>
          </Grid>
  
          <Divider sx={{ my: 4 }} />
  
          {/* Bottom Footer */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} GYMFLEX. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link 
                component={RouterLink} 
                to="/privacy-policy"
                color="text.secondary"
                sx={{ 
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': {
                    color: 'primary.main',
                    textDecoration: 'underline'
                  }
                }}
              >
                Privacy Policy
              </Link>
              <Link 
                component={RouterLink} 
                to="/terms-of-service"
                color="text.secondary"
                sx={{ 
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': {
                    color: 'primary.main',
                    textDecoration: 'underline'
                  }
                }}
              >
                Terms of Service
              </Link>
              <Link 
                component={RouterLink} 
                to="/cookie-policy"
                color="text.secondary"
                sx={{ 
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': {
                    color: 'primary.main',
                    textDecoration: 'underline'
                  }
                }}
              >
                Cookie Policy
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    );
  }
  
  export default Footer;
  
  