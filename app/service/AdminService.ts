import Admin from "../model/Admin";

class AdminService {
  getAdminById(adminId: number) {
    return Admin.findByPk(adminId);
  }
}

export default new AdminService();
