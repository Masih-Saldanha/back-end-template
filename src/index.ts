import app from "./config/app.js";
import "./config/dotenvConfig.js";

const port = +process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server up and listening on port ${port}`);
});
