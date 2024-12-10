const express = require('express');
const morgan = require('morgan');
const userRouter= require('./Routes/userRoute');
const BlogRouter = require('./Routes/blogRoutes');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const app = express();
app.use(express.json())
app.use(morgan())
app.use(cors(
    {
        origin:"http://localhost:3000",
        credentials:true,
    }
));

app.use(cookieParser());
app.use('/api/user',userRouter)
app.use("/api/Blogs",BlogRouter)


module.exports=app;
