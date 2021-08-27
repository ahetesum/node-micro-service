const { getAllBrandCategory,getBrandCategory } = require('../services/reward.service');

// All request and response Logic will be here. 
//Dont write any business logic in controller level


exports.getAllBrandCategory = async(req, res) => {

    try
    {
        const rewards= await  getAllBrandCategory();
        res.status(200).send({
            rewards: rewards
        });
    }
    catch(err)
    {
        res.status(400).send({
            message: 'Cant process request'
        });
    }



};

exports.getBrandCategory = (req, res) => {

    const id = req.params.id;
    if(id==0)
    {
        res.status(200).send({
            message: "Id must not be zero"
        });
    }

    res.status(200).send({
        rewards: getBrandCategory(id)
    });

};

exports.create = (req, res) => {

};

exports.findAll = (req, res) => {

};

exports.findOne = (req, res) => {
 
};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};


