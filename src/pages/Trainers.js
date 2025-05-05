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
  IconButton,
  Rating,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { 
  Search, 
  Instagram, 
  LinkedIn, 
  Twitter,
  CheckCircle,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Mock data for trainers
const trainersData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    image: '/trainer-1.jpg',
    role: 'HIIT & Cardio Specialist',
    experience: '8+ years',
    bio: 'Former professional athlete with expertise in high-intensity training and cardio workouts. Sarah helps clients achieve maximum results in minimum time.',
    specialties: ['HIIT', 'Cardio', 'Weight Loss', 'Athletic Performance'],
    certifications: ['NASM Certified Personal Trainer', 'CrossFit Level 2', 'TRX Suspension Training'],
    rating: 4.9,
    reviewCount: 127,
    instagram: 'sarahjfitness',
    twitter: 'sarahjfitness',
    linkedin: 'sarahjohnson'
  },
  {
    id: 2,
    name: 'Michael Chen',
    image: '/trainer-2.jpg',
    role: 'Yoga & Mindfulness Coach',
    experience: '10+ years',
    bio: 'Michael combines traditional yoga practices with modern mindfulness techniques to help clients improve flexibility, reduce stress, and find balance.',
    specialties: ['Yoga', 'Meditation', 'Flexibility', 'Stress Reduction'],
    certifications: ['RYT-500 Yoga Alliance', 'Mindfulness-Based Stress Reduction', 'Yin Yoga Certification'],
    rating: 4.8,
    reviewCount: 156,
    instagram: 'michaelchenyoga',
    twitter: 'michaelchenyoga',
    linkedin: 'michaelchen'
  },
  {
    id: 3,
    name: 'David Wilson',
    image: '/trainer-3.jpg',
    role: 'Strength & Conditioning Coach',
    experience: '12+ years',
    bio: 'With a background in competitive powerlifting, David specializes in strength training and helping clients build muscle and improve overall fitness.',
    specialties: ['Strength Training', 'Powerlifting', 'Muscle Building', 'Sports Performance'],
    certifications: ['NSCA Certified Strength and Conditioning Specialist', 'USA Weightlifting Level 2', 'Precision Nutrition Level 1'],
    rating: 4.9,
    reviewCount: 189,
    instagram: 'davidwilsonstrength',
    twitter: 'davidwilsonfit',
    linkedin: 'davidwilson'
  },
  {
    id: 4,
    name: 'Jessica Adams',
    image: '/trainer-4.jpg',
    role: 'Cycling & Endurance Specialist',
    experience: '7+ years',
    bio: 'Former competitive cyclist, Jessica helps clients improve cardiovascular fitness and endurance through cycling and other aerobic training methods.',
    specialties: ['Cycling', 'Endurance Training', 'Cardiovascular Fitness', 'Race Preparation'],
    certifications: ['Schwinn Cycling Certification', 'AFAA Group Fitness Instructor', 'CPR/AED Certified'],
    rating: 4.7,
    reviewCount: 112,
    instagram: 'jessicaadamscycling',
    twitter: 'jessadamsfitness',
    linkedin: 'jessicaadams'
  },
  {
    id: 5,
    name: 'Emma Roberts',
    image: '/trainer-5.jpg',
    role: 'Pilates & Core Specialist',
    experience: '9+ years',
    bio: 'Emma focuses on core strength, posture improvement, and rehabilitation through Pilates and specialized core training techniques.',
    specialties: ['Pilates', 'Core Training', 'Posture Correction', 'Rehabilitation'],
    certifications: ['Balanced Body Pilates Instructor', 'NASM Corrective Exercise Specialist', 'Polestar Pilates Rehabilitation'],
    rating: 4.9,
    reviewCount: 143,
    instagram: 'emmarobertspilates',
    twitter: 'emmarobertsfitness',
    linkedin: 'emmaroberts'
  },
  {
    id: 6,
    name: 'Marcus Johnson',
    image: '/trainer-6.jpg',
    role: 'Boxing & Combat Fitness Coach',
    experience: '15+ years',
    bio: 'Former professional boxer, Marcus combines boxing techniques with fitness training to deliver high-energy workouts that improve strength and agility.',
    specialties: ['Boxing', 'Kickboxing', 'Self-Defense', 'Functional Training'],
    certifications: ['USA Boxing Coach', 'NASM Certified Personal Trainer', 'Functional Training Specialist'],
    rating: 4.8,
    reviewCount: 167,
    instagram: 'marcusjboxing',
    twitter: 'marcusjfitness',
    linkedin: 'marcusjohnson'
  },
  {
    id: 7,
    name: 'Sofia Rodriguez',
    image: '/trainer-7.jpg',
    role: 'Dance & Zumba Instructor',
    experience: '6+ years',
    bio: 'Professional dancer turned fitness instructor, Sofia makes fitness fun through dance-based workouts that improve coordination and burn calories.',
    specialties: ['Zumba', 'Dance Fitness', 'Choreography', 'Aerobic Exercise'],
    certifications: ['Zumba Fitness Instructor', 'AFAA Group Fitness Instructor', 'BollyX Certification'],
    rating: 4.9,
    reviewCount: 178,
    instagram: 'sofiarodriguezdance',
    twitter: 'sofiardance',
    linkedin: 'sofiarodriguez'
  },
  {
    id: 8,
    name: 'Chris Evans',
    image: '/trainer-8.jpg',
    role: 'CrossFit & Functional Training Coach',
    experience: '11+ years',
    bio: 'Chris specializes in CrossFit and functional training, helping clients build strength, endurance, and agility through varied high-intensity workouts.',
    specialties: ['CrossFit', 'Functional Training', 'Olympic Lifting', 'HIIT'],
    certifications: ['CrossFit Level 3 Trainer', 'USA Weightlifting Sports Performance Coach', 'Kettlebell Specialist'],
    rating: 4.8,
    reviewCount: 156,
    instagram: 'chrisevansfit',
    twitter: 'chrisevansfit',
    linkedin: 'chrisevans'
  }
];

function Trainers() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter trainers based on search term
  const filteredTrainers = trainersData.filter((trainer) => {
    const matchesSearch = 
      trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trainer.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trainer.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trainer.specialties.some(specialty => 
        specialty.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    return matchesSearch;
  });

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
              Meet Our Expert Trainers
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
              Our certified fitness professionals are dedicated to helping you achieve your goals with personalized guidance and motivation.
            </Typography>
          </motion.div>
        </Box>

        {/* Search Section */}
        <Box sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
          <TextField
            fullWidth
            placeholder="Search trainers by name, specialty, or expertise..."
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
        </Box>

        {/* Trainers Grid */}
        <Grid container spacing={4}>
          {filteredTrainers.length > 0 ? (
            filteredTrainers.map((trainer, index) => (
              <Grid item xs={12} md={6} key={trainer.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, height: '100%', borderRadius: 3 }}>
                    <CardMedia
                      component="img"
                      sx={{ 
                        width: { xs: '100%', sm: 200 },
                        height: { xs: 250, sm: 'auto' },
                        objectFit: 'cover'
                      }}
                      image={trainer.image}
                      alt={trainer.name}
                    />
                    <CardContent sx={{ flex: '1 0 auto', p: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                        <Box>
                          <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
                            {trainer.name}
                          </Typography>
                          <Typography variant="subtitle1" color="primary" gutterBottom>
                            {trainer.role}
                          </Typography>
                        </Box>
                        <Chip 
                          label={`${trainer.experience}`} 
                          size="small"
                          color="secondary"
                          sx={{ borderRadius: 1 }}
                        />
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Rating value={trainer.rating} precision={0.1} readOnly size="small" />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                          ({trainer.rating}) • {trainer.reviewCount} reviews
                        </Typography>
                      </Box>
                      
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {trainer.bio}
                      </Typography>
                      
                      <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
                        Specialties
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {trainer.specialties.map((specialty) => (
                          <Chip 
                            key={specialty} 
                            label={specialty} 
                            size="small" 
                            variant="outlined"
                            sx={{ borderRadius: 1 }}
                          />
                        ))}
                      </Box>
                      
                      <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                        Certifications
                      </Typography>
                      <List dense sx={{ mb: 2 }}>
                        {trainer.certifications.map((certification) => (
                          <ListItem key={certification} sx={{ px: 0, py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 30 }}>
                              <CheckCircle fontSize="small" color="primary" />
                            </ListItemIcon>
                            <ListItemText 
                              primary={certification} 
                              primaryTypographyProps={{ variant: 'body2' }}
                            />
                          </ListItem>
                        ))}
                      </List>
                      
                      <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                        <IconButton color="primary" aria-label="instagram" size="small">
                          <Instagram />
                        </IconButton>
                        <IconButton color="primary" aria-label="twitter" size="small">
                          <Twitter />
                        </IconButton>
                        <IconButton color="primary" aria-label="linkedin" size="small">
                          <LinkedIn />
                        </IconButton>
                      </Box>
                      
                      <Button 
                        variant="contained" 
                        fullWidth
                        sx={{ mt: 2 }}
                      >
                        Book a Session
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))
          ) : (
            <Box sx={{ py: 8, textAlign: 'center', width: '100%' }}>
              <Typography variant="h5" color="text.secondary" gutterBottom>
                No trainers found matching your search.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Try searching for a different name, specialty, or expertise.
              </Typography>
              <Button 
                variant="outlined" 
                sx={{ mt: 2 }}
                onClick={() => setSearchTerm('')}
              >
                Clear Search
              </Button>
            </Box>
          )}
        </Grid>
      </Container>
    </Box>
  );
}

export default Trainers;