const {rewards} = require("../helpers/seed.helper");
const {allBrandCategoryQuery} = require("../helpers/reward.query.helper");
const {dbPool} = require("../../config/db.config");

module.exports.getAllBrandCategory = async()=> { 
    return new Promise(resolve => {
        dbPool.connect()
        .then((client) => {
            client.query(allBrandCategoryQuery)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    console.error(err);
                });
        })
        .catch(err => {
            console.error(err);
            resolve({mesage:"Error While Fetching Data"})
        })
    });
};

module.exports.getBrandCategory = (id)=> { 
    return new Promise(resolve => {
        dbPool.connect()
        .then((client) => {
            client.query(allBrandCategoryQuery)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    console.error(err);
                });
        })
        .catch(err => {
            console.error(err);
            resolve({mesage:"Error While Fetching Data"})
        })
    });
};