import express from 'express';
import userRouter from './routes/users.js';
import coinRouter from './routes/coin.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/users', userRouter);
app.use('/coin', coinRouter);

app.get('/', (req, res) => {
  res.send('<h1>Parcial de Felipe Cepeda</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});