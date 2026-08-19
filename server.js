
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");

const app  = require("./src/app");


const PORT = process.env.PORT || 5000;
dotenv.config();
// Database Connection
connectDB();

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});