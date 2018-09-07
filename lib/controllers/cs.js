var mongoose = require('mongoose');
var crypto = require('crypto');
var  membersDetails = require('../models/membersDetails');
var  memberAccounts = require('../models/memberAccounts');
var  accountTypes = require('../models/accountTypes');
var  agentDetails = require('../models/agentDetails');
var  areaDetails = require('../models/areaDetails');
var  branchDetails = require('../models/branchDetails');
var  employeeDetails = require('../models/employeeDetails');
var  accountPlans = require('../models/accountPlans');
var  collectionDetails = require('../models/collectionDetails');
var  collectionLimit = require('../models/collectionLimit');
var  eventsDetails = require('../models/eventsDetails');
var  groupDetails = require('../models/groupDetails');
var  termsNConditions = require('../models/termsNConditions');

var members = mongoose.model('membersDetails');
var membersacc = mongoose.model('memberAccounts');
var actypes = mongoose.model('accountTypes');
var agents = mongoose.model('agentDetails');
var areas = mongoose.model('areaDetails');
var branches = mongoose.model('branchDetails');
var employees = mongoose.model('employeeDetails');
var acplans = mongoose.model('accountPlans');
var acplans = mongoose.model('accountPlans');
var collections = mongoose.model('collectionDetails');
var collectionlimit = mongoose.model('collectionLimit');
var events = mongoose.model('eventsDetails');
var groups = mongoose.model('groupDetails');
var termsnconditions = mongoose.model('termsNConditions');
var descriptionpoints = mongoose.model('descriptionpoints');

var opts = {
    //useMongoClient: true,
    autoReconnect: true,
	autoIndex: false, // Don't build indexes
    //reconnectTries: 100, // Never stop trying to reconnect /* Not used for replica set */
    //reconnectInterval: 500, // Reconnect every 500ms  /* Not used for replica set */
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    /*bufferMaxEntries: 0*/
	connectTimeoutMS: 30000,
	socketTimeoutMS: 30000,
	useNewUrlParser: true	
  };


	
	exports.ListTermsNCondtions= function(req, res) {
		mongoose.connect(process.env.MONGOLAB_URI,opts).then(
		()=>{
			termsnconditions.find({}).exec(function (err, result) {
				if(err)
				{
					res.send({status:1,message:'Somthing went wrong, Please try again!'});
					mongoose.disconnect();
				}
				else
				{
					res.send(result);
					mongoose.disconnect();
				}
			});
		});
	};   
	
	exports.getTermsDetails= function(termid, res) {
		mongoose.connect(process.env.MONGOLAB_URI,opts).then(
		()=>{
			termsnconditions.find({_id:termid}).exec(function (err, result) {
				if(err)
				{
					res.send({status:1,message:'Somthing went wrong, Please try again!'});
					mongoose.disconnect();
				}
				else
				{
					res.send(result);
					mongoose.disconnect();
				}
			});
		});
	};   
	
	exports.SaveTermsDetails= function(tearmsDetails, res) {
		mongoose.connect(process.env.MONGOLAB_URI,opts).then(
		()=>{
			var tearmsdetails = new termsnconditions(tearmsDetails);
			tearmsdetails.save(function(err,result) {
				if(err)
				{
					res.send({status:1,message:'Somthing went wrong, Please try again!'});
					mongoose.disconnect();
				}
				else
				{
					res.send({status:0,message:'Record inserted successfully!'});
					mongoose.disconnect();
				}
			});
		});
	};   
	

	
	exports.RemoveTermDescriptionPoint= function(tearmsDetailsid, res) {
		console.log(tearmsDetailsid)
		mongoose.connect(process.env.MONGOLAB_URI,opts).then(
		()=>{
			termsnconditions.find({'description._id': tearmsDetailsid},{description: {$elemMatch: {'_id': tearmsDetailsid}}}, function (err,result) {
				console.log(err);
				console.log(result);
				if(err)
				{
					res.send({status:1,message:'Somthing went wrong, Please try again!'});
					mongoose.disconnect();
				}
				else
				{
					res.send({status:0,message:'Record deleted successfully!'});
					mongoose.disconnect();
				}
			});
		});
	};   
	

