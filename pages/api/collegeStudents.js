import Register from "../../model/Register";
// UserSche

export default async function handler(req,res){

    console.log("req",req.body.details);
    
    switch (req.method ){
        case("POST"):
            req.body.details.map(async (item)=>{
                const existingFlower = await Iris.findOne({"Id":item.Id})
                if(existingFlower){
                    console.log("already exist");
                }
                else{
                    const flower = new Iris(item)
                    await flower.save()
                }
            })
            res.send({"done":true})

            break

        case("DELETE"):
            const id = req.body.id
            await Iris.findOneAndDelete({"Id":id})
            console.log("deleted",id);
            res.send({"done":true})
            break

        case("GET"):
            var data = await Register.find({})
            console.log("in find",data);
            res.send({"done":data})
    }
}