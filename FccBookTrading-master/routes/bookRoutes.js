const mongoose=require('mongoose')
const requireLogin =require ('../middlewares/requireLogin')
const Book=mongoose.model('books')


module.exports = app => {
    app.get('/api/books/:id',requireLogin,async (req,res)=>{
        const books=await Book.find({
          _user:req.params.id
        })
      
        
        res.send(books)
      })
      app.get('/api/mybooks',requireLogin,async (req,res)=>{

        const books=await Book.find({
          _user:req.user.id

        })
        
        res.send(books)
        
      })
      app.get('/api/books',requireLogin,async (req,res)=>{
        const books=await Book.find({
        })
        
        res.send(books)
      })

      app.get('/api/book/:id',requireLogin,async (req,res)=>{
        const book=await Book.find({
          _id:req.params.id
        })
      
        
        res.send(book)
      })
    app.post('/api/books/add/:id',requireLogin, async (req, res) => {
      
        const { title,pic,description } = req.body
        
        const book= new Book ({
          title,
          pic,
          description,
          added:Date.now(),
          _user:req.params.id
        })
        await book.save()
        res.send({})
    })

    app.delete('/api/book/:id',requireLogin,async (req,res)=>{


      const query ={_id:req.params.id}
      await Book.deleteOne(query,(err,response)=>{
      if(err){
          return console.log(err);
          
      }
      res.sendStatus(200);
    });
    })

    

  }

