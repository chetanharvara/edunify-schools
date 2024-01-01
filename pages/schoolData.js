// schoolData.js
import fs from 'fs';

export let schoolsData = [];

// Read data from the file
export const initializeData = () => {
  try {
    const data = fs.readFileSync('data/schools.json', 'utf-8');
    schoolsData = JSON.parse(data);
  } catch (error) {
    console.error('Error reading data:', error);
  }
};

// Write data to the file
export const saveData = () => {
  try {
    fs.writeFileSync('data/schools.json', JSON.stringify(schoolsData), 'utf-8');
  } catch (error) {
    console.error('Error saving data:', error);
  }
};

initializeData(); // Initialize data when the module is loaded
