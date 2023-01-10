const express = require("express");
const app = express();
const tasks = require("./routes/task");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
//middleware
// app.use(express.static("./public"));

//mainly used to convert the front-end req to node understanding
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);
app.get("/", function (request, response) {
  response.send(`🙋‍♂️, 🌏 🎊✨🤩!!!!!
  <a href="/api/v1/tasks">to see tasks</a>`);
});

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 3001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is Runing On ${port}...!!!`));
  } catch (error) {
    console.log(error);
  }
};

start();
