#!/usr/bin/env node

// Grab args
const [,, ...args] = process.argv;

// Error
if (args.length !== 2) {
  console.error('Usage: append-top file-to-append.txt "This is a string on top"');
  return false;
}

var fs = require('fs');

// Get args
var fileToAppend = args[0];
var lineToAdd = args[1];

// Check file existence
if (!fs.existsSync(fileToAppend)) {
  console.error('File does not exsit.');
  return false;
}

// Read file into array
var fileData = fs.readFileSync(fileToAppend).toString().split("\n");

// Add line to the top of the array
fileData.splice(0, 0, lineToAdd);

// Conver array to string, stitch with new line character
var fileLines = fileData.join("\n");

// Write back to the file
fs.writeFile(fileToAppend, fileLines, function(err) {
  if (err) {
    return err;
  }

  console.info('Success!');
});
