import express from "express";
import bookRoutes from "./bookRoutes";
import customerOrdersRoutes from "./customerOrdersRoutes"
import customerRoutes from "./customerRoutes"
import orderRoutes from "./orderRoutes"


const routes = express.Router();

routes.use("/book", bookRoutes);
routes.use("/customer", customerRoutes);
routes.use("/customerOrders", customerOrdersRoutes );
routes.use("/order", orderRoutes );




export default routes;