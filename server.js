import express from 'express';
import 'dotenv/config'
import cors from 'cors'
import { connectDB } from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();

await connectDB();

// Middleware
app.use(cors({
    origin: "https://quick-blog-frontend-seven.vercel.app",
    credentials: true
}));
app.use(express.json())

// Routes
// app.get('/', (req ,res) => res.send("API is working"));
app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);

const PORT = process.env.APP_PORT || 5000;

app.listen(PORT, () => {
    console.log('server is running on port ' + PORT)
});
