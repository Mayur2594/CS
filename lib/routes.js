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
			app.post('/api/SaveEventsDetails/', function (req, res) {
            CreditSociety.SaveEventsDetails(req.body, res);
			});
			app.get('/api/ListEvents/', function (req, res) {
				CreditSociety.ListEvents(req, res);
			});
			app.get('/api/getEventDetails/:eventid', function (req, res) {
				CreditSociety.getEventDetails(req.params.eventid, res);
			});
			app.delete('/api/DeleteEvent/:eventid', function (req, res) {
				CreditSociety.DeleteEvent(req.params.eventid, res);
			});
		
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
		
			app.post('/api/SaveaccountTypes/', function (req, res) {
            CreditSociety.SaveaccountTypes(req.body, res);
			});
			app.get('/api/ListAccounttypes/', function (req, res) {
				CreditSociety.ListAccounttypes(req, res);
			});
			app.get('/api/getAccounttypesDetails/:acTypesid', function (req, res) {
				CreditSociety.getAccounttypesDetails(req.params.acTypesid, res);
			});
			app.delete('/api/DeleteACTypeDetails/:acTypesid', function (req, res) {
				CreditSociety.DeleteACTypeDetails(req.params.acTypesid, res);
			});
		
		/* ---------------- */
		
		/* ACCOUNT PLANS DETAILS */
		app.post('/api/SaveAccountPlan/', function (req, res) {
            CreditSociety.SaveAccountPlan(req.body, res);
			});
			app.get('/api/ListaccountPlans/', function (req, res) {
				CreditSociety.ListaccountPlans(req, res);
			});
			app.get('/api/getAccountPlansDetails/:acPlanid', function (req, res) {
				CreditSociety.getAccountPlansDetails(req.params.acPlanid, res);
			});
			app.delete('/api/DeleteACPlanDetails/:acPlanid', function (req, res) {
				CreditSociety.DeleteACPlanDetails(req.params.acPlanid, res);
			});
		
		
		/* ---------------- */
		
		/* REFERANCES */
		app.get('/api/ListBranchsforReferance/', function (req, res) {
            CreditSociety.ListBranchsforReferance(req, res);
        });
		app.get('/api/ListAcTypesRef/', function (req, res) {
            CreditSociety.ListAcTypesRef(req, res);
        });
		app.get('/api/ListAreasOnBranch/:branchid', function (req, res) {
            CreditSociety.ListAreasOnBranch(req.params.branchid, res);
        });
		app.get('/api/ListGroupsOnArea/:areaid', function (req, res) {
            CreditSociety.ListGroupsOnArea(req.params.areaid, res);
        });
		
		
		/* ----------- */
		
        
		
		
		
		
    }
};