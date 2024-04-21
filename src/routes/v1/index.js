const express=require('express')

const router=express.Router()

const {homecontroller}=require('../../controller/homecontroller')

router.get('/home',homecontroller)
router.post('/home',homecontroller)

module.exports={
    v1router:router
}