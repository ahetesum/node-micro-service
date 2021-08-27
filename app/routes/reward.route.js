module.exports = app => {
    const reward = require("../controllers/reward.controller");

    var router = require("express").Router();

    router.get("/", reward.findAll);

    router.get("/getAllBrandCategory", reward.getAllBrandCategory);
    

    router.get("/getBrandCategory/:id", reward.getBrandCategory);

    app.use('/api/reward', router);
};