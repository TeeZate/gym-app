import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  Link, 
  Paper, 
  Divider, 
  InputAdornment, 
  IconButton,
  Stepper,
  Step,
  StepLabel,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel
} from '@mui/material';
import { 
  Visibility, 
  VisibilityOff, 
  Google, 
  Facebook, 
  Apple,
  ArrowForward,
  ArrowBack
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const steps = ['Account', 'Personal Info', 'Fitness Goals'];

function Register() {
  const [activeStep, setActiveStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  
  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [fitnessLevel, setFitnessLevel] = useState('beginner');
  const [fitnessGoals, setFitnessGoals] = useState([]);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFitnessGoalChange = (goal) => {
    if (fitnessGoals.includes(goal)) {
      setFitnessGoals(fitnessGoals.filter(g => g !== goal));
    } else {
      setFitnessGoals([...fitnessGoals, goal]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log({
      email,
      password,
      firstName,
      lastName,
      age,
      gender,
      fitnessLevel,
      fitnessGoals,
      termsAccepted
    });
  };

  return (
    <Box 
      sx={{ 
        py: 8,
        minHeight: 'calc(100vh - 64px)', // Adjust based on your navbar height
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                  Create Account
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Join GYMFLEX to start your fitness journey and achieve your goals.
                </Typography>
              </Box>

              <Paper 
                elevation={2} 
                sx={{ 
                  p: 4, 
                  borderRadius: 3,
                }}
              >
                <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>

                <Box component="form" onSubmit={handleSubmit} noValidate>
                  {activeStep === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ mb: 2 }}
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        sx={{ mb: 2 }}
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type={showPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        sx={{ mb: 2 }}
                      />
                      
                      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          endIcon={<ArrowForward />}
                        >
                          Next
                        </Button>
                      </Box>
                    </motion.div>
                  )}

                  {activeStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            name="firstName"
                            autoComplete="given-name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </Grid>
                      </Grid>
                      
                      <TextField
                        margin="normal"
                        fullWidth
                        id="age"
                        label="Age"
                        name="age"
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        sx={{ mb: 2 }}
                      />
                      
                      <FormControl component="fieldset" sx={{ mb: 2, width: '100%' }}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                          row
                          name="gender"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <FormControlLabel value="female" control={<Radio />} label="Female" />
                          <FormControlLabel value="male" control={<Radio />} label="Male" />
                          <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                      </FormControl>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                        <Button
                          onClick={handleBack}
                          startIcon={<ArrowBack />}
                        >
                          Back
                        </Button>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          endIcon={<ArrowForward />}
                        >
                          Next
                        </Button>
                      </Box>
                    </motion.div>
                  )}

                  {activeStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FormControl component="fieldset" sx={{ mb: 3, width: '100%' }}>
                        <FormLabel component="legend">Fitness Level</FormLabel>
                        <RadioGroup
                          name="fitnessLevel"
                          value={fitnessLevel}
                          onChange={(e) => setFitnessLevel(e.target.value)}
                        >
                          <FormControlLabel value="beginner" control={<Radio />} label="Beginner - New to fitness" />
                          <FormControlLabel value="intermediate" control={<Radio />} label="Intermediate - Some experience" />
                          <FormControlLabel value="advanced" control={<Radio />} label="Advanced - Experienced" />
                        </RadioGroup>
                      </FormControl>
                      
                      <FormControl component="fieldset" sx={{ mb: 3, width: '100%' }}>
                        <FormLabel component="legend">Fitness Goals (select all that apply)</FormLabel>
                        <Box sx={{ mt: 1 }}>
                          {['Lose Weight', 'Build Muscle', 'Improve Endurance', 'Increase Flexibility', 'General Fitness'].map((goal) => (
                            <FormControlLabel
                              key={goal}
                              control={
                                <Checkbox 
                                  checked={fitnessGoals.includes(goal)} 
                                  onChange={() => handleFitnessGoalChange(goal)} 
                                />
                              }
                              label={goal}
                            />
                          ))}
                        </Box>
                      </FormControl>
                      
                      <FormControlLabel
                        control={
                          <Checkbox 
                            checked={termsAccepted} 
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                            color="primary" 
                          />
                        }
                        label={
                          <Typography variant="body2">
                            I agree to the{' '}
                            <Link component={RouterLink} to="/terms">
                              Terms of Service
                            </Link>{' '}
                            and{' '}
                            <Link component={RouterLink} to="/privacy">
                              Privacy Policy
                            </Link>
                          </Typography>
                        }
                      />
                      
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                        <Button
                          onClick={handleBack}
                          startIcon={<ArrowBack />}
                        >
                          Back
                        </Button>
                        <Button
                          type="submit"
                          variant="contained"
                          disabled={!termsAccepted}
                          sx={{ py: 1.5, px: 4 }}
                        >
                          Create Account
                        </Button>
                      </Box>
                    </motion.div>
                  )}
                  
                  {activeStep === 0 && (
                    <>
                      <Box sx={{ textAlign: 'center', my: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                          Already have an account?{' '}
                          <Link component={RouterLink} to="/login" fontWeight="medium">
                            Sign in
                          </Link>
                        </Typography>
                      </Box>
                      
                      <Divider sx={{ my: 3 }}>
                        <Typography variant="body2" color="text.secondary">
                          OR
                        </Typography>
                      </Divider>
                      
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                          <Button
                            fullWidth
                            variant="outlined"
                            startIcon={<Google />}
                            sx={{ py: 1.5 }}
                          >
                            Google
                          </Button>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <Button
                            fullWidth
                            variant="outlined"
                            startIcon={<Facebook />}
                            sx={{ py: 1.5 }}
                          >
                            Facebook
                          </Button>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <Button
                            fullWidth
                            variant="outlined"
                            startIcon={<Apple />}
                            sx={{ py: 1.5 }}
                          >
                            Apple
                          </Button>
                        </Grid>
                      </Grid>
                    </>
                  )}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: 3,
                  position: 'relative',
                }}
              >
                <Box
                  component="img"
                  src="/register-image.jpg"
                  alt="Fitness motivation"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 4,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))',
                    color: 'white',
                  }}
                >
                  <Typography variant="h5" gutterBottom fontWeight="bold">
                    Start Your Fitness Journey Today
                  </Typography>
                  <Typography variant="body2">
                    Join thousands of users who have transformed their bodies and lives with GYMFLEX.
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Register;
