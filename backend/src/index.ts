import express from 'express';
import cors from 'cors';

const app = express();
const port = 4000;

app.use(cors({
  origin: true,
  credentials: true // optional: for cookies or auth headers
}));

app.get('/', (req, res) => {
  res.send('Hello from Node backend!');
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
