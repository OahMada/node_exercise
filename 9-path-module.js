var path = require("path");

console.log(path.sep);

var filePath = path.join("/content", "sobfolder", "text.txt");
console.log(filePath); //string

var base = path.basename(filePath);
console.log(base);

var absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);
