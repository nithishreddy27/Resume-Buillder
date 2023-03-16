import UserResume from "../../../model/UserResume";

//It is used to search all the resumes of the user

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      console.log("in see");
      var resumeData = await UserResume.find({});
      res.json(resumeData);
      break;
  }
}
