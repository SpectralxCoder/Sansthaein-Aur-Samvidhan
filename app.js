const express = require("express");
const path = require("path");
const app = express();
const userModel = require("./user"); // Ensure the relative path is correct

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Route to render the login page
app.get("/login", (req, res) => {
    res.render("index");
});

// Route to render the signup page
app.get("/signup", (req, res) => {
    res.render("signup"); // Ensure this matches the EJS filename
});

// Route to handle user creation
app.post("/signup/create", async (req, res) => {
    const { Username, email, password } = req.body;

    try {
        let createdUser = await userModel.create({
            Username,
            email,
            password
        });
        res.status(201).json(createdUser); // Send JSON response with status code 201
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Error creating user: " + error.message); // Send error message
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
