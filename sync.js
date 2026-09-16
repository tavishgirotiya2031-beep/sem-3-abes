const fs = require('fs');
fs.writeFileSync('tavish.txt', 'Hello my name is tavish', 'utf-8');
const initialContent = fs.readFileSync('tavish.txt', 'utf-8');
console.log('File is written successfully');

fs.appendFileSync('tavish.txt', ' and I am learning Node.js', 'utf-8');
const updatedContent = fs.readFileSync('tavish.txt', 'utf-8');
console.log('3. UPDATE:', updatedContent);


console.log('Initial read was:', initialContent);

if (fs.existsSync('tavish.txt')) {
  console.log('file exist');
} else {
  console.log('file not');
}

fs.writeFile('tavish.txt', 'welcome to the full stack development', (err) => {
  if (err) {
    console.log('error creating file', err);
    return;
  }
  console.log('file created successfully');

  fs.readFile('tavish.txt', 'utf-8', (err, data) => {
    if (err) {
      console.log('error reading file', err);
      return;
    }
    console.log('file content:', data);
  });
});
