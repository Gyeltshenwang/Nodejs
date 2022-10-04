
import canidatesDetails from '../model/admin.js'
//GET THE POST
export const getCanidates = async (req, res, next) => { 
    console.log('getCanidates',)
    
    try {
       const user = await canidatesDetails.find() // fetch all the users
    console.log(user)
        res.status(200).json(user)
        
    
   } catch (error) {
    console.log(error)
    } 
}

export const postCannidates = async (req, res, next) => {
    const { name, title, vote } = req.body;
    const Postuser = new canidatesDetails({ name,title,vote})
    try {

        await Postuser.save()
        res.status(201).json(Postuser)
        res.status(201).send(Postuser)
    } catch (error) {
        console.log({message:error.message});
    }

   
}
//GET SPECIFIC POST
export const getParticularCanidates = async(req, res, next) => {
   
    try {
        const singleUser = await canidatesDetails.findById(req.params.id)
       
        res.json(singleUser)
        
    } catch (error) {
        console.log(error)
    }
}




//DELETE SPECIFIC POS
export const postUpdate = async (req, res, next) => {
// try {
//     const update = await canidatesDetails.updateOne({ _id: req.params.id },
//         { $set: { name: req.body.name } });
    

//     res.json(update)
   

// } catch (error) {
//     console.log(error);
    
// }
    try {
        const id = req.params.id;
        console.log(id);
        const UpdateUsers = req.body;
        const updateUser = await canidatesDetails.findByIdAndUpdate(id,  UpdateUsers , { new:true })
        res.json(updateUser);
    }
    catch (error) {
        console.log(error)
    }
}
 
// DELETE SPECIFIC POST UPDATE

// export const deleteSpecificPost = async (req, res, next) => {
//     try {
//         const deletePost = await canidatesDetails.remove({ _id: req.params.id });
//         res.json(deletePost)
       
//     } catch (error) {
//         console.log(error);
//     }
// }

export const deleteSpecificPost = async (req, res, next) => { 
    try {
        const id = req.params.id;
        console.log(id)
        
        const deletePost = await canidatesDetails.findByIdAndDelete(id ,{new:true} )
        res.json(deletePost)
        
    } catch (error) {
        console.log(error)
        
    }
}
export const updateVotes = async (req, res, next) => {
    try {
        const id = req.params.id;
        const vote = req.body;
        
        const castVoter = await canidatesDetails.findById(id)
        console.log(castVoter)
        const UpdateVote = await canidatesDetails.findByIdAndUpdate(id,castVoter.vote+1,{new:true})
        res.json(UpdateVote)
           console.log(vote)
    } catch (error) {
        console.log(error)
    }
}