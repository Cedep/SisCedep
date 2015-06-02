'use strict';

var express = require('express');
var router = express.Router();
var helpers = require('../../../helpers');

/*
 * GET usuarios: http://localhost:3000/api/v1/usuarios
 */
router.get('/', helpers.requiredAuthentication, function(req, res) {	
    var connPool = req.connPool;

    connPool.getConnection(function(err, conn) {
      var sql = 'SELECT * FROM cedep_schema.user_table as user_table';

      conn.query(sql, function(err, rows, fields) {

          if (err) {
              conn.release();
              throw new Error(err);
          }

          var usuarios = [];
          if (rows) {
            rows.forEach(function (u) {
                usuarios.push({
                    login: u.login,
                    full_name: u.full_name
                });
            });
          }

          res.json(usuarios);

          conn.release();
      });
    });
});

module.exports = router;
