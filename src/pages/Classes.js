import { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Chip,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tabs,
  Tab,
  Divider,
  Avatar,
  Rating
} from '@mui/material';
import { 
  Search, 
  FilterList, 
  AccessTime, 
  Person, 
  CalendarToday
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Mock data for classes
const classesData = [
  {
    id: 1,
    title: 'High-Intensity Interval Training',
    image: '/images/classes/HIIT+training+(High-Intensity+Interval+Training).jpeg',
    category: 'Cardio',
    duration: '45 min',
    level: 'Intermediate',
    trainer: 'Sarah Johnson',
    trainerImage: '/images/1.jpg',
    schedule: 'Mon, Wed, Fri - 6:00 AM',
    rating: 4.8,
    participants: 12,
    description: 'Burn maximum calories in minimum time with our HIIT class that combines short bursts of intense exercise with recovery periods.'
  },
  {
    id: 2,
    title: 'Yoga Flow',
    image: '/images/classes/DSC04767.jpg',
    category: 'Flexibility',
    duration: '60 min',
    level: 'All Levels',
    trainer: 'Michael Chen',
    trainerImage: '/images/2.jpg',
    schedule: 'Tue, Thu - 7:00 PM',
    rating: 4.9,
    participants: 15,
    description: 'Connect movement with breath in this flowing yoga class designed to improve flexibility, balance, and mental clarity.'
  },
  {
    id: 3,
    title: 'Strength & Conditioning',
    image: '/images/classes/The_Gym_Group_Asset-Generic-Members_Doing_Alternate_Rope_Slams_At_A_Gym_Cardio_Class.jpg',
    category: 'Strength',
    duration: '50 min',
    level: 'Advanced',
    trainer: 'David Wilson',
    trainerImage: '/images/3.jpg',
    schedule: 'Mon, Wed, Fri - 5:30 PM',
    rating: 4.7,
    participants: 10,
    description: 'Build muscle and improve overall fitness with this comprehensive strength training class focusing on all major muscle groups.'
  },
  {
    id: 4,
    title: 'Spin Cycle',
    image: '/images/classes/7-Tips-to-help-you-get-started-with-indoor-cycling-thumbnail.jpg',
    category: 'Cardio',
    duration: '45 min',
    level: 'All Levels',
    trainer: 'Jessica Adams',
    trainerImage: '/images/4.jpg',
    schedule: 'Tue, Thu, Sat - 8:00 AM',
    rating: 4.6,
    participants: 20,
    description: 'Pedal your way to fitness with our high-energy indoor cycling class set to motivating music and guided by expert instructors.'
  },
  {
    id: 5,
    title: 'Pilates Core',
    image: '/images/classes/Types-of-Pilates-Complete-Pilates.jpg',
    category: 'Core',
    duration: '55 min',
    level: 'Intermediate',
    trainer: 'Emma Roberts',
    trainerImage: '/images/5.jpg',
    schedule: 'Mon, Wed - 9:00 AM',
    rating: 4.9,
    participants: 12,
    description: 'Strengthen your core, improve posture, and increase flexibility with controlled movements and focused breathing techniques.'
  },
  {
    id: 6,
    title: 'Boxing Fundamentals',
    image: '/images/classes/boxing.jpg',
    category: 'Combat',
    duration: '60 min',
    level: 'Beginner',
    trainer: 'Marcus Johnson',
    trainerImage: '/images/6.jpg',
    schedule: 'Tue, Thu - 6:30 PM',
    rating: 4.7,
    participants: 14,
    description: 'Learn boxing basics, improve coordination, and get a full-body workout in this energetic and empowering class.'
  },
  {
    id: 7,
    title: 'Zumba Dance',
    image: '/images/classes/zumba.JPG',
    category: 'Dance',
    duration: '50 min',
    level: 'All Levels',
    trainer: 'Sofia Rodriguez',
    trainerImage: '/images/7.JPG',
    schedule: 'Mon, Wed, Fri - 7:00 PM',
    rating: 4.8,
    participants: 25,
    description: 'Dance your way to fitness with this fun, Latin-inspired workout that combines high and low-intensity dance moves.'
  },
  {
    id: 8,
    title: 'CrossFit Challenge',
    image: '/images/classes/crossfit.webp',
    category: 'Strength',
    duration: '60 min',
    level: 'Advanced',
    trainer: 'Chris Evans',
    trainerImage: '/images/8.webp',
    schedule: 'Tue, Thu, Sat - 7:30 AM',
    rating: 4.6,
    participants: 15,
    description: 'Push your limits with this high-intensity functional training program that combines weightlifting, gymnastics, and cardio.'
  }
];

function Classes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [level, setLevel] = useState('all');
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  // Filter classes based on search term, category, and level
  const filteredClasses = classesData.filter((classItem) => {
    const matchesSearch = classItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         classItem.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         classItem.trainer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = category === 'all' || classItem.category === category;
    const matchesLevel = level === 'all' || classItem.level === level;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  // Get unique categories and levels for filters
  const categories = ['all', ...new Set(classesData.map(item => item.category))];
  const levels = ['all', ...new Set(classesData.map(item => item.level))];

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 800,
                mb: 2
              }}
            >
              Group Fitness Classes
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              sx={{ 
                maxWidth: 800, 
                mx: 'auto',
                mb: 4
              }}
            >
              Join our energetic group classes led by expert trainers to achieve your fitness goals in a motivating community environment.
            </Typography>
          </motion.div>
        </Box>

        {/* Filters Section */}
        <Box sx={{ mb: 4 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Search classes, trainers, or keywords..."
                value={searchTerm}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  id="category-select"
                  value={category}
                  label="Category"
                  onChange={handleCategoryChange}
                  startAdornment={
                    <InputAdornment position="start">
                      <FilterList />
                    </InputAdornment>
                  }
                >
                  {categories.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                      {cat === 'all' ? 'All Categories' : cat}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <InputLabel id="level-label">Level</InputLabel>
                <Select
                  labelId="level-label"
                  id="level-select"
                  value={level}
                  label="Level"
                  onChange={handleLevelChange}
                  startAdornment={
                    <InputAdornment position="start">
                      <FilterList />
                    </InputAdornment>
                  }
                >
                  {levels.map((lvl) => (
                    <MenuItem key={lvl} value={lvl}>
                      {lvl === 'all' ? 'All Levels' : lvl}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        {/* Tabs Section */}
        <Box sx={{ mb: 4 }}>
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
            <Tab label="All Classes" />
            <Tab label="Today's Classes" />
            <Tab label="Popular" />
            <Tab label="New" />
          </Tabs>
        </Box>

        {/* Classes Grid */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: { xs: 2, sm: 3 },
            justifyContent: filteredClasses.length === 0 ? 'center' : 'flex-start',
          }}
        >
          {filteredClasses.length > 0 ? (
            filteredClasses.map((classItem, index) => (
              <Box
                key={classItem.id}
                sx={{
                  // Mobile first approach:
                  // xs: 1 per row (100%)
                  // sm: 2 per row (calc(50% - gap))
                  // md: 3 per row (calc(33.333% - gap))
                  width: {
                    xs: '100%',
                    sm: 'calc(50% - 24px)',
                    md: 'calc(33.333% - 32px)',
                  },
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  style={{ height: '100%' }}
                >
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3 }}>
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component="img"
                        height={{ xs: "180", sm: "200" }}
                        image={classItem.image}
                        alt={classItem.title}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          left: 16,
                          display: 'flex',
                          gap: 1,
                          flexWrap: { xs: 'wrap', sm: 'nowrap' },
                        }}
                      >
                        <Chip 
                          label={classItem.category} 
                          color="primary" 
                          size="small"
                          sx={{ 
                            borderRadius: 1,
                            fontSize: { xs: '0.7rem', sm: '0.75rem' }
                          }}
                        />
                        <Chip 
                          label={classItem.level} 
                          variant="outlined"
                          size="small"
                          sx={{ 
                            borderRadius: 1, 
                            bgcolor: 'rgba(255,255,255,0.8)',
                            backdropFilter: 'blur(4px)',
                            fontSize: { xs: '0.7rem', sm: '0.75rem' }
                          }}
                        />
                      </Box>
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                      <Typography 
                        variant="h5" 
                        component="h2" 
                        gutterBottom 
                        sx={{ 
                          fontWeight: 700,
                          fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }
                        }}
                      >
                        {classItem.title}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Rating value={classItem.rating} precision={0.1} readOnly size="small" />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                          ({classItem.rating})
                        </Typography>
                      </Box>
                      
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        paragraph
                        sx={{
                          display: '-webkit-box',
                          overflow: 'hidden',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: { xs: 2, sm: 3 },
                        }}
                      >
                        {classItem.description}
                      </Typography>
                      
                      <Divider sx={{ my: 2 }} />
                      
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          flexWrap: 'wrap',
                          mb: 2,
                          gap: 2
                        }}
                      >
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          width: { xs: '100%', sm: 'calc(50% - 8px)' }
                        }}>
                          <AccessTime fontSize="small" color="action" sx={{ mr: 1 }} />
                          <Typography variant="body2" color="text.secondary">
                            {classItem.duration}
                          </Typography>
                        </Box>
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          width: { xs: '100%', sm: 'calc(50% - 8px)' }
                        }}>
                          <Person fontSize="small" color="action" sx={{ mr: 1 }} />
                          <Typography variant="body2" color="text.secondary">
                            {classItem.participants} spots
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <CalendarToday fontSize="small" color="action" sx={{ mr: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          {classItem.schedule}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Avatar src={classItem.trainerImage} sx={{ width: 32, height: 32, mr: 1 }} />
                        <Typography variant="body2">
                          {classItem.trainer}
                        </Typography>
                      </Box>
                      
                      <Button 
                        variant="contained" 
                        fullWidth
                        sx={{ mt: 'auto' }}
                      >
                        Book Class
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Box>
            ))
          ) : (
            <Box sx={{ py: 8, textAlign: 'center', width: '100%' }}>
              <Typography variant="h5" color="text.secondary" gutterBottom>
                No classes found matching your criteria.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Try adjusting your filters or search term.
              </Typography>
              <Button 
                variant="outlined" 
                sx={{ mt: 2 }}
                onClick={() => {
                  setSearchTerm('');
                  setCategory('all');
                  setLevel('all');
                }}
              >
                Clear Filters
              </Button>
            </Box>
          )}
        </Box>

      </Container>
    </Box>
  );
}

export default Classes;

