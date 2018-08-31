var  CreditSociety = require('./controllers/CreditSociety');

module.exports = {

    configure: function (app) {
		
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