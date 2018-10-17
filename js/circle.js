console.log("connected");
// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser.');
}

var dirFile = ".";
var file = new File([""],dirFile);
file.open("r");
var str = "";
while (!file.eof) {
	// read each line of text
	str += file.readln() + "\n";
}
file.close();
console.log(str);