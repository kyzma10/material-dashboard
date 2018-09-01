const URL = 'http://localhost:8002/api';

const apiRoutes = {
  register: `${URL}/register`,
  login: `${URL}/login`,
  verifyEmail: `${URL}/confirm_email`,
  orderList: `${URL}/order_list`
};

export default apiRoutes