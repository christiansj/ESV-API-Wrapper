import express, { Request, Response } from 'express';
import helmet from 'helmet';

// routes
import bookRoutes from './routes/book.route'
import passageRoutes from './routes/passage.route'
import pingRoutes from './routes/ping.route'

import { errorHandler } from './middlewares/errorHandler';

// Swagger
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
import swaggerOptions from './swaggerOptions';

const app = express();
const port = process.env.PORT || 8080;
app.use(helmet())

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


// Root url
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.use("/book", bookRoutes)
app.use("/passage", passageRoutes)
app.use("/ping", pingRoutes)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});