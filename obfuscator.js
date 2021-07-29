const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');

const obfuscate = (fileName) => {
   fs.readFile(fileName,'utf8', function(err, data) {
      if (err) {console.log(err)}
      let obfuscationResult = JavaScriptObfuscator.obfuscate(data);
      let uglyCode = obfuscationResult.getObfuscatedCode();
      fs.writeFile('ugly.js', uglyCode, function (err) {
         if (err) throw err;
         console.log(`${fileName} has been obfuscated at ugly.js`);
      });
   })
};

module.exports = { obfuscate };
