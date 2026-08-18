
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app  = require("./app");


const PORT = process.env.PORT || 5000;
dotenv.config();
// Database Connection
connectDB();

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});