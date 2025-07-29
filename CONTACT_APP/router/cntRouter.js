const {Router}=require('express')
const{CreateContact, allContacts, singleContacts, dropContacts, updateContacts}=require('../controller/cntController')
let router=Router()

router.post('/contact',CreateContact)

router.get('/contact',allContacts)

router.get('/contact/:id',singleContacts)

router.delete('/contact/:id',dropContacts)

router.patch('/contact/:id',updateContacts)

module.exports=router;