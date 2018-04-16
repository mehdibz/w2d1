var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {

  var TotalData; 

  var requestOptions = {
    host: options.host,
    path: options.path
  };

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
  
    response.on('data', function (data) {
      
        TotalData += data;
    });
    
    response.on('end', function() {
      
      console.log(TotalData);

    });
  });

}


getAndPrintHTML(requestOptions);