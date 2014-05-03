var server = require('webserver').create();
var utils = require('utils');

casper.test.begin('The heading exists', 1, function suite(test) {

    casper.on('remote.message', function(msg) {
        console.log(msg);
    });

    casper.start('http://127.0.0.1:8000/test.html', function() {
        test.assertTextExists('Samples');
    }).run(function() {
        test.done();
    });
});
