import { Box, Container, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function NotFound() {
  return (
    <Box 
      sx={{ 
        py: 8,
        minHeight: 'calc(100vh - 200px)', // Adjust based on your navbar and footer height
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            variant="h1" 
            component="h1" 
            sx={{ 
              fontSize: { xs: '6rem', md: '10rem' },
              fontWeight: 800,
              color: 'primary.main',
              mb: 2
            }}
          >
            404
          </Typography>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{ mb: 3 }}
          >
            Oops! Page Not Found
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            paragraph
            sx={{ mb: 4, maxWidth: 500, mx: 'auto' }}
          >
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </Typography>
          <Button 
            component={RouterLink} 
            to="/" 
            variant="contained" 
            size="large"
            sx={{ px: 4, py: 1.5 }}
          >
            Back to Home
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}

export default NotFound;
