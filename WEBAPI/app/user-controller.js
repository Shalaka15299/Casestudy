const db=require('../db/models');
const User=db.User;

exports.findAll=(req,resp)=>{
    User.findAll()
    .then(data=>resp.json(data))
    .catch(err=>{
        resp.status(500)
        .send({message:err.message || `Something went wrong`})
    })
};

exports.findByPk=(req,resp)=>{
    const id=parseInt(req.params.id);
    User.findByPk(id)
    .then(data=>resp.json(data))
    .catch(err=>{
        resp.status(500)
        .send({message:err.message || `Something went wrong` })
    })
};

// //3. insert
exports.createUser=(req,resp)=>{
    if(!req.body.userName){
        resp.status(400)
        .send({message:"User name must be provided"});
    }
    if(!req.body.userEmail){
        resp.status(500)
        .send({message:"Email name must be provided"});
    }
    if(!req.body.Phone){
        resp.status(400)
        .send({message:"Phone number must be provided"});
    }
    if(!req.body.password){
        resp.status(500)
        .send({message:"password must be provided"});
    }
    const newUser={
        userName:req.body.userName,
        userEmail:req.body.userEmail,
        Phone:req.body.Phone,
        password:req.body.password,
        createdAt:req.body.createdAt,
        updatedAt:req.body.updatedAt
    }

    User.create(newUser)
    .then(data=>{resp.send(data);})
    .catch(err=>{
        resp.status(500)
        .send({message:err.message})
    })
};

// //4. update
exports.updateUser=(req,resp)=>{
    const u_id=parseInt(req.params.id);
    User.update(req.body,{where:{id:u_id}})
    .then(num=>{
        if(num==1){
            resp.send({message:`User with id ${id} is updates successfully.`});
        }else{
            resp.send({message:`Cannot update User with id=${id}. may be User not found or req.body is empty`});
        }
    })
    .catch((err)=>{
        resp.status(500)
        .send({message:err.message || "some error while updating data"})
    })
};

// //5. delete
exports.deleteUser=(req,resp)=>{
    const u_id =parseInt(req.body.params);
    User.destroy({where:{id:u_id}})
    .then(num =>{
        if(num==1){
            resp.send({message:`User with id ${id} is deleted successfully.`});
        }else{
            resp.send({message:`Cannot delete User with id=${id}.May be User not found`});
        }
    }

    )
    .catch((err)=>{
        resp.status(500)
        .send({message:err.message || "Could not delete User with id=" +id})
    })
};
