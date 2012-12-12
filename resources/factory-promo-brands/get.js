dpd.factorypromotions.get( { brand: this.brandid }, function (promo) {
    
    this.promotions = promo;
    
});

dpd.brands.get( { id: this.brandid } , function (brand) {

    this.brand = brand.name;

});
