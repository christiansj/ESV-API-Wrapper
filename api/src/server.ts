import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 8080;

// routes
import bookRoutes from './routes/book.route'
import passageRoutes from './routes/passage.route'
import { errorHandler } from './middlewares/errorHandler';
import helmet from 'helmet';


app.use(helmet())
// Root url
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.use("/book", bookRoutes)
app.use("/passage", passageRoutes)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});