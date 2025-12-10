const express = require("express")
const pool = require("./db")
const app = express()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

app.use(express.static("public"))
app.use(express.json())

app.get("/", (req, res) =>{
    res.send("API РАБОТАЕТ")
})



app.post("/auth/register", async(req,res) =>{
    try{
        const {email, password} = req.body

        const hashedPassword = await bcrypt.hash(password, 10)

        const result = await pool.query(`
            INSERT INTO users (email, password) 
            VALUES ($1,$2) RETURNING id,email
            `, [email, hashedPassword])
            
            const newUser = result.rows[0]
            res.status(201).json(newUser)
    }
    catch(error){
        console.error("Register error", error)
        res.status(500).json({message: "Server error"})
    }
})

app.post("/auth/login", async(req,res) =>{
    try{
        const {email, password} = req.body;

        const result = await pool.query(
            `SELECT * FROM users WHERE email = $1`, [email]
        )
        
        if(result.rows.length === 0) {
            return res.status(400).json({message: "User not found"})
        }
        
        const user = result.rows[0]

        const isValid = await bcrypt.compare(password,user.password)

        if(!isValid){
            return res.status(400).json({message: "Wrong password"})
        }

        const token = jwt.sign(
            {id: user.id, email: user.email},
            "SUPER_SECRET_KEY",
            {expiresIn: "1h"}
        )
        res.json({token})
    }
    catch(error){
        console.error("Login error: ", error);
        res.status(500).json({message: "Server error"})
    }
})

function authMiddleware(req, res, next){
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({message: "No token"})
    }
    const token = authHeader.split(" ")[1]

    try{
        const playload = jwt.verify(token, "SUPER_SECRET_KEY");
        req.user = playload
        next()
    }
    catch(error){
        return res.status(401).json({message: "Invalid token"})
    }

}

app.get("/profile", authMiddleware, (req,res) =>{
    res.json({
        message: "Private data",
        user: req.user
    })
})





app.get("/books", async(req,res) =>{
    try{
        const result = await pool.query("SELECT * FROM books");
        res.json(result.rows)
    }
    catch(error){
        console.error(error)
        res.status(500).json({message: "Server error"})
    }
});

app.get("/books/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);

        const result = await pool.query(
            "SELECT * FROM books WHERE id = $1",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json(result.rows[0]);
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});


app.post("/books", async(req, res) =>{
    try{
        const {title, price} = req.body
        const result = await pool.query(`
                INSERT INTO books(title, price) VALUES ($1, $2) RETURNING *
            `, [title, price]);

            res.status(201).json(result.rows[0]);  
         }
         catch(error){
            res.status(500).json({message: "SERVER ERROR"})
         }
})

app.listen(4200, () =>{
    console.log("SERVER IS RUNNING")
})