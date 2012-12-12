hide('username');
hide('password');

this.user = {
id: 3,
name: "Bill Helper",
userName: "SweetCode@fakemail.none",
token: "9B79C424A495034E34F20079C51C34E42ADC475F6430A68BC6F95DC3C24D9EBC78A43BCBCB2108974C6B4C305BFE1BACE98A78E6F3648A4BEDF8C496C70C137653A6576570BCA2BE1CA0C393461C07E0D1E13263C245557D8C027B6C983DE300CD54B4B851FFA2FBA5E1DEB587F83B13400C8A63F55DDF11CBFC10DCC77B35789D8A4D5AD10E14578A66628E8F749773E7CFA9647E7FB69BD09D9681D6B8B2CB5EC80249C930E72BE842959BA41DFCF5"
};

this.sites = [
    {
        id: 1,
        name: "Frank Jr. Fast Motors",
        url: "www.FastMo.none",
        perm: {
        "api/pages": 31
    }
    },
    {
    id: 3,
    name: "Out door adventures",
    url: "www.OutdoorAdventures.none",
    perm: {
    "api/templates": 31,
    "api/pages": 31
    }
    }
];

this.zones = [
{
url: "api/templates",
title: "some template title",
desc: "some template desc",
actions: {
"list": 1,
"add": 2,
"update": 4,
"delete": 8
}
},
{
url: "api/pages",
title: "some page title",
desc: "some page desc",
actions: {
read: 1,
insert: 2,
edit: 4,
remove: 8
}
}
];