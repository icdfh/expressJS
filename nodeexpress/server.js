const express = require("express")
const pool = require("./db")
const app = express()

app.use(express.json())

app.get("/", (req, res) =>{
    res.send("API РАБОТАЕТ")
})

// let books = [
//     {id: 1, title: "Atomic Heart", price:5000},
//     {id: 2, title: "Shantaram", price:12990},
//     {id: 3, title: "JS basics", price:21990}
// ]

// app.get("/books", (req,res) => {
//     res.json(books)
// })

// app.get("/books/:id", (req,res) =>{
//     const id = Number(req.params.id)

//     const book = books.find(b => b.id === id)

//     if(!book){
//     return res.status(404).json({message: "BOOK NOT FOUND"})
//     }
//     res.json(book)
// })

// app.post("/books", (req,res) =>{
//     const {title, price} = req.body

//     const newBook = {
//         id: Date.now(),
//         title,
//         price
//     }
//     books.push(newBook)

//     res.status(201).json(newBook)

// })

// app.put("/books/:id", (req,res) =>{
//     const id = Number(req.params.id)
//     const {title,price} = req.body

//     const index = books.findIndex(b => b.id === id)

//     if(index === -1)
//     return res.status(404).json({message: "Book not found"})

//     books[index] = {id, title, price}
//     res.json(books[index])
// })

// app.delete("/books/:id", (req,res) =>{
//     const id = Number(req.params.id)
//     const before = books.length

//     books = books.filter(b => b.id !== id)

//     if(books.length === before){
//     return res.status(404).json({message:"Book not found"})
//     }
//     res.json({message: "Book was deleted"})
// })





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