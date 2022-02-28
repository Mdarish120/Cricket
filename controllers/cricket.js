

export const latestNew= async (req,res)=>{
    try{
            res.status(200).json("lastest News ");
    }catch(err){
        console.log(err);
    }

}


export const test= async (req,res)=>{
    try{
        res.status(200).json("Test details... ");
    }catch(err){
        console.log(err);
    }

}


export const upcomingTest= async (req,res)=>{
    try{
        res.status(200).json("upcoming test details ");
    }catch(err){
        console.log(err);
    }

}


export const upcomingOdi= async (req,res)=>{
    try{
        res.status(200).json("upcoming ODI details ");
    }catch(err){
        console.log(err);
    }

}


export const upcomingT20= async (req,res)=>{
    try{
        res.status(200).json("upcoming T20 details ");
    }catch(err){
        console.log(err);
    }

}


export const details= async (req,res)=>{
    try{
        res.status(200).json("All details... ");
    }catch(err){
        console.log(err);
    }

}


export const quize= async (req,res)=>{
    try{
        res.status(200).json("Quize.. ");
    }catch(err){
        console.log(err);
    }

}

export const allMatches= async (req,res)=>{
    try{
        res.status(200).json("all match details ");
    }catch(err){
        console.log(err);
    }

}   


export const stadium_details= async (req,res)=>{
    try{
        res.status(200).json("stadium details.. ");
    }catch(err){
        console.log(err);
    }

}

export const stadium_detail= async (req,res)=>{

    const {id} = req.params;

    try{
        res.status(200).json(`stadium details ${id}`);
    }catch(err){
        console.log(err);
    }

}


