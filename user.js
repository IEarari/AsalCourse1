const express = require('express');
const router = express.Router();

let users = [
    {id:1, name:'Saif'},
    {id:2, name:'Ibraheem'}
]

router.get('/', (req, res)=>{
res.json(users);
});

router.get('/:id', (req,res)=>{
const userId = parseInt(req.params.id, 10);
const user = users.find(u => u.id === userId);
if(user){
    res.json(user);
}else{
    res.status(404).json({error:'User Wasn\'t Found'});
}
});

router.delete('/users/:id',(req,res)=>{
const userId = parseInt(req.params.id, 10);
users = users.filter(u => u.id !== userId);
res.json({'message': 'User deleted Successfully !'});
});

router.put('/:id',(req,res) => {
const user = users.find(u => u.id === parseInt(req.params.id));
if(!user){
    res.status(404);
    res.json({'msg': 'User doesn\'t Exsists !'});
}
user.name = req.body;
res.json(users);
});
module.exports = router;