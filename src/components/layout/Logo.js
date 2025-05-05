import React from 'react';
import { Box, Typography } from '@mui/material';
import { FitnessCenter } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Logo({ variant = "primary", size = "medium", showText = true }) {
  // Define size values
  const sizeValues = {
    small: {
      iconSize: 24,
      fontSize: '1.2rem',
      fontWeight: 700
    },
    medium: {
      iconSize: 32,
      fontSize: '1.5rem',
      fontWeight: 800
    },
    large: {
      iconSize: 40,
      fontSize: '2rem',
      fontWeight: 800
    }
  };

  // Define color values based on variant
  const colorValues = {
    primary: {
      icon: 'primary.main',
      text: 'text.primary'
    },
    white: {
      icon: 'white',
      text: 'white'
    },
    dark: {
      icon: 'primary.main',
      text: 'text.primary'
    }
  };

  const { iconSize, fontSize, fontWeight } = sizeValues[size];
  const { icon, text } = colorValues[variant];

  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <FitnessCenter 
          sx={{ 
            fontSize: iconSize, 
            color: icon,
            mr: showText ? 1 : 0
          }} 
        />
        {showText && (
          <Typography 
            variant="h6" 
            component="span" 
            sx={{ 
              fontSize, 
              fontWeight, 
              color: text,
              letterSpacing: '0.5px'
            }}
          >
            GYMFLEX
          </Typography>
        )}
      </Box>
    </Link>
  );
}

export default Logo;
