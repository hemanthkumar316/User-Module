const express = require('express')
const router = express.Router()
const User = require('../Models/modelschema')
/* post api */
router.post('/user', async (req, res) => {
  try {
    const newuser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      number: req.body.number,
      state: req.body.state,
      city: req.body.city,
      checkbox: req.body.checkbox
    })
    console.log(newuser)
    const saveuser = await newuser.save()
    res.status(200).json({ result: 'user is added', saveuser })
  }
  catch (err) {
    res.status(500).json(err)
    console.log(err)
  }
})
/* get api */

router.get('/getusers', async (req, res) => {
  try {
    const alldata = User.find();
    return res.json(await alldata)
  }
  catch (err) {
    res.status(500).json(err)
    console.log(err)
  }
})
/* get single api */
router.get('/user/:id', async (req, res) => {
  try {
    let userId = req.params.id;
    let user = await User.findById(userId);
    res.status(200).json(user);
  }
  catch (err) {
    console.error(err);
    response.status(500).json({
      msg: err.message
    });
  }
});
/* delete api */
router.delete("/user/:id", async (req, res) => {
  try {
    let userId = req.params.id
    user = await User.findByIdAndDelete(userId)
    res.status(200).json({ result: "user is  deleted " })
  }
  catch (err) {
    console.log(err)
    return res.status(500).json(err)
  }
})
/*edit api  */
router.put('/user/:id', async (req, res) => {
  let userId = req.params.id;
  try {
    let updateduser = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      number: req.body.number,
      state: req.body.state,
      city: req.body.city,
      checkbox: req.body.checkbox

    };
    //  check todo is exists or not
    let user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        msg: 'user not Found'
      });
    }
    // update
    user = await User.findByIdAndUpdate(userId, {
      $set: updateduser
    }, { new: true });
    res.status(200).json({
      result: 'user is Updated',
      user: user
    });
  }
  catch (err) {
    console.error(err);
    res.status(500).json({
      msg: err.message
    });
  }
});
module.exports = router