const express = require('express');
const router = express.Router();
const members = require('../../Members');


router.get('/', (req, res)=> res.json(members));

router.get('/:id', (req, res)=>{
    //res.send(req.params.id);

    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found){
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }
    else{
        res.status(400).json({msg: 'not found'});
    }
} );

router.post('/', (req, res)=>{
    const newmem = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }
    if (!newmem.name || !newmem.email){
        return res.status(400).json({msg: 'include name and email'});
    }

    members.push(newmem);
    res.json(newmem);
});

router.put('/:id', (req, res)=>{
    //res.send(req.params.id);

    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found){
        const updMember = req.body;
        members.forEach(member =>{
            if(member.id === parseInt(req.params.id)){
                member.name = req.body.name;
                member.email = req.body.email;

                res.json({msg: 'Member Updated', member});
            }
        });
    }
    else{
        res.status(400).json({msg: 'not found'});
    }
} );

router.delete('/:id', (req, res)=>{
    //res.send(req.params.id);

    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found){
    res.json({msg: 'Deleted successfully',members: members.filter(member => 
        member.id !== parseInt(req.params.id))});
    }
    else{
        res.status(400).json({msg: 'not found'});
    }
} );


module.exports = router;
