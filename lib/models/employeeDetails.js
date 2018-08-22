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


var employee = new Schema(
{
	firstname:{ type: String, get: decrypt, set: encrypt},
	midname:{ type: String, get: decrypt, set: encrypt},
	lastname:{ type: String, get: decrypt, set: encrypt},
	gander:{ type: String, get: decrypt, set: encrypt},
	dob:Date,
	doj:Date,
	address: {line1:{ type: String, get: decrypt, set: encrypt},line2:{ type: String, get: decrypt, set: encrypt},city:{ type: String, get: decrypt, set: encrypt},State:{ type: String, get: decrypt, set: encrypt},zip:{ type: String, get: decrypt, set: encrypt}},
	contactdetails:{mobile1:{ type: Number, get: decrypt, set: encrypt},mobile2:{ type: Number, get: decrypt, set: encrypt},email:{ type: String, get: decrypt, set: encrypt}},
	branch:String,
	createdby:String,
	ceateddate:Date,
	role:{ type: String, get: decrypt, set: encrypt}
});

employee.set('toJSON', { getters: true, setters: true ,virtuals: true});
employee.set('toObject', { getters: true, setters: true,virtuals: true });


mongoose.model('employee', employee);