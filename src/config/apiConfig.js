// const URL = 'http://localhost:8002/api';
const URL = "http://localhost:8080/api";

const apiRoutes = {
  register: `${URL}/register`,
  login: `${URL}/login`,
  verifyEmail: `${URL}/confirm_email`,
  orderList: `${URL}/order_list`,
  addPurchase: `${URL}/add_purchase`
};

export default apiRoutes;