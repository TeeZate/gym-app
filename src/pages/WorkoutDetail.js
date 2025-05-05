import { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Button, 
  Card, 
  CardContent, 
  Chip, 
  Divider, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Avatar,
  Rating,
  Stack,
  Tab,
  Tabs,
  LinearProgress,
  IconButton,
  Breadcrumbs,
  Link
} from '@mui/material';
import { 
  AccessTime, 
  LocalFireDepartment, 
  FitnessCenter, 
  PlayArrow, 
  Favorite, 
  FavoriteBorder, 
  Share, 
  NavigateNext,
  CheckCircle
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Mock data for a single workout
const workoutData = {
  id: 1,
  title: 'Full Body Strength',
  description: 'A comprehensive full-body workout designed to build strength and muscle definition. This program targets all major muscle groups with compound movements and isolation exercises for a balanced physique.',
  level: 'Intermediate',
  duration: '45 min',
  calories: '350',
  category: 'Strength',
  rating: 4.8,
  userReviews: 124,
  equipment: ['Dumbbells', 'Barbell', 'Bench', 'Resistance Bands'],
  trainer: {
    name: 'Alex Johnson',
    image: '/trainer-1.jpg',
    title: 'Certified Personal Trainer',
    experience: '8 years'
  },
  image: '/workout-detail.jpg',
  exercises: [
    {
      name: 'Barbell Squats',
      sets: 4,
      reps: '10-12',
      rest: '90 sec',
      image: '/exercise-1.jpg'
    },
    {
      name: 'Bench Press',
      sets: 4,
      reps: '8-10',
      rest: '90 sec',
      image: '/exercise-2.jpg'
    },
    {
      name: 'Bent Over Rows',
      sets: 3,
      reps: '10-12',
      rest: '60 sec',
      image: '/exercise-3.jpg'
    },
    {
      name: 'Shoulder Press',
      sets: 3,
      reps: '10-12',
      rest: '60 sec',
      image: '/exercise-4.jpg'
    },
    {
      name: 'Romanian Deadlifts',
      sets: 3,
      reps: '10-12',
      rest: '90 sec',
      image: '/exercise-5.jpg'
    },
    {
      name: 'Bicep Curls',
      sets: 3,
      reps: '12-15',
      rest: '45 sec',
      image: '/exercise-6.jpg'
    },
    {
      name: 'Tricep Extensions',
      sets: 3,
      reps: '12-15',
      rest: '45 sec',
      image: '/exercise-7.jpg'
    },
    {
      name: 'Plank',
      sets: 3,
      reps: '30-60 sec',
      rest: '30 sec',
      image: '/exercise-8.jpg'
    }
  ],
  benefits: [
    'Increases overall strength and muscle mass',
    'Improves posture and core stability',
    'Boosts metabolism and fat burning',
    'Enhances bone density and joint health'
  ],
  reviews: [
    {
      user: 'Michael S.',
      avatar: '/user-1.jpg',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Great full body workout! Ive been doing this 3 times a week for a month and already seeing significant gains.'
    },
    {
      user: 'Sarah L.',
      avatar: '/user-2.jpg',
      rating: 4,
      date: '1 month ago',
      comment: 'Really challenging but effective. I modified some exercises to match my fitness level.'
    },
    {
      user: 'David K.',
      avatar: '/user-3.jpg',
      rating: 5,
      date: '2 months ago',
      comment: 'Perfect balance of exercises. The rest periods are just right to keep intensity high.'
    }
  ]
};

function WorkoutDetail() {
  const { id } = useParams();
  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tabValue, setTabValue] = useState(0);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    // In a real app, fetch the workout data based on the ID
    // For now, we'll use our mock data
    setWorkout(workoutData);
    setLoading(false);
  }, [id]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  if (loading) {
    return (
      <Box sx={{ py: 8 }}>
        <Container>
          <LinearProgress />
        </Container>
      </Box>
    );
  }

  if (!workout) {
    return (
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Container>
          <Typography variant="h5" gutterBottom>
            Workout not found
          </Typography>
          <Button component={RouterLink} to="/workouts" variant="contained">
            Back to Workouts
          </Button>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        {/* Breadcrumbs */}
        <Breadcrumbs 
          separator={<NavigateNext fontSize="small" />} 
          aria-label="breadcrumb"
          sx={{ mb: 3 }}
        >
          <Link component={RouterLink} to="/" color="inherit">
            Home
          </Link>
          <Link component={RouterLink} to="/workouts" color="inherit">
            Workouts
          </Link>
          <Typography color="text.primary">{workout.title}</Typography>
        </Breadcrumbs>

        {/* Header Section */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box 
                component="img"
                src={workout.image}
                alt={workout.title}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 3,
                  boxShadow: 3
                }}
              />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Chip 
                  label={workout.category} 
                  color="primary" 
                  sx={{ mr: 1, borderRadius: 1 }}
                />
                <Chip 
                  label={workout.level} 
                  variant="outlined"
                  sx={{ borderRadius: 1 }}
                />
              </Box>
              <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                {workout.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Rating value={workout.rating} precision={0.1} readOnly />
                <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                  ({workout.reviews.length} reviews)
                </Typography>
              </Box>
              <Typography variant="body1" paragraph color="text.secondary">
                {workout.description}
              </Typography>
              
              <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={6} sm={4}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AccessTime color="action" sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Duration
                      </Typography>
                      <Typography variant="body1" fontWeight="medium">
                        {workout.duration}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocalFireDepartment color="error" sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Calories
                      </Typography>
                      <Typography variant="body1" fontWeight="medium">
                        {workout.calories} cal
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <FitnessCenter color="action" sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Equipment
                      </Typography>
                      <Typography variant="body1" fontWeight="medium">
                        {workout.equipment.length} items
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar src={workout.trainer.image} sx={{ width: 48, height: 48, mr: 2 }} />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Trainer
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    {workout.trainer.name} • {workout.trainer.experience}
                  </Typography>
                </Box>
              </Box>
              
              <Stack direction="row" spacing={2}>
                <Button 
                  variant="contained" 
                  size="large"
                  startIcon={<PlayArrow />}
                  sx={{ px: 4 }}
                >
                  Start Workout
                </Button>
                <IconButton 
                  aria-label="add to favorites"
                  onClick={toggleFavorite}
                  sx={{ 
                    border: 1, 
                    borderColor: 'divider',
                    color: favorite ? 'error.main' : 'action.active'
                  }}
                >
                  {favorite ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
                <IconButton 
                  aria-label="share"
                  sx={{ 
                    border: 1, 
                    borderColor: 'divider'
                  }}
                >
                  <Share />
                </IconButton>
              </Stack>
            </motion.div>
          </Grid>
        </Grid>

        {/* Tabs Section */}
        <Box sx={{ mt: 6, mb: 4 }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                minWidth: 100,
              }
            }}
          >
            <Tab label="Exercises" />
            <Tab label="Equipment" />
            <Tab label="Benefits" />
            <Tab label="Reviews" />
          </Tabs>
        </Box>

        {/* Tab Content */}
        <Box sx={{ py: 2 }}>
          {/* Exercises Tab */}
          {tabValue === 0 && (
            <Grid container spacing={3}>
              {workout.exercises.map((exercise, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card sx={{ height: '100%', borderRadius: 3 }}>
                      <Box
                        sx={{
                          height: 160,
                          overflow: 'hidden',
                          position: 'relative',
                          backgroundImage: `url(${exercise.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                      <CardContent>
                        <Typography variant="h6" component="h3" gutterBottom>
                          {exercise.name}
                        </Typography>
                        <Box sx={{ mb: 1 }}>
                          <Typography variant="body2" color="text.secondary">
                            Sets: <Box component="span" fontWeight="medium">{exercise.sets}</Box>
                          </Typography>
                        </Box>
                        <Box sx={{ mb: 1 }}>
                          <Typography variant="body2" color="text.secondary">
                            Reps: <Box component="span" fontWeight="medium">{exercise.reps}</Box>
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          Rest: <Box component="span" fontWeight="medium">{exercise.rest}</Box>
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          )}

          {/* Equipment Tab */}
          {tabValue === 1 && (
            <Card sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Required Equipment
                </Typography>
                <List>
                  {workout.equipment.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <FitnessCenter color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          )}

          {/* Benefits Tab */}
          {tabValue === 2 && (
            <Card sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Workout Benefits
                </Typography>
                <List>
                  {workout.benefits.map((benefit, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircle color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={benefit} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          )}

          {/* Reviews Tab */}
          {tabValue === 3 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                User Reviews
              </Typography>
              <Card sx={{ borderRadius: 3, mb: 3 }}>
                <CardContent>
                  {workout.reviews.map((review, index) => (
                    <Box key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <Avatar src={review.avatar} sx={{ mr: 2 }} />
                        <Box sx={{ flexGrow: 1 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="subtitle1" fontWeight="medium">
                              {review.user}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {review.date}
                            </Typography>
                          </Box>
                          <Rating value={review.rating} size="small" readOnly sx={{ mb: 1 }} />
                          <Typography variant="body2" paragraph>
                            {review.comment}
                          </Typography>
                        </Box>
                      </Box>
                      {index < workout.reviews.length - 1 && (
                        <Divider sx={{ my: 2 }} />
                      )}
                    </Box>
                  ))}
                </CardContent>
              </Card>
              <Button variant="outlined" fullWidth>
                Write a Review
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default WorkoutDetail;

