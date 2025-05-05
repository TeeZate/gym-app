import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Avatar, 
  LinearProgress,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
  Chip,
  Paper,
  Tab,
  Tabs
} from '@mui/material';
import { 
  FitnessCenter, 
  DirectionsRun, 
  LocalFireDepartment, 
  MoreVert, 
  TrendingUp,
  EmojiEvents,
  PlayArrow,
  Add,
  AccessTime
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';

// Mock data for charts
const weeklyActivityData = [
  { day: 'Mon', workouts: 1, duration: 45 },
  { day: 'Tue', workouts: 1, duration: 30 },
  { day: 'Wed', workouts: 0, duration: 0 },
  { day: 'Thu', workouts: 1, duration: 60 },
  { day: 'Fri', workouts: 1, duration: 50 },
  { day: 'Sat', workouts: 2, duration: 90 },
  { day: 'Sun', workouts: 0, duration: 0 },
];

const monthlyProgressData = [
  { name: 'Week 1', weight: 185, strength: 70 },
  { name: 'Week 2', weight: 183, strength: 75 },
  { name: 'Week 3', weight: 181, strength: 80 },
  { name: 'Week 4', weight: 179, strength: 85 },
];

const workoutTypeData = [
  { name: 'Strength', value: 45 },
  { name: 'Cardio', value: 30 },
  { name: 'HIIT', value: 15 },
  { name: 'Yoga', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// Mock data for upcoming workouts
const upcomingWorkouts = [
  {
    id: 1,
    title: 'Upper Body Strength',
    time: 'Today, 5:30 PM',
    duration: '45 min',
    image: '/workout-1.jpg'
  },
  {
    id: 2,
    title: 'HIIT Cardio',
    time: 'Tomorrow, 6:00 AM',
    duration: '30 min',
    image: '/workout-2.jpg'
  },
  {
    id: 3,
    title: 'Yoga Flow',
    time: 'Wed, 7:00 PM',
    duration: '60 min',
    image: '/workout-3.jpg'
  }
];

// Mock data for recent achievements
const recentAchievements = [
  {
    id: 1,
    title: 'Workout Streak',
    description: 'Completed 7 days in a row',
    date: '2 days ago',
    icon: <EmojiEvents sx={{ color: '#FFD700' }} />
  },
  {
    id: 2,
    title: 'Personal Best',
    description: 'New record: Bench Press 185 lbs',
    date: '1 week ago',
    icon: <TrendingUp sx={{ color: '#00C853' }} />
  }
];

function Dashboard() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        {/* Welcome Section */}
        <Grid container spacing={3} alignItems="center" sx={{ mb: 4 }}>
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                Welcome back, Alex!
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                You've completed 70% of your weekly fitness goal. Keep up the good work!
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={70} 
                sx={{ 
                  height: 10, 
                  borderRadius: 5,
                  mb: 2,
                  backgroundColor: 'rgba(0,0,0,0.1)',
                  '& .MuiLinearProgress-bar': {
                    borderRadius: 5,
                  }
                }} 
              />
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button 
                  variant="contained" 
                  startIcon={<PlayArrow />}
                  component={RouterLink}
                  to="/workouts"
                >
                  Start Workout
                </Button>
                <Button 
                  variant="outlined"
                  startIcon={<Add />}
                  component={RouterLink}
                  to="/track-progress"
                >
                  Log Progress
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Weekly Summary
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <Box sx={{ textAlign: 'center' }}>
                        <FitnessCenter color="primary" sx={{ fontSize: 40, mb: 1 }} />
                        <Typography variant="h4" sx={{ fontWeight: 700 }}>
                          6
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Workouts
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ textAlign: 'center' }}>
                        <DirectionsRun color="secondary" sx={{ fontSize: 40, mb: 1 }} />
                        <Typography variant="h4" sx={{ fontWeight: 700 }}>
                          275
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Minutes
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ textAlign: 'center' }}>
                        <LocalFireDepartment color="error" sx={{ fontSize: 40, mb: 1 }} />
                        <Typography variant="h4" sx={{ fontWeight: 700 }}>
                          2,450
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Calories
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* Main Dashboard Content */}
        <Grid container spacing={3}>
          {/* Left Column */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Activity Chart */}
              <Paper sx={{ p: 3, borderRadius: 3, mb: 3 }}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Weekly Activity
                  </Typography>
                  <Tabs 
                    value={tabValue} 
                    onChange={handleTabChange}
                    sx={{ mb: 2 }}
                  >
                    <Tab label="Workouts" />
                    <Tab label="Duration" />
                  </Tabs>
                </Box>
                <Box sx={{ height: 300 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    {tabValue === 0 ? (
                      <BarChart
                        data={weeklyActivityData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="workouts" fill="#8884d8" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    ) : (
                      <BarChart
                        data={weeklyActivityData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="duration" fill="#82ca9d" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    )}
                  </ResponsiveContainer>
                </Box>
              </Paper>

              {/* Progress Charts */}
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                <Paper sx={{ p: 3, borderRadius: 3, height: '100%' }}>
                    <Typography variant="h6" gutterBottom>
                      Monthly Progress
                    </Typography>
                    <Box sx={{ height: 250 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={monthlyProgressData}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="weight" stroke="#8884d8" activeDot={{ r: 8 }} />
                          <Line type="monotone" dataKey="strength" stroke="#82ca9d" />
                        </LineChart>
                      </ResponsiveContainer>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper sx={{ p: 3, borderRadius: 3, height: '100%' }}>
                    <Typography variant="h6" gutterBottom>
                      Workout Types
                    </Typography>
                    <Box sx={{ height: 250, display: 'flex', justifyContent: 'center' }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={workoutTypeData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {workoutTypeData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Upcoming Workouts */}
              <Paper sx={{ p: 3, borderRadius: 3, mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6">
                    Upcoming Workouts
                  </Typography>
                  <Button 
                    size="small" 
                    component={RouterLink} 
                    to="/schedule"
                  >
                    View All
                  </Button>
                </Box>
                <List sx={{ px: 0 }}>
                  {upcomingWorkouts.map((workout, index) => (
                    <Box key={workout.id}>
                      <ListItem 
                        sx={{ px: 0 }}
                        secondaryAction={
                          <IconButton edge="end" aria-label="more">
                            <MoreVert />
                          </IconButton>
                        }
                      >
                        <ListItemAvatar>
                          <Avatar 
                            variant="rounded" 
                            src={workout.image}
                            sx={{ width: 56, height: 56, borderRadius: 2, mr: 1 }}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={workout.title}
                          secondary={
                            <Box>
                              <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                                <AccessTime fontSize="small" sx={{ fontSize: 16, mr: 0.5, color: 'text.disabled' }} />
                                <Typography variant="body2" color="text.secondary">
                                  {workout.time}
                                </Typography>
                              </Box>
                              <Typography variant="body2" color="text.secondary">
                                {workout.duration}
                              </Typography>
                            </Box>
                          }
                        />
                      </ListItem>
                      {index < upcomingWorkouts.length - 1 && <Divider component="li" />}
                    </Box>
                  ))}
                </List>
              </Paper>

              {/* Recent Achievements */}
              <Paper sx={{ p: 3, borderRadius: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Recent Achievements
                </Typography>
                <List sx={{ px: 0 }}>
                  {recentAchievements.map((achievement, index) => (
                    <Box key={achievement.id}>
                      <ListItem sx={{ px: 0 }}>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: 'background.default' }}>
                            {achievement.icon}
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={achievement.title}
                          secondary={
                            <>
                              <Typography variant="body2" component="span">
                                {achievement.description}
                              </Typography>
                              <Typography variant="caption" component="div" color="text.disabled">
                                {achievement.date}
                              </Typography>
                            </>
                          }
                        />
                      </ListItem>
                      {index < recentAchievements.length - 1 && <Divider component="li" />}
                    </Box>
                  ))}
                </List>
                <Button 
                  fullWidth 
                  variant="outlined" 
                  sx={{ mt: 1 }}
                  component={RouterLink}
                  to="/achievements"
                >
                  View All Achievements
                </Button>
              </Paper>

              {/* Goals */}
              <Paper sx={{ p: 3, borderRadius: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Current Goals
                </Typography>
                <List>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText
                      primary="Lose 10 lbs"
                      secondary="Progress: 6/10 lbs"
                    />
                    <Chip 
                      label="60%" 
                      color="primary" 
                      size="small" 
                      sx={{ borderRadius: 1 }}
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText
                      primary="Workout 4x per week"
                      secondary="Progress: 3/4 this week"
                    />
                    <Chip 
                      label="75%" 
                      color="primary" 
                      size="small" 
                      sx={{ borderRadius: 1 }}
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText
                      primary="Run 20 miles per month"
                      secondary="Progress: 15/20 miles"
                    />
                    <Chip 
                      label="75%" 
                      color="primary" 
                      size="small" 
                      sx={{ borderRadius: 1 }}
                    />
                  </ListItem>
                </List>
                <Button 
                  fullWidth 
                  variant="outlined" 
                  startIcon={<Add />}
                  sx={{ mt: 1 }}
                >
                  Add New Goal
                </Button>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Dashboard;

