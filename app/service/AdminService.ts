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
  addAdmin(admin: any) {
    return Admin.create(admin);
  }
  updateAdmin(id: number, admin: any) {
    return Admin.update(admin, { where: { id: id } });
  }
  deleteAdmin(id: number) {
    return Admin.destroy({ where: { id: id } });
  }
}

export default new AdminService();
