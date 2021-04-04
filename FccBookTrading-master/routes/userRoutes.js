const mongoose=require('mongoose')
const requireLogin =require ('../middlewares/requireLogin')
const User=mongoose.model('users')


module.exports = app => {


      app.get('/api/profile/:id',requireLogin,async (req,res)=>{
        const query={_id:req.params.id}
        const userProfile =await User.findOne(query)
        res.send(userProfile)
      })

    app.post('/api/profile/:id',requireLogin, async (req, res) => {
        const query = { _id: req.params.id }
        const { firstName, lastName, phone, email, city, country, state } = req.body
        
        User.updateOne(query,
             { $set: { firstName, lastName, phone, email,
                 "address.country": country, "address.city": city, "address.state": state,firstLogin:false } },
                  (err, result) => {
            if (err) {
                return console.log(err);
            }
            res.sendStatus(200);
        })

    })
}

