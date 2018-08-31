var mongoose = require('mongoose');
var  membersDetails = require('../models/membersDetails');
var  memberAccounts = require('../models/memberAccounts');
var  accountTypes = require('../models/accountTypes');
var  agentDetails = require('../models/agentDetails');
var  areaDetails = require('../models/areaDetails');
var  branchDetails = require('../models/branchDetails');
var  employeeDetails = require('../models/employeeDetails');

function members() {
	
	this. ListState = function (req, res) {
		connection.acquire(function (err, con) {
			con.query('SELECT * FROM `statemaster` ORDER BY id desc', function (err, result) {
				con.release();
				res.send(result);
			});
		});
	};   
	
}
module.exports = new members();