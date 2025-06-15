import express from 'express';
import authRoute from "./routes/auth.routes"
import certificateRoute from "./routes/certificate.routes"
import skillRoute from "./routes/skill.routes"
import projectRoute from "./routes/project.routes"
import experienceRoute from './routes/experience.routes';
import socialRoute from "./routes/social.routes"
import userRoute from "./routes/user.routes"
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

//profile
app.use("/api/account", userRoute)
// certificate Routes
app.use("/api/certificate", certificateRoute)
//skill routes
app.use("/api/skill",skillRoute)
// project route
app.use("/api/project", projectRoute)
//experience route
app.use("/api/experience", experienceRoute)
// social route
app.use("/api/social", socialRoute)
export default app