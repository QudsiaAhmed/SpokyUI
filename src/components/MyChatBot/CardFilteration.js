import React, { useState } from 'react';
import MyChatBotCard from '../../components/MyChatBot/MyChatBotCard';
import MyChatBotButton from '../../components/MyChatBot/MyChatBotButton';

export default function App() {
  const [selectedType, setSelectedType] = useState('All'); // Initialize with 'All'

  const handleFilterChange = (newType) => {
    setSelectedType(newType);
  };

  return (
    <div>
      <MyChatBotButton onFilterChange={handleFilterChange} />
      <MyChatBotCard selectedType={selectedType} />
    </div>
  );
}
