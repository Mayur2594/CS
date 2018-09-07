var  CreditSociety = require('./controllers/cs');

module.exports = {

    configure: function (app) {
		
		
		/* MEMBERS DETAILS */
		
		
		/* ---------------- */
		
		/* MEMBER ACCOUNTS DETAILS */
		
		
		/* ---------------- */
		
		/* MEMBER COLLECTION DETAILS */
		
		
		/* ---------------- */
		
		/* EMPLOYEE DETAILS */
		
		
		/* ---------------- */
		
		/* AGENTS DETAILS */
		
		
		/* ---------------- */
		
		/* AGENTS COLLECTION LIMIT DETAILS */
		
		
		/* ---------------- */
		
		/* BRANCH DETAILS */
		
		
		/* ---------------- */
		
		/* AREA DETAILS */
		
		
		/* ---------------- */
		
		/* GROUP DETAILS */
		
		
		/* ---------------- */
		
		/* EVENTS DETAILS */
		
		
		/* ---------------- */
		
		/* TERMS & CONDITIONS DETAILS */
		app.post('/api/SaveTermsDetails/', function (req, res) {
            CreditSociety.SaveTermsDetails(req.body, res);
        });
		app.get('/api/ListTermsNCondtions/', function (req, res) {
            CreditSociety.ListTermsNCondtions(req, res);
        });
		app.get('/api/getTermsDetails/:termid', function (req, res) {
            CreditSociety.getTermsDetails(req.params.termid, res);
        });
		app.delete('/api/RemoveTermDescriptionPoint/:termdetailsid', function (req, res) {
			console.log(req.params.termdetailsid)
            CreditSociety.RemoveTermDescriptionPoint(req.params.termdetailsid, res);
        });
		/* ---------------- */
		
		/* ACCOUNT TYPES DETAILS */
		
		
		/* ---------------- */
		
		/* ACCOUNT PLANS DETAILS */
		
		
		/* ---------------- */
		
		
        
		
		app.post('/api/user/auth/', function (req, res) {
            CreditSociety.authuser(req.body, res);
        });
        app.get('/api/SendNotification/', function (req, res) {
            CreditSociety.SendNotification(req, res);
        });
		app.delete('/api/DeleteArea/:areaid', function (req, res) {
			 CreditSociety.DeleteArea(req.params.areaid,res);
        }); 	
    }
};