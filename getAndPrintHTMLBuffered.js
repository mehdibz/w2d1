var https = require('https');


function getAndPrintHTMLChunks () {
  var TotalData; 
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
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

getAndPrintHTMLChunks();