import { EventEmitter } from "express";
const app = express();

app.use(express.json());

let student = {
    id: 1,
    name: "Ekansh",
    rollno: 4,
    email: "ekanshpoonia@gmail.com",
    course: "B.Tech"
};

// GET - Display
app.get("/student", (req, res) => {
    res.send(student);
});

// POST - insert
app.post("/student", (req, res) => {
    student = { ...student, ...req.body };
    res.send("Student added successfully");
});

// PUT - Update
app.put("/student", (req, res) => {
    student = { ...student, ...req.body };
    res.send("Student updated successfully");
});

// DELETE - Delete
app.delete("/student", (req, res) => {
    student = null;
    res.send("Student deleted successfully");
});

app.listen(4000, () => {
    console.log("Server running at http://localhost:4000");
});
