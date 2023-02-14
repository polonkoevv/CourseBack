const { Router } = require('express')
const router = Router()
const data = require('../public/sources/persons.json')


router.post('/actors/:id', (req,res) =>{
    if(data[req.params.id]){
        var path = '/actors/' + String(req.params.id)
        res.redirect(path)
    }
    else{
        res.redirect('/')
    }
})

router.get('/actors/:id', (req, res) =>{
    console.log("REDIRECTED to actor number " + req.params.id)
    // console.log(data[keys])
    res.render('actor', data[req.params.id])
})

module.exports = router;