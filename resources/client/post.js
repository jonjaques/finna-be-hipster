var self = this;
errorIf(!this.username, 'Username', 'Username is required.');
errorIf(!this.password, 'Password', 'Password is required.');


errorUnless((function() {
    var usermatch = "SweetCode@fakemail.none" === self.username;
    var passmatch = "code1234!" === self.password;
    console.log(usermatch, passmatch);
    return usermatch && passmatch;
})(), 'Username/Password', "We didn't recognize that password combination, please try again.");


hide('username');
hide('password');
hide('id');

var client = dpd.client.get('61bc66f4af4a0867', function(client) {
    self.user = client.user;
    self.sites = client.sites;
    self.zones = client.zones;
});



