var https = require('https');

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {

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
      
      callback(TotalData);
    });
  });

}

getHTML(requestOptions, printHTML);