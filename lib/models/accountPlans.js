var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;
var  accountTypes = require('./accountTypes');
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


var accountPlans = new Schema(
{
	name:{ type: String, get: decrypt, set: encrypt},
	description:{ type: String, get: decrypt, set: encrypt},
	frequency:{ type: String, get: decrypt, set: encrypt},
	/* actypeid:{accounttype:{ type: String, get: decrypt, set: encrypt},id:{type:String},_id:{type:String},interestrate:{ type: String, get: decrypt, set: encrypt},guarantor:{ type: String, get: decrypt, set: encrypt},noguarantors:{ type: String, get: decrypt, set: encrypt},installments:{ type: String, get: decrypt, set: encrypt}}, */
	actypeid:{ type: Schema.Types.ObjectId, ref: 'accountTypes' },
	basicamount:{ type: String, get: decrypt, set: encrypt},
	interestrate:{ type: String, get: decrypt, set: encrypt},
	netamount:{ type: String, get: decrypt, set: encrypt},
	emiamount:{ type: String, get: decrypt, set: encrypt},
	loanamount:{ type: String, get: decrypt, set: encrypt},
	tenure:{ type: String, get: decrypt, set: encrypt},
	tenuretype:{ type: String, get: decrypt, set: encrypt},
	branch:{ type: Schema.Types.ObjectId, ref: 'branchDetails' },
    group:{ type: Schema.Types.ObjectId, ref: 'groupDetails' },
    areaid:{ type: Schema.Types.ObjectId, ref: 'areaDetails' },
	createdby:[{ type: Schema.Types.ObjectId, ref: 'employeeDetails' }],
	ceateddate:{type:Date,default:new Date()},
});

accountPlans.set('toJSON', { getters: true, setters: true ,virtuals: true});
accountPlans.set('toObject', { getters: true, setters: true,virtuals: true });


mongoose.model('accountPlans', accountPlans);