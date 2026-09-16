const fs = require('fs');

// 1. Pehle file create/write karein
fs.writeFile('sribendu.txt', 'welcome to the full stack development', (err) => {
  if (err) {
    console.log('Error writing file:', err);
    return;
  }
  console.log('1. File created successfully');

  // 2. Write complete hone ke baad append karein
  fs.appendFile('sribendu.txt', '\nSemester: 3', (err) => {
    if (err) {
      console.log('Error appending file:', err);
      return;
    }
    console.log('2. Data appended successfully');

    // 3. Append complete hone ke baad final updated file padhein
    fs.readFile('sribendu.txt', 'utf-8', (err, data) => {
      if (err) {
        console.log('Error reading file:', err);
        return;
      }
      console.log('3. Final Updated Content:\n' + data);
    });
  });
});