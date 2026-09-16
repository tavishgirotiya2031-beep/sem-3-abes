// const fs = require('fs');

// // --- SYNCHRONOUS OPERATIONS ---
// // 1. Initial write
// fs.writeFileSync('sribendu.txt', 'Hello my name is sribendu', 'utf-8');
// const initialContent = fs.readFileSync('sribendu.txt', 'utf-8');
// console.log('File is written successfully');

// fs.appendFileSync('sribendu.txt', ' and I am learning Node.js', 'utf-8');
// const updatedContent = fs.readFileSync('sribendu.txt', 'utf-8');
// console.log('3. UPDATE:', updatedContent);


// console.log('Initial read was:', initialContent);

// if (fs.existsSync('sribendu.txt')) {
//   console.log('file exist');
// } else {
//   console.log('file not');
// }

// --- ASYNCHRONOUS OPERATIONS ---
// Overwrite and read asynchronously in sequence
fs.writeFile('sribendu.txt', 'welcome to the full stack development', (err) => {
  if (err) {
    console.log('error creating file', err);
    return;
  }
  console.log('file created successfully');

  fs.readFile('sribendu.txt', 'utf-8', (err, data) => {
    if (err) {
      console.log('error reading file', err);
      return;
    }
    console.log('file content:', data);
  });
});
