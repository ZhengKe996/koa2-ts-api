import Admin from "../model/Admin";

class AdminService {
  getAdminById(adminId: number) {
    return Admin.findByPk(adminId);
  }
  getAdminAdminListByPage(page: number, limit: number = 15) {
    return Admin.findAndCountAll({
      limit: limit,
      offset: (page - 1) * limit,
    });
  }
  getAdminByName(name: string) {
    return Admin.findOne({
      where: {
        name: name,
      },
    });
  }
}

export default new AdminService();
