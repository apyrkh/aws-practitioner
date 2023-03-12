const STAGE = import.meta.env.VITE_STAGE;
const IMPORT_SERVICE_URL = import.meta.env.VITE_IMPORT_SERVICE_URL;
const PRODUCT_SERVICE_URL = import.meta.env.VITE_PRODUCT_SERVICE_URL;

const API_PATHS = {
  import: `${IMPORT_SERVICE_URL}/${STAGE}`,
  product: `${PRODUCT_SERVICE_URL}/${STAGE}`,
  order: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  bff: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  cart: "https://.execute-api.eu-west-1.amazonaws.com/dev",
};

export default API_PATHS;
