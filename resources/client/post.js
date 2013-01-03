var self = this;

errorIf(!this.username, 'Username', 'Username is required.');
errorIf(!this.password, 'Password', 'Password is required.');

if (this.password && this.username) {
    
    dpd.users.get({ 
      username: self.username 
    }, 
    function(results, error) {
        self.user = results[0];
        errorUnless(self.user && self.password === "7110eda4d09e062aa5e4a390b0a572ac0d2c0220", 
            'Username/Password', "We don't recognize that username/password combo. Please try again.");
    });
    
    dpd.sites.get(function(results) {
        if (self.username === 'foo@bar.com') {
            self.sites = [results[0]];
        } else {
            self.sites = results;
        }
    });
    
    dpd.zones.get(function(results) {
      self.zones = results;
    });

}