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
	planid:{type: Schema.Types.ObjectId, ref: 'planDetails'},
	accounttypeid:{type: Schema.Types.ObjectId, ref: 'accountTypes'},
	startingdate:Date,
	expirydate:Date,
    memberid:{type: Schema.Types.ObjectId, ref: 'membersDetails' },
    investedamount: Number,
    interestrate: Number,
    emi: Number,
    netamount: Number,
    gourentor1: {type: Schema.Types.ObjectId, ref: 'membersDetails' },
    gourentor2: {type: Schema.Types.ObjectId, ref: 'membersDetails' },
	createdby:String,
	ceateddate:Date,
});

memberAccounts.set('toJSON', { getters: true, setters: true ,virtuals: true});
memberAccounts.set('toObject', { getters: true, setters: true,virtuals: true });


mongoose.model('memberAccounts', memberAccounts);