const mongoose = require('mongoose');

const uri = 'mongodb+srv://user_c214:LQbM3cK8nFwocN4J@cluster0.zjmah4e.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const UserSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    nome: String,
    senha: String,
});

const MovieModel = mongoose.model('MovieModel', UserSchema);

module.exports = {
    MovieModel,
};