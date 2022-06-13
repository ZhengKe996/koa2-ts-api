import Admin from "../model/Admin";

class AdminService {
  getAdmin() {
    return Admin.findByPk(1);
  }
}

export default new AdminService();
