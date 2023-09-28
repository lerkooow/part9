import express from 'express';
import { calculateBmi, BMIData } from './bmiCalculator';

const app = express();
const port = process.env.PORT || 3002;

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    res.status(400).json({ error: 'malformatted parameters' });
  } else {
    const bmiData: BMIData = calculateBmi(height, weight);
    res.json(bmiData);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
