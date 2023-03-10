import UserResume from "../../../model/UserResume"

export default async function handler(req,res){

    switch(req.method){
        case("POST"):
            console.log('b',req.body.resumeId);
            res.send({"done":null})
            break

    }
}   