const fs = require('fs').promises;

async function manageFile() {
  try {
    // 1. Pehle file create aur write karein
    await fs.writeFile("sribendu.txt", "hello students");
    console.log("1. File created and data written successfully");

    // 2. Fir file ke aage naya data append karein
    await fs.appendFile("sribendu.txt", "\nSemester: 3");
    console.log("2. Data appended successfully");

    // 3. File content read karein
    const data = await fs.readFile("sribendu.txt", "utf-8");
    console.log("3. File Content:\n" + data);
  async function renameFile() {
  try {
    // sribendu.txt ka naam badal kar hello.txt karein
    await fs.rename("sribendu.txt", "hello.txt");
    console.log("File renamed successfully from sribendu.txt to hello.txt");
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log("Error: sribendu.txt file nahi mili!");
    } else {
      console.log("Rename error:", error.message);
    }
  }
}

// Function call karein
renameFile();

    // 4. ggs.txt file ko delete karein
    await fs.unlink("ggs.txt");
    console.log("4. ggs.txt file deleted successfully");

  } catch (error) {
    // Agar file exist nahi karti toh ENOENT error aayega
    if (error.code === 'ENOENT') {
      console.log("Error: ggs.txt file nahi mili!");
    } else {
      console.log("Error handling file:", error.message);
    }
  }
}

manageFile();