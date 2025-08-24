const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;
require('dotenv').config();
const url=process.env.MONGO_URI;
let _db;

const initDB=callback=>
{
    if(_db)
    {
        return callback(null,_db);
    }

    MongoClient.connect(url)
    .then(client=>
    {
        _db=client.db('vastra_seva');
        callback(null,_db);
    })
    .catch(err=>
    {
        callback(err);

    })
};


const getDB=()=>
{
    if(!_db)
    {
        throw Error("something went wrong");
    }
    return _db;

};


module.exports={initDB,getDB};