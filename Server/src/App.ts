import express from 'express';
import bodyParser from 'body-parser';
import issuesRoutes from './routes/issuesRoutes';

// Create an instance of Express
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Mount the issuesRoutes on '/api/issues'
app.use('/api/issues', issuesRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});