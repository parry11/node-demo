import Member from '../controllers/Member';
export default class Routes {
  router;
  members;
  db;

  constructor(router) {
    this.router = router;
  }
 
  async init() {
    this.members = new Member(this.router);
    await this.members.init(); 
  }

  async getRoutes() {
    await this.members.registerRoutes();
  }

}
