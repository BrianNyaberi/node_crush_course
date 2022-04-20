const path = require('path');

// Getting the base file name
console.log(path.basename(__filename));
console.log(__filename);

// Getting directory name
console.log(path.dirname(__dirname));

// Getting the file extension
console.log(path.extname(__filename));

// Creating path object
console.log(path.parse(__filename));
