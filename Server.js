import express from 'express';
import cors from 'cors';
import apiRoutes from'./Proxy/Routes.js';

const app = express();
const port = 3000;

// Habilitar CORS para todas las rutas
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
