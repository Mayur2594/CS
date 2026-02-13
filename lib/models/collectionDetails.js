var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;
var  AllModels = require('./AllModels');
function encrypt(text) {
	return text;
	try
	{
		if (text === null || typeof text === 'undefined') { return text; };
		var cipher = crypto.createCipheriv('aes-256-cbc', process.env.ENCRYPTED_KEY);
		var crypted = cipher.update(text,'utf8','hex');
		crypted += cipher.final('hex');
	}
	catch(err)
	{}
	return crypted;
} 

function decrypt(text) {
	return text;
	try
	{

		if (text === null || typeof text === 'undefined') {return text;};
		var decipher = crypto.createDecipheriv('aes-256-cbc', process.env.ENCRYPTED_KEY);
		var dec = decipher.update(text,'hex','utf8');
		dec += decipher.final('utf8');
	}	
	catch(err)
	{}	
	return dec;
}


var collectionDetails = new Schema(
{
		memberid:[{ type: Schema.Types.ObjectId, ref: 'membersDetails' }],
		accountid:[{ type: Schema.Types.ObjectId, ref: 'memberAccounts' }],
		collectedamount:{type: String, get: decrypt, set: encrypt},
		dateofcollection:Date,
		collectionstatus:Number,
		nocollectionreason:{type: String, get: decrypt, set: encrypt},
		memberapproval:{type: String, get: decrypt, set: encrypt},
		branchapproval:{type: String, get: decrypt, set: encrypt},
		createdby:[{ type: Schema.Types.ObjectId, ref: 'employeeDetails' }],
		ceateddate:{type:Date,default:new Date()},
});

collectionDetails.set('toJSON', { getters: true, setters: true ,virtuals: true});
collectionDetails.set('toObject', { getters: true, setters: true,virtuals: true });


mongoose.model('collectionDetails', collectionDetails);