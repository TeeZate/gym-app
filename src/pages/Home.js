import { useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Box, 
  Button, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  Stack,
  useTheme
} from '@mui/material';
import { 
  FitnessCenter, 
  Restaurant, 
  Timeline, 
  EmojiEvents,
  ArrowForward
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FitnessCenter fontSize="large" />,
    title: 'Personalized Workouts',
    description: 'Access hundreds of workout routines tailored to your fitness level and goals.'
  },
  {
    icon: <Restaurant fontSize="large" />,
    title: 'Nutrition Tracking',
    description: 'Log your meals and track macros to optimize your diet for better results.'
  },
  {
    icon: <Timeline fontSize="large" />,
    title: 'Progress Analytics',
    description: 'Visualize your fitness journey with detailed charts and metrics.'
  },
  {
    icon: <EmojiEvents fontSize="large" />,
    title: 'Achievements',
    description: 'Stay motivated with challenges and rewards for reaching milestones.'
  }
];

function Home() {
  const theme = useTheme();
  const featuresRef = useRef(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('images/incognito-man-building-biceps-with-barbell.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: { xs: 10, md: 20 },
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography 
                  variant="h2" 
                  component="h1" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 800,
                    fontSize: { xs: '2.5rem', md: '3.5rem' }
                  }}
                >
                  Transform Your Body, <br />
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    Transform Your Life
                  </Box>
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ mb: 4, fontWeight: 400, opacity: 0.9 }}
                >
                  Track workouts, monitor nutrition, and achieve your fitness goals with our all-in-one gym companion app.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button 
                    variant="contained" 
                    size="large"
                    component={RouterLink}
                    to="/register"
                    sx={{ 
                      py: 1.5,
                      px: 4,
                      fontSize: '1rem'
                    }}
                  >
                    Get Started Free
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="large"
                    color="inherit"
                    onClick={scrollToFeatures}
                    sx={{ 
                      py: 1.5,
                      px: 4,
                      fontSize: '1rem',
                      borderColor: 'white',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255,255,255,0.1)'
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box ref={featuresRef} sx={{ py: 10, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Everything You Need For Your Fitness Journey
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary"
              sx={{ maxWidth: 700, mx: 'auto' }}
            >
              Our comprehensive platform helps you stay on track with your fitness goals
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card 
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      textAlign: 'center',
                      p: 3,
                      borderRadius: 4
                    }}
                    elevation={0}
                  >
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        mb: 2,
                        color: 'primary.main'
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Workout Programs Section */}
      <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
                  Discover Workout Programs For Every Goal
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  Whether you're looking to build muscle, lose weight, or improve endurance, our library of workout programs has something for everyone.
                </Typography>
                <Box sx={{ mb: 4 }}>
                  {['Strength Training', 'HIIT', 'Cardio', 'Yoga & Flexibility'].map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                      <Box 
                        sx={{ 
                          width: 8, 
                          height: 8, 
                          borderRadius: '50%', 
                          bgcolor: 'primary.main',
                          mr: 2
                        }} 
                      />
                      <Typography variant="body1">{item}</Typography>
                    </Box>
                  ))}
                </Box>
                <Button 
                  variant="contained" 
                  component={RouterLink}
                  to="/workouts"
                  endIcon={<ArrowForward />}
                >
                  Browse Workouts
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box 
        sx={{ 
          py: 10, 
          bgcolor: 'secondary.main',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              Ready to Start Your Fitness Journey?
            </Typography>
            <Typography variant="h6" paragraph sx={{ mb: 4, opacity: 0.9 }}>
              Join thousands of users who have transformed their bodies and lives with GYMNY
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              component={RouterLink}
              to="/register"
              sx={{ 
                py: 1.5,
                px: 5,
                fontSize: '1.1rem'
              }}
            >
              Sign Up Now — It's Free
            </Button>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
