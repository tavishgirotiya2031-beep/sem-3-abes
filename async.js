const fs = require('fs');

fs.writeFile('tavish.txt', 'Welcome to the Full Stack Development', (err) => {
  if (err) {
    console.log('Error writing file:', err);
    return;
  }
  console.log('1. File created successfully');

  fs.appendFile('sribendu.txt', '\nSemester: 3', (err) => {
    if (err) {
      console.log('Error appending file:', err);
      return;
    }
    console.log('2. Data appended successfully');

    fs.readFile('sribendu.txt', 'utf-8', (err, data) => {
      if (err) {
        console.log('Error reading file:', err);
        return;
      }
      console.log('3. Final Updated Content:\n' + data);
    });
  });
});
