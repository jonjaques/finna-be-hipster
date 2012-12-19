var self = this;

function match() {
    var usermatch = "jon@jaques.com" === self.username;
    var passmatch = (self.password === "1234" || self.password === "7110eda4d09e062aa5e4a390b0a572ac0d2c0220");
    return usermatch && passmatch;
};


if (!this.username) {
    error('Username', 'Username is required.');
} else if (!this.password) {
    error('Password', 'Password is required.');
} else if (!match()) {
    error('Username/Password', "We didn't recognize that password combination, please try again.");
}



hide('username');
hide('password');
hide('id');

var client = dpd.client.get('241fc5ddbdc058dc', function(client) {
    self.user = client.user;
    self.sites = client.sites;
    self.zones = client.zones;
});



