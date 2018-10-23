var bodyParser = require("body-parser"),
mongoose       = require("mongoose"),
express        = require("express"),
app            = express();


// APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


// we create mongoose schema -> MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});


// convert the mongoose schema into model
var Blog = mongoose.model("Blog", blogSchema);


// RESTFUL ROUTES


// title
// image
// body
// created


// check whether our app is listening
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING!!");
});

