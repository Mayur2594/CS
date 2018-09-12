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


	/* TERMS AND CONDITIONS */
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
	
	exports.DeleteTermCondition= function(termid, res) {
		mongoose.connect(process.env.MONGOLAB_URI,opts).then(
		()=>{
			termsnconditions.deleteOne({_id:termid}).exec(function (err, result) {
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
		var description = tearmsDetails.description ;
		mongoose.connect(process.env.MONGOLAB_URI,opts).then(
		()=>{
			var tearmsdetails = new termsnconditions(tearmsDetails);
			if(tearmsDetails._id)
			{
				termsnconditions.update({ _id: tearmsDetails._id }, tearmsDetails,{ multi: true }, function(err) {
				if(err)
				{
					res.send({status:1,message:'Somthing went wrong, Please try again!'});
					mongoose.disconnect();
				}
				else
				{
					res.send({status:0,message:'Record updated successfully!'});
					mongoose.disconnect();
				}
			});
			}
			else
			{
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
			}
		});
	};   
	

	
	exports.RemoveTermDescriptionPoint= function(tearmsDetailsid,termmasterid, res) {
		console.log(tearmsDetailsid)
		mongoose.connect(process.env.MONGOLAB_URI,opts).then(
		()=>{
			termsnconditions.update( 
				{ _id: termmasterid },
				{ $pull: { description : { _id : tearmsDetailsid } } },
				{ safe: true },
				function removeConnectionsCB(err, result) {
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
	
	/* TERMS AND CONDITIONS */
	
	/* BRANCH DETAILS */
	
		exports.ListBranchs= function(req, res) {
		mongoose.connect(process.env.MONGOLAB_URI,opts).then(
		()=>{
			branches.find({}).exec(function (err, result) {
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
	
	
	exports.getBranchDetails= function(branchid, res) {
		mongoose.connect(process.env.MONGOLAB_URI,opts).then(
		()=>{
			branches.find({_id:branchid}).exec(function (err, result) {
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
	
	exports.DeleteBranch= function(branchid, res) {
		mongoose.connect(process.env.MONGOLAB_URI,opts).then(
		()=>{
			branches.deleteOne({_id:branchid}).exec(function (err, result) {
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
	
	
		
	exports.SaveBranchDetails= function(branchDetails, res) {
		mongoose.connect(process.env.MONGOLAB_URI,opts).then(
		()=>{
			var branchdetails = new branches(branchDetails);
			if(branchDetails._id)
			{
				branches.update({ _id: branchDetails._id }, branchDetails,{ multi: true }, function(err) {
				if(err)
				{
					res.send({status:1,message:'Somthing went wrong, Please try again!'});
					mongoose.disconnect();
				}
				else
				{
					res.send({status:0,message:'Record updated successfully!'});
					mongoose.disconnect();
				}
			});
			}
			else
			{
				branchdetails.save(function(err,result) {
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
			}
		});
	};   
	
	
	/* BRANCH DETAILS */

	
	
	/* AREA DETAILS */
	
		exports.ListAreas= function(req, res) {
		mongoose.connect(process.env.MONGOLAB_URI,opts).then(
		()=>{
			   areas.find({}).exec(function (err, result) { 
						console.log(err);
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
	
	
	exports.getAreaDetails= function(areaid, res) {
		mongoose.connect(process.env.MONGOLAB_URI,opts).then(
		()=>{
			areas.find({_id:areaid}).exec(function (err, result) {
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
	
	exports.DeleteArea= function(areaid, res) {
		mongoose.connect(process.env.MONGOLAB_URI,opts).then(
		()=>{
			areas.deleteOne({_id:areaid}).exec(function (err, result) {
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
	
	
		
	exports.SaveAreaDetails= function(AreaDetails, res) {
		mongoose.connect(process.env.MONGOLAB_URI,opts).then(
		()=>{
			var areasdetails = new areas(AreaDetails);
			if(AreaDetails._id)
			{
				areas.update({ _id: AreaDetails._id }, AreaDetails,{ multi: true }, function(err) {
				if(err)
				{
					res.send({status:1,message:'Somthing went wrong, Please try again!'});
					mongoose.disconnect();
				}
				else
				{
					res.send({status:0,message:'Record updated successfully!'});
					mongoose.disconnect();
				}
			});
			}
			else
			{
				areasdetails.save(function(err,result) {
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
			}
		});
	};   
	
	
	/* AREA DETAILS */
	
	
	/* GROUP DETAILS */
	
		exports.ListGroups= function(req, res) {
		mongoose.connect(process.env.MONGOLAB_URI,opts).then(
		()=>{
			 groups.find({}).exec(function (err, result) { 
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
	
	
	exports.getGroupDetails= function(groupid, res) {
		mongoose.connect(process.env.MONGOLAB_URI,opts).then(
		()=>{
			groups.find({_id:groupid}).exec(function (err, result) {
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
	
	exports.DeleteGroup= function(groupid, res) {
		mongoose.connect(process.env.MONGOLAB_URI,opts).then(
		()=>{
			groups.deleteOne({_id:groupid}).exec(function (err, result) {
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
	
	
		
	exports.SavegroupDetails= function(groupDetails, res) {
		mongoose.connect(process.env.MONGOLAB_URI,opts).then(
		()=>{
			var groupsdetails = new groups(groupDetails);
			if(groupDetails._id)
			{
				groups.update({ _id: groupDetails._id }, groupDetails,{ multi: true }, function(err) {
				if(err)
				{
					res.send({status:1,message:'Somthing went wrong, Please try again!'});
					mongoose.disconnect();
				}
				else
				{
					res.send({status:0,message:'Record updated successfully!'});
					mongoose.disconnect();
				}
			});
			}
			else
			{
				groupsdetails.save(function(err,result) {
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
			}
		});
	};   
	
	
	/* GROUP DETAILS */
	
	
	/* EVENTS DETAILS */
	
		exports.ListEvents= function(req, res) {
		mongoose.connect(process.env.MONGOLAB_URI,opts).then(
		()=>{
			 events.find({}).exec(function (err, result) { 
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
	
	
	exports.getEventDetails= function(eventid, res) {
		mongoose.connect(process.env.MONGOLAB_URI,opts).then(
		()=>{
			events.find({_id:eventid}).exec(function (err, result) {
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
	
	exports.DeleteEvent= function(eventid, res) {
		mongoose.connect(process.env.MONGOLAB_URI,opts).then(
		()=>{
			events.deleteOne({_id:eventid}).exec(function (err, result) {
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
	
	
		
	exports.SaveEventsDetails= function(eventDetails, res) {
		mongoose.connect(process.env.MONGOLAB_URI,opts).then(
		()=>{
			var eventsdetails = new events(eventDetails);
			if(eventDetails._id)
			{
				groups.update({ _id: eventDetails._id }, eventDetails,{ multi: true }, function(err) {
				if(err)
				{
					res.send({status:1,message:'Somthing went wrong, Please try again!'});
					mongoose.disconnect();
				}
				else
				{
					res.send({status:0,message:'Record updated successfully!'});
					mongoose.disconnect();
				}
			});
			}
			else
			{
				eventsdetails.save(function(err,result) {
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
			}
		});
	};   
	
	
	/* EVENTS DETAILS */
	
	/* REFERANCES */
	exports.ListBranchsforReferance= function(req, res) {
		mongoose.connect(process.env.MONGOLAB_URI,opts).then(
		()=>{
			branches.find({},{'branchname':1}).exec(function (err, result) {
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
	
	exports.ListAreasOnBranch= function(branchid, res) {
		mongoose.connect(process.env.MONGOLAB_URI,opts).then(
		()=>{
			areas.find({'branchid._id':branchid},{'areaname':1}).exec(function (err, result) {
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
	
	
	/* REFERANCES */
