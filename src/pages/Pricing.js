import { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Switch,
  FormGroup,
  FormControlLabel,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { 
  CheckCircle, 
  Cancel,
  ExpandMore,
  Star
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Mock data for pricing plans
const pricingPlans = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Essential features for fitness beginners',
    monthlyPrice: 29.99,
    yearlyPrice: 299.99,
    features: [
      { name: 'Access to gym facilities', included: true },
      { name: 'Standard workout equipment', included: true },
      { name: 'Locker room access', included: true },
      { name: '2 group classes per month', included: true },
      { name: 'Fitness assessment', included: false },
      { name: 'Personal training sessions', included: false },
      { name: 'Nutrition consultation', included: false },
      { name: 'Premium classes', included: false },
      { name: '24/7 gym access', included: false },
    ],
    popular: false,
    buttonText: 'Get Started'
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Ideal for dedicated fitness enthusiasts',
    monthlyPrice: 59.99,
    yearlyPrice: 599.99,
    features: [
      { name: 'Access to gym facilities', included: true },
      { name: 'All workout equipment', included: true },
      { name: 'Locker room access', included: true },
      { name: 'Unlimited group classes', included: true },
      { name: 'Fitness assessment', included: true },
      { name: '2 personal training sessions/month', included: true },
      { name: 'Basic nutrition consultation', included: true },
      { name: 'Premium classes', included: false },
      { name: '24/7 gym access', included: true },
    ],
    popular: true,
    buttonText: 'Get Premium'
  },
  {
    id: 'elite',
    name: 'Elite',
    description: 'Complete fitness experience for serious athletes',
    monthlyPrice: 99.99,
    yearlyPrice: 999.99,
    features: [
      { name: 'Access to gym facilities', included: true },
      { name: 'All workout equipment', included: true },
      { name: 'Locker room with towel service', included: true },
      { name: 'Unlimited group classes', included: true },
      { name: 'Advanced fitness assessment', included: true },
      { name: '4 personal training sessions/month', included: true },
      { name: 'Comprehensive nutrition plan', included: true },
      { name: 'Premium classes', included: true },
      { name: '24/7 gym access', included: true },
    ],
    popular: false,
    buttonText: 'Get Elite'
  }
];

// Mock data for FAQs
const faqs = [
  {
    question: 'Can I cancel my membership at any time?',
    answer: 'Yes, you can cancel your membership at any time. Monthly memberships can be canceled with 30 days notice. Annual memberships can be canceled with a small cancellation fee if terminated before the 12-month period.'
  },
  {
    question: 'Are there any signup or initiation fees?',
    answer: 'No, we do not charge any signup or initiation fees. The price you see is the price you pay, with no hidden costs.'
  },
  {
    question: 'Can I freeze my membership temporarily?',
    answer: 'Yes, you can freeze your membership for up to 3 months per year for medical reasons or extended travel at no additional cost.'
  },
  {
    question: 'Can I try the gym before committing to a membership?',
    answer: 'Absolutely! We offer a free 3-day pass for new members to try our facilities and classes before making a commitment.'
  },
  {
    question: 'Do you offer family or corporate discounts?',
    answer: 'Yes, we offer family plans with discounted rates for additional family members. We also have corporate wellness programs for businesses. Contact our sales team for more information.'
  },
  {
    question: 'What amenities are included in the membership?',
    answer: 'Depending on your membership tier, amenities may include locker rooms, showers, towel service, sauna, steam room, and more. Check the specific plan details for a complete list of included amenities.'
  }
];

function Pricing() {
  const [annual, setAnnual] = useState(false);

  const handleBillingChange = () => {
    setAnnual(!annual);
  };

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
              Membership Plans
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
              Choose the perfect plan to support your fitness journey. All memberships include access to our state-of-the-art facilities.
            </Typography>
          </motion.div>
        </Box>

        {/* Billing Toggle */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={annual} onChange={handleBillingChange} />}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body1" sx={{ mr: 1 }}>
                    {annual ? 'Annual Billing' : 'Monthly Billing'}
                  </Typography>
                  {annual && (
                    <Chip 
                      label="Save 20%" 
                      color="primary" 
                      size="small"
                      sx={{ borderRadius: 1 }}
                    />
                  )}
                </Box>
              }
              labelPlacement="end"
            />
          </FormGroup>
        </Box>

        {/* Pricing Cards */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {pricingPlans.map((plan, index) => (
            <Grid item xs={12} md={4} key={plan.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    borderRadius: 3,
                    position: 'relative',
                    ...(plan.popular && {
                      boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                      border: '2px solid',
                      borderColor: 'primary.main',
                    })
                  }}
                >
                  {plan.popular && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        zIndex: 1,
                      }}
                    >
                      <Chip
                        icon={<Star sx={{ color: '#FFD700 !important' }} />}
                        label="Most Popular"
                        color="primary"
                        sx={{ borderRadius: 1 }}
                      />
                    </Box>
                  )}
                  <CardContent sx={{ p: 4, flexGrow: 1 }}>
                    <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
                      {plan.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {plan.description}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 3 }}>
                      <Typography variant="h3" component="span" sx={{ fontWeight: 800 }}>
                        ${annual ? plan.yearlyPrice : plan.monthlyPrice}
                      </Typography>
                      <Typography variant="subtitle1" component="span" color="text.secondary" sx={{ ml: 1 }}>
                        /{annual ? 'year' : 'month'}
                      </Typography>
                    </Box>
                    
                    <Button 
                      variant={plan.popular ? "contained" : "outlined"} 
                      fullWidth
                      size="large"
                      sx={{ mb: 3, py: 1.5 }}
                    >
                      {plan.buttonText}
                    </Button>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                      What's included:
                    </Typography>
                    <List disablePadding>
                      {plan.features.map((feature) => (
                        <ListItem key={feature.name} disablePadding sx={{ py: 1 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            {feature.included ? (
                              <CheckCircle color="primary" fontSize="small" />
                            ) : (
                              <Cancel color="disabled" fontSize="small" />
                            )}
                          </ListItemIcon>
                          <ListItemText 
                            primary={feature.name} 
                            primaryTypographyProps={{ 
                              variant: 'body2',
                              color: feature.included ? 'text.primary' : 'text.disabled'
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Additional Options */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4, fontWeight: 700 }}>
            Additional Options
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, height: '100%', borderRadius: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Personal Training
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  One-on-one sessions with our expert trainers.
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  From $45/session
                </Typography>
                <Button variant="outlined" fullWidth>
                  Learn More
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, height: '100%', borderRadius: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Nutrition Coaching
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Personalized nutrition plans and guidance.
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  From $99/month
                </Typography>
                <Button variant="outlined" fullWidth>
                  Learn More
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, height: '100%', borderRadius: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Group Classes
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Access to specialized group fitness classes.
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  From $15/class
                </Typography>
                <Button variant="outlined" fullWidth>
                  View Schedule
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, height: '100%', borderRadius: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Day Pass
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Full access to facilities for one day.
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  $19.99/day
                </Typography>
                <Button variant="outlined" fullWidth>
                  Purchase
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* FAQs */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4, fontWeight: 700 }}>
            Frequently Asked Questions
          </Typography>
          <Grid container spacing={2}>
            {faqs.map((faq, index) => (
              <Grid item xs={12} key={index}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" color="text.secondary">
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box sx={{ textAlign: 'center', py: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            Ready to start your fitness journey?
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
            Join our community today and transform your life with our expert trainers, state-of-the-art facilities, and supportive environment.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button 
              variant="contained" 
              size="large"
              sx={{ px: 4, py: 1.5 }}
            >
              Join Now
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              sx={{ px: 4, py: 1.5 }}
            >
              Schedule a Tour
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Pricing;
