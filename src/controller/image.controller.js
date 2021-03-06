const upload = require("../middleware/midde");
const MongoClient = require("mongodb").MongoClient;
const GridFSBucket = require("mongodb").GridFSBucket;
const url = "mongodb://localhost:27017/"
const baseUrl = "http://localhost:8080/files/";
const mongoClient = new MongoClient(url);
     exports.uploadFiles = async (req, res) => {
        try {
            await upload(req, res);
            console.log(req.file);
            if (req.file == undefined) {
                return res.send({
                    message: "You must select a file.",
                });
            }
            return res.send({
                message: "File has been uploaded.",
            });
        } catch (error) {
            console.log(error);
            return res.send({
                message: "Error when trying upload image: ${error}",
            });
        }
    };
    
exports.getListFiles = async (req, res) => {
    try {
        const database = mongoClient.db(process.env.database);
        const images = database.collection(process.env.imgBucket + ".chunks");
        const cursor =  await images.find({});
        let fileInfos = [];
        await cursor.forEach((doc) => {
            fileInfos.push({
                data: doc.data
            });
        });

        return res.status(200).send(fileInfos);
    } catch (error) {
        return res.status(500).send({
            message: error.message,
        });
    }
};