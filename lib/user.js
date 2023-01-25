import clientPromise from "./mongodb"


export async function createUser({ username, password }) {
  const user={
    username,
    password,
    createdAt:Date.now()
  }
  const db=await clientPromise
  const datb=db.db("provast")
  console.log("connected in created")
  await datb.collection("details").insertOne(user)
  return { username, createdAt: Date.now() }
}

// Here you should lookup for the user in your DB
export async function findUser({ username }) {
  const db=await clientPromise
  const datb=db.db("provast")
  console.log("conn")
  try{
    const user=await datb.collection("details").findOne({"username":username})
    return user
  }
  catch(error){
      return {"error":error}
  }
}



export async function addDetails(b){
  console.log("inside add Detials",b);
  try{
    const db=await clientPromise
    const datb=db.db("provast")
    console.log("connected to add Details")
    await datb.collection("details").findOneAndUpdate({"username":b.username},{$set:b})
    return {"sucess":true}
  }
  catch(e){
    return {"error":error}
  }
  
}

export function validatePassword(user, inputPassword) {
    if(user.password==inputPassword){
      return true
    }
    else{
      return false
    }

}
