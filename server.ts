import app from "./src/app";
import envconfig from "./src/config/config";
import "./src/config/dbConnection"


function startServer() {
    const port = envconfig.port
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}


startServer();