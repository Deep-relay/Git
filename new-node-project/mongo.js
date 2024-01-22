require('dotenv').config()
const mongoose=require('mongoose')
const url=process.env.mongo_url
mongoose.set('strictQuery',false)
mongoose.connect(url)
const personSchema=new mongoose.Schema({
    name:String,
    number:Number,
})
personSchema.set('toJSON',{
    transform:(doc,ret)=>{
        ret.id=ret._id.toString()
        delete ret._id
        delete ret.__v
    }
})
const Person=mongoose.model('Person',personSchema)
module.exports(Person)