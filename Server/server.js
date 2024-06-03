const app = require("./app");
const dotenv = require("dotenv");

// Load environment variables from config.env file
dotenv.config({ path: "server/config/config.env" });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
