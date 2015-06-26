var fs = require('fs');
var promise = require('bluebird');

promise.promisifyAll(fs);

fs.readFile('./data3.json', 'utf-8', function (err, data) {
    
    if (err) {
        console.error('unable to read file');
    }
    else {
        
        try {
    
    data = JSON.parse(data);
    console.log(data.name);
        }
        catch (e) {
            console.error('invalid json file yada');
        }
    }
});



fs.readFileAsync('./data1.json')
    .then(JSON.parse)
    .then(function(val) {
        console.log(val);
})
    .catch(SyntaxError, function(e) {
        console.error("invalid json in file");
})
    .catch(function(e) {
           console.error("unable to read it!");
           });
    