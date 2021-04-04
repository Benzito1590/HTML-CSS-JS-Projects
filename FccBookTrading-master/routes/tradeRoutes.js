const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const Trade = mongoose.model('trades')


module.exports = app => {
  app.post('/api/tradeRequest', requireLogin,async (req, res) => {

    const { senderID, senderBookTitle, receiverID, receiverBookTitle } = req.body

    const trade = new Trade({
      "sender._user": senderID,
      "sender.bookTitle": senderBookTitle.bookTitle,
      "receiver._user": receiverID,
      "receiver.bookTitle": receiverBookTitle,
       status: "Pending"
    })
    await trade.save()
    res.send({})
  })

  app.post('/api/tradeResponse/:id',requireLogin, async (req, res) => {
    const query = { _id: req.params.id }

    Trade.updateOne(query,
      { $set: {"status":req.body.answer } },
           (err, result) => {
     if (err) {
         return console.log(err);
     }
     res.sendStatus(200);
 })

  })

  app.get('/api/trade/received',requireLogin, async (req, res) => {


    const trade=await Trade.find({
      "receiver._user":req.user.id

    })

    res.send(trade)
  })
  app.get('/api/trade/sent',requireLogin, async (req, res) => {


    const trade = await Trade.find({
      "sender._user": req.user.id

    })

    res.send(trade)
  })
}

