var mongoose = require('mongoose');
var crypto = require('crypto');
var shortid = require('shortid');
var Schema = mongoose.Schema;

function encrypt(text) {
	try
	{
		if (text === null || typeof text === 'undefined') { return text; };
		var cipher = crypto.createCipher('aes-256-cbc', process.env.ENCRYPTED_KEY);
		var crypted = cipher.update(text,'utf8','hex');
		crypted += cipher.final('hex');
	}
	catch(err)
	{}
	return crypted;
} 

function decrypt(text) {
	try
	{

		if (text === null || typeof text === 'undefined') {return text;};
		var decipher = crypto.createDecipher('aes-256-cbc', process.env.ENCRYPTED_KEY);
		var dec = decipher.update(text,'hex','utf8');
		dec += decipher.final('utf8');
	}	
	catch(err)
	{}	
	return dec;
}


var memberAccounts = new Schema(
{
	planid:{name:{ type: String, get: decrypt, set: encrypt},id:{type:String},_id:{type:String}},
	accounttypeid:{accounttype:{ type: String, get: decrypt, set: encrypt},id:{type:String},_id:{type:String}},
	startingdate:Date,
	expirydate:Date,
    memberid:{firstname:{ type: String, get: decrypt, set: encrypt},
	midname:{ type: String, get: decrypt, set: encrypt},
	lastname:{ type: String, get: decrypt, set: encrypt},id:{type:String},_id:{type:String}},
    investedamount: { type: String, get: decrypt, set: encrypt},
    interestrate: { type: String, get: decrypt, set: encrypt},
    emi: { type: String, get: decrypt, set: encrypt},
    netamount: { type: String, get: decrypt, set: encrypt},
    loanamount: { type: String, get: decrypt, set: encrypt},
    tenure: { type: String, get: decrypt, set: encrypt},
    tenuretype: { type: String, get: decrypt, set: encrypt},
    frequency: { type: String, get: decrypt, set: encrypt},
    gourentor1: {firstname:{ type: String, get: decrypt, set: encrypt},
	midname:{ type: String, get: decrypt, set: encrypt},
	lastname:{ type: String, get: decrypt, set: encrypt},id:{type:String},_id:{type:String}},
    gourentor2: {firstname:{ type: String, get: decrypt, set: encrypt},
	midname:{ type: String, get: decrypt, set: encrypt},
	lastname:{ type: String, get: decrypt, set: encrypt},id:{type:String},_id:{type:String}},
	createdby:String,
	ceateddate:Date,
});

memberAccounts.set('toJSON', { getters: true, setters: true ,virtuals: true});
memberAccounts.set('toObject', { getters: true, setters: true,virtuals: true });


mongoose.model('memberAccounts', memberAccounts);