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


var membersDetails = new Schema(
{
	firstname:{ type: String, get: decrypt, set: encrypt},
	midname:{ type: String, get: decrypt, set: encrypt},
	lastname:{ type: String, get: decrypt, set: encrypt},
	gander:{ type: String, get: decrypt, set: encrypt},
	dob:Date,
	startingdate:Date,
	address: {line1:{ type: String, get: decrypt, set: encrypt},line2:{ type: String, get: decrypt, set: encrypt},city:{ type: String, get: decrypt, set: encrypt},State:{ type: String, get: decrypt, set: encrypt},zip:{ type: String, get: decrypt, set: encrypt}},
	documentsdetails:{aadhaar:{ type: String, get: decrypt, set: encrypt},pan:{ type: String, get: decrypt, set: encrypt},pic:String},
	contactdetails:{mobile1:{ type: String, get: decrypt, set: encrypt},mobile2:{ type: String, get: decrypt, set: encrypt},email:{ type: String, get: decrypt, set: encrypt}},
	branch:String,
    group:String,
    areaid:String,
    refredby:{type: Schema.Types.ObjectId, ref: 'membersDetails' },
    refrencecode:{type: String, 'default': shortid.generate },
    depositeamount: Number ,
	createdby:String,
	ceateddate:Date,
});

membersDetails.set('toJSON', { getters: true, setters: true ,virtuals: true});
membersDetails.set('toObject', { getters: true, setters: true,virtuals: true });


mongoose.model('membersDetails', membersDetails);