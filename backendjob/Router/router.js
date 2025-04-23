var express=require('express')
var router=express.Router()
var jobController=require('../Controller/jobController')
router.post('/job/register',jobController.registerjob)

module.exports=router;