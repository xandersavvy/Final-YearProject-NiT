const mongoose = require('mongoose');

const db_uri = `mongodb://localhost:27017/finalYear`



module.exports = async () => {
    try {
        await mongoose.connect(db_uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

