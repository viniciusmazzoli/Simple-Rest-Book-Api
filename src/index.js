const express= require('express')
//Banco de Dados Falso
let books=[]
//Criar o APP
 const app= express()

 app.use(express.json());

 app.post('/books', (req,res)=> {
    const {id ,tittle, author, publishedAt} = req.body;
    const book ={id, tittle, author, publishedAt};
    books.push(book);
    return res.status(201).json(book);
 })

 app.get('/books', (req,res) =>{
    const allBooks = books;
    return res.status(200).json(allBooks);
 });


 app.get('/books/:book_id', (req,res)=>{
    const {book_id} = req.params;
    const book = books.find((book) => book.id === book_id);
    if(!book) res.status(404).json("not found")
    return res.status(200).json(book);
 });

 app.delete('/books/:book_id', (req,res)=>{
    const {book_id}= req.params
    const filteredBooks = books.filter(book =>book.id !== book_id)
    books = filteredBooks;
    return res.status(204).json("deleted");
 });

 app.patch('/books/:book_id',(req,res) =>{
    const {author,tittle,publishedAt} = req.body;
    const {book_id} = req.params;
    const book = books.find((book) => book.id === book_id);
    book.id = book.id;
    book.tittle = tittle ? tittle :book.tittle;
    book.author = author ? author :book.author;
    book.publishedAt = publishedAt ? publishedAt :book.publishedAt;
    return res.status(200).json(book);
 });

//Mandar o Servidor Rodar
app.listen(3000, () => console.log("Servidor esta rodando"));