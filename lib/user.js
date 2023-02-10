import crypto from 'crypto'
import { v4 as uuidv4 } from 'uuid'
import dbConnect from "./dbConnect"
import Register from "../model/Register"

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

  await dbConnect()
  await Register.create(user)
  return { username, createdAt: Date.now() }
}

export async function findUser({ username }) {
  await dbConnect()
  console.log("connected in finduser")
  try{  
    var user=await Register.findOne({"username":username})
    console.log("user",user)
    return user
  }
  catch(error){
    return {"error":error}
  }
}

export async function addDetails(b){  
  console.log("in add user",b.username)
  await dbConnect()
  try{
      var res = await Register.findOneAndUpdate({"username":b.username},{$set:b},{new:true})
      await res.save()
      console.log("in add",res)
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
}
