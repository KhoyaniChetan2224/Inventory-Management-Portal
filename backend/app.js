const dotenv = require('dotenv');
dotenv.config ();
const cors = require('cors');
const express = require('express');
const app = express();
const connectToDB = require('./db/db');
const productRoutes = require ('./admin/router/admin.router');
const salesRoutes = require('./sales/router/salesRoutes');
const inventoryProposalRoutes = require('./sales/router/inventoryProposalRoutes');
// const productRoutes = require('./admin/router/productRoutes');

const reportingRoutes = require("./admin/router/reportRoutes");

connectToDB();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Inventory Management Portal');
});

app.use("/api/products", productRoutes);

app.use('/api/sales', salesRoutes);
app.use('/api/proposals', inventoryProposalRoutes);

app.use("/api/reports", reportingRoutes);

// app.use('/api/products', productRoutes);


module.exports = app;