var mongoose = require('mongoose');
var crypto = require('crypto');
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


var accountCollection = new Schema(
{
		memberid:{type: Schema.Types.ObjectId, ref: 'membersDetails' },
		accountid:{type: Schema.Types.ObjectId, ref: 'memberAccounts'},
		collectedamount:{type: String, get: decrypt, set: encrypt},
		dateofcollection:Date,
		collectionstatus:Number,
		nocollectionreason:{type: String, get: decrypt, set: encrypt},
		memberapproval:{type: String, get: decrypt, set: encrypt},
		branchapproval:{type: String, get: decrypt, set: encrypt},
		createdby:String,
		ceateddate:Date,
});

accountCollection.set('toJSON', { getters: true, setters: true ,virtuals: true});
accountCollection.set('toObject', { getters: true, setters: true,virtuals: true });


mongoose.model('accountCollection', accountCollection);