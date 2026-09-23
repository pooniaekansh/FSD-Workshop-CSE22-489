import fs from "node:fs/promises";

const filePath = "userData.txt";

async function createFile(content) {
    try {
        await fs.writeFile(filePath, content, "utf8");
        console.log("File created successfully!");
    } catch (err) {
        console.error("Error creating file:", err);
    }
}
async function readFile() {
    try {
        const data = await fs.readFile(filePath, "utf8");
        console.log("File Content:\n", data);
        return data;
    } catch (err) {
        if (err.code === "ENOENT") {
            console.log("File does not exist yet.");
        } else {
            console.error("Error reading file:", err);
        }
    }
}

async function updateFile(content) {
    try {
        await fs.appendFile(filePath, "\n" + content, "utf8");
        console.log("File updated successfully!");
    } catch (err) {
        console.error("Error updating file:", err);
    }
}

async function deleteFile() {
    try {
        await fs.unlink(filePath);
        console.log("File deleted successfully!");
    } catch (err) {
        if (err.code === "ENOENT") {
            console.log("File does not exist.");
        } else {
            console.error("Error deleting file:", err);
        }
    }
}

async function runDemo() {
    await createFile("Hello World! This is the first line.");
    await readFile();

    await updateFile("This line was appended later.");
    await readFile();

    await deleteFile();
}

runDemo();