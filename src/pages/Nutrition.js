import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  TextField, 
  Tabs, 
  Tab, 
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper
} from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CalculateIcon from '@mui/icons-material/Calculate';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Nutrition = () => {
  const [tabValue, setTabValue] = useState(0);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [bmr, setBmr] = useState(null);
  const [tdee, setTdee] = useState(null);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const calculateBMR = () => {
    if (!weight || !height || !age) return;
    
    let bmrValue = 0;
    
    if (gender === 'male') {
      // Mifflin-St Jeor Equation for men
      bmrValue = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      // Mifflin-St Jeor Equation for women
      bmrValue = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    
    setBmr(Math.round(bmrValue));
    
    // Calculate TDEE based on activity level
    let tdeeValue = 0;
    switch (activityLevel) {
      case 'sedentary':
        tdeeValue = bmrValue * 1.2;
        break;
      case 'light':
        tdeeValue = bmrValue * 1.375;
        break;
      case 'moderate':
        tdeeValue = bmrValue * 1.55;
        break;
      case 'active':
        tdeeValue = bmrValue * 1.725;
        break;
      case 'veryActive':
        tdeeValue = bmrValue * 1.9;
        break;
      default:
        tdeeValue = bmrValue * 1.55;
    }
    
    setTdee(Math.round(tdeeValue));
  };

  const mealPlans = [
    {
      title: "Muscle Building",
      description: "High protein diet to support muscle growth",
      image: "https://source.unsplash.com/random/300x200/?protein",
      meals: [
        "Breakfast: Protein oatmeal with banana and nuts",
        "Snack: Greek yogurt with berries",
        "Lunch: Grilled chicken with quinoa and vegetables",
        "Snack: Protein shake with almond butter",
        "Dinner: Salmon with sweet potato and broccoli"
      ]
    },
    {
      title: "Fat Loss",
      description: "Calorie-controlled diet with balanced macros",
      image: "https://source.unsplash.com/random/300x200/?salad",
      meals: [
        "Breakfast: Egg white omelet with vegetables",
        "Snack: Apple with a small handful of almonds",
        "Lunch: Tuna salad with mixed greens",
        "Snack: Protein shake",
        "Dinner: Lean turkey with vegetables and small portion of rice"
      ]
    },
    {
      title: "Maintenance",
      description: "Balanced nutrition for overall health",
      image: "https://source.unsplash.com/random/300x200/?balanced-meal",
      meals: [
        "Breakfast: Whole grain toast with avocado and eggs",
        "Snack: Fruit and nuts",
        "Lunch: Chicken wrap with vegetables",
        "Snack: Greek yogurt with honey",
        "Dinner: Stir-fry with lean protein and vegetables"
      ]
    }
  ];

  const nutritionTips = [
    "Stay hydrated by drinking at least 8 glasses of water daily",
    "Consume protein with every meal to support muscle recovery",
    "Eat a variety of colorful fruits and vegetables for micronutrients",
    "Time your carbohydrates around your workouts for optimal energy",
    "Include healthy fats like avocados, nuts, and olive oil in your diet",
    "Limit processed foods and added sugars",
    "Consider meal prepping to maintain consistency"
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
        Nutrition Center
      </Typography>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          centered
          variant="fullWidth"
        >
          <Tab icon={<RestaurantIcon />} label="Meal Plans" />
          <Tab icon={<CalculateIcon />} label="Calorie Calculator" />
          <Tab icon={<FitnessCenterIcon />} label="Nutrition Tips" />
        </Tabs>
      </Box>

      {/* Meal Plans Tab */}
      {tabValue === 0 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Recommended Meal Plans
          </Typography>
          <Grid container spacing={4}>
            {mealPlans.map((plan, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={plan.image}
                    alt={plan.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {plan.title}
                    </Typography>
                    <Typography sx={{ mb: 2 }}>
                      {plan.description}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                      Sample Day:
                    </Typography>
                    <List dense>
                      {plan.meals.map((meal, idx) => (
                        <ListItem key={idx} sx={{ py: 0.5 }}>
                          <ListItemText primary={meal} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Calorie Calculator Tab */}
      {tabValue === 1 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Calorie & Macronutrient Calculator
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Personal Information
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Weight (kg)"
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Height (cm)"
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Age"
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      select
                      label="Gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      margin="normal"
                      SelectProps={{
                        native: true,
                      }}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      select
                      label="Activity Level"
                      value={activityLevel}
                      onChange={(e) => setActivityLevel(e.target.value)}
                      margin="normal"
                      SelectProps={{
                        native: true,
                      }}
                    >
                      <option value="sedentary">Sedentary (little or no exercise)</option>
                      <option value="light">Light (exercise 1-3 days/week)</option>
                      <option value="moderate">Moderate (exercise 3-5 days/week)</option>
                      <option value="active">Active (exercise 6-7 days/week)</option>
                      <option value="veryActive">Very Active (hard exercise daily)</option>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      fullWidth 
                      onClick={calculateBMR}
                      sx={{ mt: 2 }}
                    >
                      Calculate
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom>
                  Results
                </Typography>
                {bmr && tdee ? (
                  <Box>
                    <Typography variant="body1" paragraph>
                      Your Basal Metabolic Rate (BMR): <strong>{bmr} calories/day</strong>
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Your Total Daily Energy Expenditure (TDEE): <strong>{tdee} calories/day</strong>
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                      Recommended Daily Calories:
                    </Typography>
                    <Typography variant="body1" paragraph>
                      For weight loss: <strong>{Math.round(tdee * 0.8)} calories/day</strong>
                    </Typography>
                    <Typography variant="body1" paragraph>
                      For maintenance: <strong>{tdee} calories/day</strong>
                    </Typography>
                    <Typography variant="body1" paragraph>
                      For weight gain: <strong>{Math.round(tdee * 1.15)} calories/day</strong>
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                      Recommended Macronutrients (Maintenance):
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Protein: <strong>{Math.round(weight * 1.8)}g</strong> ({Math.round((weight * 1.8 * 4 / tdee) * 100)}%)
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Carbs: <strong>{Math.round((tdee * 0.4) / 4)}g</strong> (40%)
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Fats: <strong>{Math.round((tdee * (1 - 0.4 - (weight * 1.8 * 4 / tdee))) / 9)}g</strong> ({Math.round((1 - 0.4 - (weight * 1.8 * 4 / tdee)) * 100)}%)
                    </Typography>
                  </Box>
                ) : (
                  <Typography variant="body1" color="text.secondary" sx={{ mt: 4, textAlign: 'center' }}>
                    Enter your information and click Calculate to see your results.
                  </Typography>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Box>
      )}

      {/* Nutrition Tips Tab */}
      {tabValue === 2 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Nutrition Tips for Fitness Success
          </Typography>
          <Paper elevation={3} sx={{ p: 4 }}>
            <List>
              {nutritionTips.map((tip, index) => (
                <ListItem key={index} alignItems="flex-start">
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={tip} />
                </ListItem>
              ))}
            </List>
            <Divider sx={{ my: 3 }} />
            <Typography variant="h6" gutterBottom>
              Supplement Recommendations
            </Typography>
            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      Protein Powder
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Helps with muscle recovery and growth. Aim for 20-30g post-workout.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      Creatine Monohydrate
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Improves strength and power output. Take 5g daily.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      Creatine Monohydrate
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Improves strength and power output. Take 5g daily.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      Omega-3 Fish Oil
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Supports recovery and reduces inflammation. Take 1-3g daily.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
          
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
              Hydration Guide
            </Typography>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="body1" paragraph>
                Proper hydration is essential for optimal performance and recovery. Water regulates body temperature, lubricates joints, and helps transport nutrients.
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>
                    Daily Hydration Guidelines
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Minimum: 8-10 glasses (2-2.5 liters) of water daily" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Active individuals: Add 16-20 oz (0.5-0.6 liters) for every hour of exercise" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Monitor urine color - aim for pale yellow" />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>
                    Workout Hydration Strategy
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="2-3 hours before: 16-20 oz (0.5-0.6 liters)" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="During workout: 7-10 oz (0.2-0.3 liters) every 10-20 minutes" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="After workout: 16-24 oz (0.5-0.7 liters) for every pound lost during exercise" />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Box>
      )}

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Need Personalized Nutrition Advice?
        </Typography>
        <Typography variant="body1" paragraph>
          Our certified nutritionists can create a custom meal plan tailored to your specific goals.
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
          Book a Nutrition Consultation
        </Button>
      </Box>
    </Container>
  );
};

export default Nutrition;

