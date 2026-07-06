import "dotenv/config";
import app from "./app.js";
import connectDB from "./db/index.js";

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`App Server running at PORT: http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Mongo Database Connection Failed!", err);
    process.exit(1);
  });
