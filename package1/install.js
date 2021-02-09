const fs = require("fs");
const tempFile = process.env.INIT_CWD + "/temp.txt";
if (fs.existsSync(tempFile)) {
    // Print contents of temp file generated by parent package
    console.log(fs.readFileSync(tempFile, "utf-8"));
    fs.unlinkSync(tempFile);
} else {
    // Fail if installed as standalone package
    process.exit(1);
}
