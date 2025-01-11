import express from 'express';
import cors from 'cors';
import apiRoutes from'./Proxy/Routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'https://project5-tuqa.onrender.com' 
}));

//app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});