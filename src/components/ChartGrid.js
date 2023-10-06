import React, { useState } from 'react';
import { Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import ReactApexChart from 'react-apexcharts'; 

const ChartGrid = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const containerStyle = {
    margin: '0 auto', // Center horizontally
    marginTop: '2rem', // Margin-top for all screen sizes
    marginLeft: isSmallScreen ? '2rem' : '24rem', // Add left padding for small screens
    padding: isSmallScreen ? 0 : '.48rem 15px', // Add right padding for small screens
    maxWidth: isSmallScreen ? '90%' : '67%',
  };

  const leftGridStyle = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  };

  const rightGridStyle = {
    padding: '37px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  };

  const listItemContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const listItemStyle = {
    textAlign: 'left',
    padding: '1rem 15px',
    marginBottom: '3.3rem',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #FF8C7D', // Add border for all items on the left side
  };

  const listItemRightStyle = {
    textAlign: 'left',
    padding: '.48rem 15px',
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer', // Add cursor pointer for interactivity
  };

  const bulletPointStyle = {
    width: '8px',
    height: '8px',
    backgroundColor: 'black',
    borderRadius: '50%',
    marginRight: '8px',
  };

  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle item click
  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  // Calculate the chart height based on the number of items in the list
  const calculateChartHeight = () => {
    const listItemHeight = 50;
    const numItems = ['Use Credits', 'Total Number ', 'Available Credit'].length;
    return numItems * listItemHeight;
  };

  return (
    <div style={containerStyle}>
      <Grid container spacing={isSmallScreen ? 2 : 6}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={leftGridStyle}>
            <div style={listItemContainerStyle}>
              {['Active Chatbots', 'Chatbots Included in Package', 'Total Chatbots', 'Additional Chatbots Subscribed'].map((item, index) => (
                <div
                  key={item}
                  style={{
                    ...listItemStyle,
                    border: selectedItem === index ? '1px solid #FF8C7D' : '1px solid #FF8C7D',
                  }}
                >
                  <div style={bulletPointStyle}></div>
                  <Typography>{item}</Typography>
                </div>
              ))}
            </div>
            <BarChart />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={rightGridStyle}>
            <div style={listItemContainerStyle}>
              {['Use Credits', 'Total Number ', 'Available Credit'].map((item, index) => (
                <div
                  key={item}
                  style={{
                    ...listItemRightStyle,
                    border: selectedItem === index ? '1px solid #FF8C7D' : 'none', // Show border on click
                  }}
                  onClick={() => handleItemClick(index)} // Add click handler
                >
                  <div style={bulletPointStyle}></div>
                  <Typography>{item}</Typography>
                  <ApexChart series={[70]} chartHeight={calculateChartHeight()} key={index} />
                  <div style={{ marginLeft: '1rem' }}>
                    {index === 0 && '+3'}
                    {index === 1 && '-4'}
                    {index === 2 && '-0'}
                  </div>

                </div>
              ))}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChartGrid;


// Define ApexChart component
const ApexChart = ({ series, chartHeight }) => {
  const options = {
    chart: {
      height: chartHeight,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        },
      },
    },
    labels: ['Cricket'],
  };

  return (
    <div>
      <ReactApexChart options={options} series={series} type="radialBar" height={chartHeight} />
    </div>
  );
};

const BarChart = () => {
  const options = {
    series: [{
      data: [200, 200, 300, 200],
    }],
    chart: {
      type: 'bar',
      height: 450, 
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
        colors: {
          backgroundBarColors: ['#FF5733', '#FF8C7D', '#FFC300', '#FF5733'],
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['South Korea', 'United Kingdom', 'Netherlands', 'Italy', 'France'],
    },
  };

  return (
    <div>
      <ReactApexChart options={options} series={options.series} type="bar" height={options.chart.height} />
    </div>
  );
};
