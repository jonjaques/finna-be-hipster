if (!this.createdOn) {
    var timestamp = (new Date()).valueOf();
    this.createdOn = timestamp;
    this.lastModified = timestamp;
}

if (!this.title) {
    this.title = this.name;
}