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
        const jsPlaylist = new Playlist({
            name: "javascript js",
            ctype: "front end",
            videos: 2,
            active: true,
        })
        const laravelPlaylist = new Playlist({
            name: "lravel js",
            ctype: "backend",
            videos: 10,
            active: true,
        })
        const result =await  Playlist.insertMany([reactPlaylist,jsPlaylist, laravelPlaylist ])
        console.log(result)

    }catch{
        (error)=> console.log(error)
    }
}

// createDocument()
// we can all of mongo command with mongoose 
const getDocument = async  () => {
    try{
        const playlist = await Playlist.find({ctype:"front end"}, {name:1}).limit(1)
        console.log(playlist)
    }catch{
        err => console.log(err)
    }
}
getDocument()