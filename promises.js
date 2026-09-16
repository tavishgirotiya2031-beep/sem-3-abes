const fs = require('fs').promises;

async function manageFile() {
  try {
    await fs.writeFile("tavish.txt", "hello students");
    console.log("1. File created and data written successfully");

    await fs.appendFile("tavish.txt", "\nSemester: 3");
    console.log("2. Data appended successfully");

    const data = await fs.readFile("tavish.txt", "utf-8");
    console.log("3. File Content:\n" + data);
  async function renameFile() {
  try {
    await fs.rename("tavish.txt", "hello.txt");
    console.log("File renamed successfully from sribendu.txt to hello.txt");
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log("Error: tavish.txt file nahi mili!");
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
