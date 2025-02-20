import express from 'express';

const app = express();
const port = 3001; // Backend port

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
}); 