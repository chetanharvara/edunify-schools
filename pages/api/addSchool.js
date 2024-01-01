// pages/api/addSchool.js
import { schoolsData, saveData } from '../schoolData';

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, address, city, state, contact, email_id } = req.body;

    const newSchool = {
      id: schoolsData.length + 1,
      name,
      address,
      city,
      state,
      contact,
      email_id,
    };

    schoolsData.push(newSchool);
    saveData();

    console.log('Schools Data:', schoolsData);

    return res.status(200).json({ message: 'School added successfully', newSchool });
  } catch (error) {
    console.error('Error adding school:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
