const express = require("express");
const warehouseRoute = require('./routes/warehouse/warehouse')
const app = express();
const cors = require("cors");
const inventoryRoute = require ('./routes/inventory/inventory.js')

require("dotenv").config();

app.use(cors());

app.use(express.json());

app.use(express.static("public"));
<<<<<<< HEAD

app.use("/", warehouseRoute);
=======
>>>>>>> 7771ec523d2abf43fd9706439042083c2c448168


app.use('/', (_req, _res, next) => {
  next();
})
//Inventories
app.use('/inventory', inventoryRoute)


//Server
const PORT = process.env.PORT || 8000;
<<<<<<< HEAD

app.listen(PORT, () => {
  console.log("we're listening...");
=======
app.listen(`${PORT}`, () => {
  console.log(`We're listening on ${PORT}...`);
>>>>>>> 7771ec523d2abf43fd9706439042083c2c448168
});

