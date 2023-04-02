const categoryRoute = require("./CategoryRoute");
const subCategoryRoute = require("./SubCategoryRoute");
const slideRoute = require("./SlideRoute");
const supplierRoute = require("./SupplierRoute");
const brandRoute = require("./BrandRoute");
const collectionRoute = require("./CollectionRoute");
const collectionImageRoute = require("./CollectionImageRoute");
const productRoute = require("./ProductRoute");
const colorRoute = require("./ColorRoute");
const colorImageRoute = require("./ColorImageRoute");
const sizeRoute = require("./SizeRoute");
const discountRoute = require("./DiscountRoute");
const invoiceRoute = require("./InvoiceRoute");
const invoiceDetailRoute = require("./InvoiceDetailRoute");

const userRoute = require("./UserRoute");

const customerRoute = require("./CustomerRoute");
const staffRoute = require("./StaffRoute");

const ordersRoute = require("./OrdersRoute");
const ordersStatusRoute = require("./OrdersStatusRoute");
const ordersDetailRoute = require("./OrdersDetailRoute");
const deliveryAddressRoute = require("./DeliveryAddressRoute");

const transportRouter = require("./transport");
const paymentRouter = require("./payment");
const newsRouter = require("./news");
const roleRouter = require("./role");
const cartRouter = require("./cart");
const cartDetailRouter = require("./cartDetail");
const staticsRouter = require("./statics");
const importProductRouter = require("./importProduct");

const uploadRouter = require("./UploadRoute");

const useRoutes = (app) => {
  app.use("/api/categories", categoryRoute);
  app.use("/api/subCategories", subCategoryRoute);
  app.use("/api/slides", slideRoute);
  app.use("/api/brands", brandRoute);
  app.use("/api/suppliers", supplierRoute);
  app.use("/api/collections", collectionRoute);
  app.use("/api/collectionImages", collectionImageRoute);

  app.use("/api/products", productRoute);
  app.use("/api/colors", colorRoute);
  app.use("/api/colorImages", colorImageRoute);
  app.use("/api/sizes", sizeRoute);
  app.use("/api/discounts", discountRoute);
  app.use("/api/invoices", invoiceRoute);
  app.use("/api/invoiceDetails", invoiceDetailRoute);

  app.use("/api/users", userRoute);

  app.use("/api/customers", customerRoute);
  app.use("/api/staffs", staffRoute);
  app.use("/api/orderses", ordersRoute);
  app.use("/api/ordersDetails", ordersDetailRoute);
  app.use("/api/ordersStatuses", ordersStatusRoute);
  app.use("/api/deliveryAddresses", deliveryAddressRoute);

  app.use("/api/transports", transportRouter);
  app.use("/api/payments", paymentRouter);
  app.use("/api/news", newsRouter);
  app.use("/api/roles", roleRouter);
  app.use("/api/carts", cartRouter);
  app.use("/api/cartDetails", cartDetailRouter);
  app.use("/api/statics", staticsRouter);
  app.use("/api/importProducts", importProductRouter);

  app.use("/api/upload", uploadRouter);
};

module.exports = useRoutes;