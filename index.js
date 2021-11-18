const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/dentrino")
    .then(() => console.log("connection successful"))
    .catch((error) => {
        console.error(error);
    })


// schema defines the structure of a document
const playListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    active: Boolean,
    data: {
        type: Date,
        default: Date.now
    }
})

const Playlist = new mongoose.model('Playlist', playListSchema)

const createDocument = async () => {
    try {
        const reactPlaylist = new Playlist({
            name: "react js",
            ctype: "front end",
            videos: 20,
            active: true,
        })
        
        const result =await  reactPlaylist.save()
        console.log(result)

    }catch{
        (error)=> console.log(error)
    }
}

createDocument()