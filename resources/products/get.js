dpd.variants.get( { productid: this.id }, function (v) {
    this.variants = [];
    this.variants.push(v);
});