var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;
var  AllModels = require('./AllModels');
function encrypt(text) {
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

var agentDetails = new Schema(
{
	memberid:{ type: Schema.Types.ObjectId, ref: 'membersDetails' },
	group:[{ type: Schema.Types.ObjectId, ref: 'groupDetails' }],
	areaid:[{ type: Schema.Types.ObjectId, ref: 'areaDetails' }],
	branch:[{ type: Schema.Types.ObjectId, ref: 'branchDetails' }],
	createdby:{ type: Schema.Types.ObjectId, ref: 'employeeDetails' },
	activestatus:{ type: Number,default:0},
	createddate:{type:Date,default:new Date()}
});

agentDetails.set('toJSON', { getters: true, setters: true ,virtuals: true});
agentDetails.set('toObject', { getters: true, setters: true,virtuals: true });


mongoose.model('agentDetails', agentDetails);