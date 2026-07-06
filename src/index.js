import "dotenv/config";
import app from './app.js';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App Server running at PORT: http://localhost:${port}`);
});