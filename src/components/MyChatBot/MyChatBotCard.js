import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import AvatarImage from "../../Images/image 10.png"
import BotImage from '../../Images/image 1 .png'
const cardData = [
  {
    title: 'Spoky',
    image: BotImage,
    description: 'Credit Usage',
    message: 'Total Message credits.',
    response: 'Chat Responses.',
    type: 'Active',
    buttonText: 'Active',
  },
  {
    title: 'Tomy',
    image: AvatarImage,
    description: 'Credit Usage',
    message: 'Total Message credits.',
    response: 'Chat Responses.',
    type: 'Active',
    buttonText: 'Active',
  },
  {
    title: 'Spoky',
    image: '/static/images/cards/another-image.jpg',
    description: 'Credit Usage',
    message: 'Total Message credits.',
    response: 'Chat Responses.',
    type: 'Inactive',
    buttonText: 'Inactive',
  },
  {
    title: 'Tomy',
    image: '/static/images/cards/another-image.jpg',
    description: 'Credit Usage',
    message: 'Total Message credits.',
    response: 'Chat Responses.',
    type: 'On Training',
    buttonText: 'On Training',
  },
];

const MyChatBotCard = ({ selectedType }) => {
  return (
    <div>
      {/* Render cards based on the selected type */}
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '2rem', textAlign: 'left' }}>
        {cardData.map((card, index) => {
          // Check if the card should be displayed based on the selected type
          if (selectedType === 'All' || selectedType === card.type) {
            return (
              <Card key={index} sx={{ width: 280, margin: '.5rem' }}>
                <CardMedia
                  sx={{ height: 140, backgroundColor: '#FF8C7D' }}
                  image={card.image }
                  title={card.title}
                />
                <CardContent>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.9rem' }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1.7rem', fontWeight: '200px' }}>
                      {card.title}
                    </Typography>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <Button size="small"
                        sx={{
                          backgroundColor: '#49D917',
                          color: '#fff',
                          borderRadius: '2rem',
                          padding: '5px',
                          fontFamily: "Outfit",
                          marginRight: '3rem',
                          '&:hover': {
                            backgroundColor: '#3CB614',
                          },
                        }}>{card.buttonText}</Button>
                    </div>
                  </div>
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '.7rem', fontFamily: 'Outfit', fontWeight: '400', fontSize: '1rem', color: "#000000B2" }}>
                    {card.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '.7rem', fontFamily: 'Outfit', fontWeight: '400', fontSize: '1rem', color: "#000000B2" }}>
                    {card.message}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '.7rem', fontFamily: 'Outfit', fontWeight: '400', fontSize: '1rem', color: "#000000B2" }}>
                    {card.response}
                  </Typography>
                  <CardActions >
                    <Button size="small" sx={{
                      padding: '10px', borderRadius: '20px', background: '#62D2E9', color: '#FFFFFF', '&:hover': {
                        backgroundColor: '#62D2E9',
                      },
                    }}>Customize</Button>
                    <Link to="/Details" >
                      <Button size="small" sx={{
                        padding: '10px', borderRadius: '20px', background: 'transparent', color: '#62D2E9', marginLeft: "1rem", '&:hover': {
                          backgroundColor: 'transparent', border: '1px solid #62D2E9'
                        },
                      }}>See Details</Button>
                    </Link>
                  </CardActions>
                </CardContent>
              </Card>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default MyChatBotCard;
