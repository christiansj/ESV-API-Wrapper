import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 8080;

// routes
import bookRoutes from './routes/book.route'
import { errorHandler } from './middlewares/errorHandler';

// Root url
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.use("/book", bookRoutes)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});