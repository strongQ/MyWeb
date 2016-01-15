var xls_json = require('xls-to-json')

xls_json({
  input: __dirname + '/testtrim.xls',
  output: __dirname + '/test.json'
}, function(err, result) {

  if(err) {
    console.error(err);
  } else {
    console.log(result);
  }

});
