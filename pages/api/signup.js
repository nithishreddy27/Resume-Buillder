import { createUser } from '../../lib/user'
import passport from 'passport'
import nextConnect from 'next-connect'
import { setLoginSession } from '../../lib/auth'

// export default async function signup(req, res) {
//   try {
//     await createUser(req.body)
//     await setLoginSession(res, session)
//     // res.status(200).send({ done: true })
//     res.status(200).send({ done: true })
//   } catch (error) {
//     console.error(error)
//     res.status(500).end(error.message)
//   }
// }

// const authenticate = (method, req, res) =>
//   new Promise((resolve, reject) => {
//     passport.authenticate(method, { session: false }, (error, token) => {
//       if (error) {
//         reject(error)
//       } else {
//         resolve(token)
//       }
//     })(req, res)
//   })

// export default nextConnect()
//   .use(passport.initialize())
//   .post(async (req, res) => {
//     try {
//       await createUser(req.body)
      
//       const user = await authenticate('local', req, res)
//       const session = {...user}

//       await setLoginSession(res, session) 

//       console.log("session created");
//       res.status(200).send({ done: true })
//     } catch (error) {
//       console.error(error)
//       res.status(401).send(error.message)
//     }
//   })

const authenticate = (method, req, res) =>
  new Promise((resolve, reject) => {
    passport.authenticate(method, { session: false }, (error, token) => {
      if (error) {
        reject(error)
      } else {
        resolve(token)
      }
    })(req, res)
  })


export default nextConnect()
  .use(passport.initialize())
  .post(async (req, res) => {
    try {
      await createUser(req.body)
      const user = await authenticate('local', req, res)
      const session = { ...user }
      await setLoginSession(res, session)
      res.status(200).send({ done: true })
    } catch (error) {
      console.error(error)
      res.status(401).send(error.message)
    }
  })
