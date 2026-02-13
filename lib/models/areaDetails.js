var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;
var  AllModels = require('./AllModels');
function encrypt(text) {
	return text;
	try
	{
		if (text === null || typeof text === 'undefined') { return text; }
		
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
	if (text === null || typeof text === 'undefined') {return text;}
	else
	{
	try
	{
		var decipher = crypto.createDecipheriv('aes-256-cbc', process.env.ENCRYPTED_KEY);
		var dec = decipher.update(text,'hex','utf8');
		dec += decipher.final('utf8');
	}	
	catch(err)
	{}	
	
	return dec;
	}
}

var areaDetails = new Schema(
{
	areaname:{ type: String, get: decrypt, set: encrypt},
	description:{ type: String, get: decrypt, set: encrypt},
	areacode:{ type: String, get: decrypt, set: encrypt},
	branchid:{ type: Schema.Types.ObjectId, ref: 'branchDetails' },
});


areaDetails.set('toObject', { getters: true, setters: true,virtuals: true });
areaDetails.set('toJSON', { getters: true, setters: true ,virtuals: true});

mongoose.model('areaDetails', areaDetails);