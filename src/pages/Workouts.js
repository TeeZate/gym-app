import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  CardActionArea,
  Button,
  Chip,
  TextField,
  InputAdornment,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Pagination,
  Rating
} from '@mui/material';
import { 
  Search, 
  FitnessCenter, 
  AccessTime, 
  LocalFireDepartment 
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Mock data for workouts
const workouts = [
  {
    id: 1,
    title: 'Full Body Strength',
    level: 'Intermediate',
    duration: '45 min',
    calories: '350',
    category: 'Strength',
    rating: 4.8,
    reviews: 124,
    image: '/images/exercises/man.jpg'
  },
  {
    id: 2,
    title: 'HIIT Cardio Blast',
    level: 'Advanced',
    duration: '30 min',
    calories: '400',
    category: 'HIIT',
    rating: 4.6,
    reviews: 98,
    image: 'images/exercises/11-Best-HIIT-Workouts-for-Men-Best-HIIT-Workouts-1.jpg'
  },
  {
    id: 3,
    title: 'Core Crusher',
    level: 'Beginner',
    duration: '20 min',
    calories: '200',
    category: 'Core',
    rating: 4.5,
    reviews: 87,
    image: '/images/exercises/athletic-man-doing-the-plank-for-abs-and-core-royalty-free-image-1608652280.jpg'
  },
  {
    id: 4,
    title: 'Upper Body Focus',
    level: 'Intermediate',
    duration: '40 min',
    calories: '300',
    category: 'Strength',
    rating: 4.7,
    reviews: 112,
    image: '/images/exercises/upper-body-exercises.jpg'
  },
  {
    id: 5,
    title: 'Lower Body Sculpt',
    level: 'Intermediate',
    duration: '35 min',
    calories: '320',
    category: 'Strength',
    rating: 4.9,
    reviews: 156,
    image: '/images/exercises/prevention-loop-051319-opener-1-1-1560270493.jpg'
  },
  {
    id: 6,
    title: 'Yoga Flow',
    level: 'All Levels',
    duration: '50 min',
    calories: '200',
    category: 'Yoga',
    rating: 4.8,
    reviews: 143,
    image: '/images/exercises/jacqueline-fernandez-yoga-meditation-zvyp8m6pwfcubm8x.jpg'
  },
  {
    id: 7,
    title: 'Tabata Challenge',
    level: 'Advanced',
    duration: '25 min',
    calories: '380',
    category: 'HIIT',
    rating: 4.7,
    reviews: 92,
    image: '/images/exercises/TABATA-workout-program-rev3-1024x570.gif'
  },
  {
    id: 8,
    title: 'Mobility & Stretching',
    level: 'Beginner',
    duration: '30 min',
    calories: '150',
    category: 'Flexibility',
    rating: 4.6,
    reviews: 78,
    image: '/images/exercises/hq720.jpg'
  },
];

const categories = ['All', 'Strength', 'HIIT', 'Cardio', 'Yoga', 'Flexibility', 'Core'];
const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
const durations = ['All', 'Under 30 min', '30-45 min', 'Over 45 min'];

function Workouts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [level, setLevel] = useState('All Levels');
  const [duration, setDuration] = useState('All');
  const [page, setPage] = useState(1);
  const workoutsPerPage = 8;

  // Filter workouts based on search and filters
  const filteredWorkouts = workouts.filter(workout => {
    const matchesSearch = workout.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All' || workout.category === category;
    const matchesLevel = level === 'All Levels' || workout.level === level;
    
    let matchesDuration = true;
    if (duration === 'Under 30 min') {
      matchesDuration = parseInt(workout.duration) < 30;
    } else if (duration === '30-45 min') {
      matchesDuration = parseInt(workout.duration) >= 30 && parseInt(workout.duration) <= 45;
    } else if (duration === 'Over 45 min') {
      matchesDuration = parseInt(workout.duration) > 45;
    }
    
    return matchesSearch && matchesCategory && matchesLevel && matchesDuration;
  });

  // Pagination
  const indexOfLastWorkout = page * workoutsPerPage;
  const indexOfFirstWorkout = indexOfLastWorkout - workoutsPerPage;
  const currentWorkouts = filteredWorkouts.slice(indexOfFirstWorkout, indexOfLastWorkout);
  const totalPages = Math.ceil(filteredWorkouts.length / workoutsPerPage);

  const handleChangePage = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Workout Programs
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', mb: 4 }}>
            Discover a variety of workout programs designed to help you reach your fitness goals
          </Typography>
        </Box>

        {/* Search and Filters */}
        <Box sx={{ mb: 6 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                placeholder="Search workouts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={2.5}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={category}
                  label="Category"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((cat) => (
                    <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4} md={2.5}>
              <FormControl fullWidth>
                <InputLabel>Level</InputLabel>
                <Select
                  value={level}
                  label="Level"
                  onChange={(e) => setLevel(e.target.value)}
                >
                  {levels.map((lvl) => (
                    <MenuItem key={lvl} value={lvl}>{lvl}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <FormControl fullWidth>
                <InputLabel>Duration</InputLabel>
                <Select
                  value={duration}
                  label="Duration"
                  onChange={(e) => setDuration(e.target.value)}
                >
                  {durations.map((dur) => (
                    <MenuItem key={dur} value={dur}>{dur}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: { xs: 2, sm: 2, md: 3 },
          justifyContent: currentWorkouts.length === 0 ? 'center' : 'flex-start',
        }}
        >
        {currentWorkouts.length > 0 ? (
          currentWorkouts.map((workout, index) => (
            <Box
              key={workout.id}
              sx={{
                // Responsive layout:
                // xs: 1 per row (100%)
                // sm: 2 per row (50%)
                // md: 3 per row (33.333%)
                // lg: 4 per row (25%)
                width: {
                  xs: '100%',
                  sm: 'calc(50% - 16px)',
                  md: 'calc(33.333% - 24px)',
                  lg: 'calc(25% - 24px)',
                },
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    overflow: 'hidden',
                  }}
                >
                  <CardActionArea component={RouterLink} to={`/workouts/${workout.id}`}>
                    <CardMedia
                      component="img"
                      height={{ xs: "180", sm: "200" }}
                      image={workout.image}
                      alt={workout.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        mb: 1,
                        flexWrap: { xs: 'wrap', sm: 'nowrap' },
                        gap: { xs: 1, sm: 0 }
                      }}>
                        <Chip 
                          label={workout.category} 
                          size="small" 
                          color="primary" 
                          sx={{ 
                            borderRadius: 1,
                            mb: { xs: 0.5, sm: 0 }
                          }} 
                        />
                        <Chip 
                          label={workout.level} 
                          size="small" 
                          variant="outlined" 
                          sx={{ borderRadius: 1 }} 
                        />
                      </Box>
                      <Typography 
                        variant="h6" 
                        component="h2" 
                        gutterBottom 
                        sx={{ 
                          fontWeight: 600,
                          fontSize: { xs: '1rem', sm: '1.25rem' }
                        }}
                      >
                        {workout.title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Rating value={workout.rating} precision={0.1} size="small" readOnly />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                          ({workout.reviews})
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', mt: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
                          <AccessTime fontSize="small" color="action" sx={{ mr: 0.5 }} />
                          <Typography variant="body2" color="text.secondary">
                            {workout.duration}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <LocalFireDepartment fontSize="small" color="error" sx={{ mr: 0.5 }} />
                          <Typography variant="body2" color="text.secondary">
                            {workout.calories} cal
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </motion.div>
            </Box>
          ))
        ) : (
          <Box sx={{ py: 8, textAlign: 'center', width: '100%' }}>
            <FitnessCenter sx={{ fontSize: 60, color: 'text.disabled', mb: 2 }} />
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No workouts found
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Try adjusting your search or filters to find what you're looking for.
            </Typography>
            <Button
              variant="outlined"
              onClick={() => {
                setSearchTerm('');
                setCategory('All');
                setLevel('All Levels');
                setDuration('All');
              }}
            >
              Clear All Filters
            </Button>
          </Box>
        )}
        </Box>


        {/* Pagination */}
        {filteredWorkouts.length > workoutsPerPage && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
            <Pagination 
              count={totalPages} 
              page={page} 
              onChange={handleChangePage} 
              color="primary" 
              size="large"
              showFirstButton 
              showLastButton
            />
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default Workouts;
