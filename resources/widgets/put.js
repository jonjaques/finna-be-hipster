if (this.createdOn === 0 || this.lastModified === 0) {
    var timestamp = (new Date()).valueOf();
    this.createdOn = timestamp;
    this.lastModified = timestamp;
}
this.lastModified = (new Date()).valueOf();
