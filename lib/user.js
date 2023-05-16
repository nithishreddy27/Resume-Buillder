import crypto from 'crypto'
import { v4 as uuidv4 } from 'uuid'
import dbConnect from "./dbConnect"
import Register from "../model/Register"

export async function createUser({ username, password , notificationMethod }) {

  const email = username
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex')
  const user = {
    id: uuidv4(),
    createdAt: Date.now(),
    email,
    username,
    hash,
    salt,
    notificationMethod
  }

  await dbConnect()
  await Register.create(user)
  return { username, createdAt: Date.now() }
}

export async function findUser({ username }) {
  await dbConnect()
  try{  
    var user=await Register.findOne({"username":username})
    // console.log("user",user)
    return user
  }
  catch(error){
    return {"error":error}
  }
}

export async function addDetails(b){  


  // const fname=b.firstName.charAt(0)+b.firstName.slice(1,b.firstName.length)
  const fname = b.firstName
  const mname = b.middleName
  const lname = b.lastName
  console.log("fname",fname)
  const newObj = Object.assign({},b,{profile:{
    firstName:fname,
    middleName:mname,
    lastName:lname,
    gender:b.gender,
    dob:b.dob,
    image:"link"
  },
  paraphrase:b.paraphrase,
  phone:{
    value:b.phone
  },rollNumber:{
    value:b.rollnumber
  },college:{
    name:b.college,
    paraphrase:b.paraphrase,
  },
  principal:{
    email:b.principalemail,
    phone:b.principalphone
  },
  placement:{
    designation:b.designation,
    phone:b.placementphone,
    email:b.placementemail,
  }
})


  console.log("in add user",newObj)
  await dbConnect()
  try{
      var res = await Register.findOneAndUpdate({"username":b.username},{$set:newObj},{new:true})
      await res.save()
      // console.log("in add",res)
      return {"sucess":true}
  }
  catch(error){
      return {"error":error}
    }
}



export async function addEducation(b){  
  console.log("in add user",b.username)


  const newObj = Object.assign({},b,{college:{
    name:b.school,
    campus:b.board,
    program:b.degree,
    code:"",
    specialisation:b.branch,
  },
  // paraphrase:b.paraphrase,
  // website:b.collegeWebsite,
  // principal:{email:b.principalemail,phone:b.principalphone},
  // placement:{designation:b.designation,email:b.placementemail,phone:placementphone}
})
  await dbConnect()
  try{
      var res = await Register.findOneAndUpdate({"username":b.username},{$set:newObj},{new:true})
      await res.save()
      // console.log("in add",res)
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