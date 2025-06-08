import express from 'express';
import authRoute from "./routes/auth.routes"
import certificateRoute from "./routes/certificate.routes"
import skillRoute from "./routes/skill.routes"
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies


app.get("/", (req, res)=> {
    res.status(200).json({
        message: "Welcome to the API",
        status: "success",
        data :{
            name: "Portfolio API",
            version: "1.0.0",
            description: "This is a simple API for a portfolio application.",
            author: "Farindra Bhandari",
            website: "https://fbb.com.np",
        }
    })
})

//auth Routes
app.use("/api/auth", authRoute)

// certificate Routes
app.use("/api/certificate", certificateRoute)
//skill routes
app.use("/api/skill",skillRoute)

export default app