const mongoose = require('mongoose');

const uri = `mongodb+srv://user_c214:admin@cluster0.zjmah4e.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
});

const { Schema } = mongoose;

const CarSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    modelo: {
        type: String,
        unique: true,
    },
    fabricante: String,
    placa: String,
    cor: String,
});

const CarModel = mongoose.model('CarModel', CarSchema);

module.exports = {
    CarModel,
};
