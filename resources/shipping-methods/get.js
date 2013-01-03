
var thisMethod = this;
dpd.shippingservices.get({method: thisMethod.id}, function(services) {
    
    services.forEach(function(s){
        dpd.shippingrates.get({service: s.id}, function(rates){
            s.rates = rates;
        });
    });
    thisMethod.services = services;
   
}); 
