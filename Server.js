//requiring
const express = require("express");
const app = express();
const allRouters = require("./Routers/FirstRouter");
const adminRouter = require("./Admin/Admin");
const DataConn = require("./DB/MongooseConn");
// const cors = require("cors");

// varaible
const port = process.env.PORT || 5000;
// const corsOptions = {
//   origin: "http://localhost:3000",
//   methods: "PUT,GET,POST,DELETE,PATCH,HEAD",
//   Credentials: true,
// };

// //middlewares
// app.use(cors(corsOptions));
app.use(express.json());
app.use(allRouters);
app.use(adminRouter);

//db connection and listening the port
DataConn()
  .then(() => {
    app.listen(port, (err) => {
      if (err) {
        console.log(`there is error and error is ${err}`);
      } else {
        console.log(`app is listening at the port no ${port}`);
      }
    });
  })
  .catch((err) => {
    console.log(`there is error  in port and db ${err}`);
  });
