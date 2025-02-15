const fs = require("fs");

// Write to file (Asynchronous)
fs.writeFile("welcome.txt", "Hello Node", (err) => {
    if (err) {
        console.error("Error writing file:", err);
        return;
    }
    console.log("File written successfully");

    // Read from file (Asynchronous)
    fs.readFile("welcome.txt", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        console.log("File content:", data);
    });
});
