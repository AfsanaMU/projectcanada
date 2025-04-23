const Job = require('../Model/job')
    const jwt=require("jsonwebtoken")
exports.registerjob = (req,res)=>{


    console.log("jobcontroller")
    
    Job.findOne({jobid:req.body.jobid}).then((job)=>{
        if(job){
            return res.status(400).json({message:"job already exist"})
        }
        let newJob = Job(req.body)
        newJob.save().then((newJob)=>{
            if(newJob){
                return res.status(200).json({message:"job created."})
            }
            else{
                return res.status(400).json({message:"Unable to create job..............."})
            }
        })

    })
 }
