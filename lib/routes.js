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
			
			app.post('/api/SaveBranchDetails/', function (req, res) {
            CreditSociety.SaveBranchDetails(req.body, res);
			});
			app.get('/api/ListBranchs/', function (req, res) {
				CreditSociety.ListBranchs(req, res);
			});
			app.get('/api/getBranchDetails/:branchid', function (req, res) {
				CreditSociety.getBranchDetails(req.params.branchid, res);
			});
			app.delete('/api/DeleteBranch/:branchid', function (req, res) {
				CreditSociety.DeleteBranch(req.params.branchid, res);
			});
		
		/* ---------------- */
		
		/* AREA DETAILS */
		
			app.post('/api/SaveAreaDetails/', function (req, res) {
            CreditSociety.SaveAreaDetails(req.body, res);
			});
			app.get('/api/ListAreas/', function (req, res) {
				CreditSociety.ListAreas(req, res);
			});
			app.get('/api/getAreaDetails/:areaid', function (req, res) {
				CreditSociety.getAreaDetails(req.params.areaid, res);
			});
			app.delete('/api/DeleteArea/:areaid', function (req, res) {
				CreditSociety.DeleteArea(req.params.areaid, res);
			});
		/* ---------------- */
		
		/* GROUP DETAILS */
			app.post('/api/SavegroupDetails/', function (req, res) {
            CreditSociety.SavegroupDetails(req.body, res);
			});
			app.get('/api/ListGroups/', function (req, res) {
				CreditSociety.ListGroups(req, res);
			});
			app.get('/api/getGroupDetails/:groupid', function (req, res) {
				CreditSociety.getGroupDetails(req.params.groupid, res);
			});
			app.delete('/api/DeleteGroup/:groupid', function (req, res) {
				CreditSociety.DeleteGroup(req.params.groupid, res);
			});
		
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
		app.delete('/api/DeleteTermCondition/:termid', function (req, res) {
            CreditSociety.DeleteTermCondition(req.params.termid, res);
        });
		app.delete('/api/RemoveTermDescriptionPoint/:termdetailsid/:termmasterid', function (req, res) {
			console.log(req.params.termdetailsid)
            CreditSociety.RemoveTermDescriptionPoint(req.params.termdetailsid,req.params.termmasterid, res);
        });
		/* ---------------- */
		
		/* ACCOUNT TYPES DETAILS */
		
		
		/* ---------------- */
		
		/* ACCOUNT PLANS DETAILS */
		
		
		/* ---------------- */
		
		/* REFERANCES */
		app.get('/api/ListAreasOnBranch/:branchid', function (req, res) {
            CreditSociety.ListAreasOnBranch(req.params.branchid, res);
        });
		
		
		/* ----------- */
		
        
		
		
		
		
    }
};