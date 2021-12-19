//creating a random middleware...

const logger = (req,res,next)=>{

    console.log("middleware running")
    next()// indicates its a middleware
}

module.exports = logger;