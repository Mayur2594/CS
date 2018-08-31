var  CreditSociety = require('./controllers/CreditSociety');

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