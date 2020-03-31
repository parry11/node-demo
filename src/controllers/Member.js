import express from 'express';
import MemberService from '../services/Member';
import Logger from '../helpers/logger';
import { RESPONSE_CODES,MESSAGES } from '../../config/constants';



export default class MemberCtrl {
  db;
  logger;
  Models;
  router;
  service;

  constructor(router) {
    this.router  = router;
    this.logger  = new Logger();
    this.service = new MemberService(); // here we add db services
  }

  async init() {
    try {
      await this.logger.init();
      await this.service.init(this.router);
    }
    catch(err) {
      throw err;
    }
  }

  registerRoutes() {
    this.router
      .route('/member-list/:id')
      .get((req, res) => this.memberList(req, res));
  }

  async memberList(req, res) {
    try {
      var id = req.params.id;
      if (id) {
        return res.json({
          status: 0, // If data exist ,then we set status 1 and and add one more parameter ie array of data
          message: MESSAGES.N0_DATA_FOUND,
          status_code:RESPONSE_CODES.POST
        });
      }else{
        return res.json({
          status: 0,
          message: MESSAGES.MISSING,
          status_code:RESPONSE_CODES.BAD_REQUEST
        });
      }
    }
    catch (error) {
      //throw error;
      console.log('Member Listing Error => ',error);
      return res.json({
          status: 0,
          message: MESSAGES.WRONG,
          status_code:RESPONSE_CODES.BAD_REQUEST
        });
    }
  }

}

