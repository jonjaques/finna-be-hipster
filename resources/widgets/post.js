if (!this.createdOn || this.createdOn === 0) {
    var timestamp = (new Date()).valueOf();
    this.createdOn = timestamp;
    this.lastModified = timestamp;
}