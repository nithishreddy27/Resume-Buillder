import clientPromise from "./mongodb"
import crypto from 'crypto'
import { v4 as uuidv4 } from 'uuid'

export async function createUser({ username, password }) {


  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex')
  const user = {
    id: uuidv4(),
    createdAt: Date.now(),
    username,
    hash,
    salt,
  }


  // const user={
  //   username,
  //   password,
  //   createdAt:Date.now()
  // }
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
  catch(error){
    return {"error":error}
  }
  
}

export function validatePassword(user, inputPassword) {


  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex')
  const passwordsMatch = user.hash === inputHash
  return passwordsMatch

    // if(user.password==inputPassword){
    //   return true
    // }
    // else{
    //   return false
    // }

}
