import mongoose from "mongoose";

const userResume = new mongoose.Schema({
<<<<<<< HEAD
    resumeId: {type:String},
    email:{type:String},
    resume:[{
        id:{type:String},
=======
<<<<<<< HEAD
    email:{type:String},
    resume:[{
        role:{type:String},
>>>>>>> 282140afd346249b812dd83c0f293a940eaeaa84
        personal:{
            firstName:{
                type:String
            },
            lastName:{
                type:String
            },
            email:{
                type:String
            },
            role:{
                type:String
            },
            image:{
                type:String
            },
            dob:{
                type:String
            },
            phone:{
                type:String
            },
            objective:{
                type:String
<<<<<<< HEAD
            }
        },
        social:[{
            network:{
                type:String,
            },
            username:{
                type:String
            },
            url:{
                type:String
            },
            enabled:{
                type:Boolean
            },
        }],
        work:[{
            company:{
                type:String
            },
            from:{
                type:String
            },
            to:{
                type:String
            },
            designation:{
                type:String
            },
            website:{
                type:String
            },
            summary:{
                data:{
                    type:String
                },
            },
            enabled:{
                type:Boolean
            }
            
=======
            }
        },
        social:[{
            network:{
                type:String,
            },
            username:{
                type:String
            },
            url:{
                type:String
            },
            enabled:{
                type:Boolean
            },
        }],
        work:[{
            company:{
                type:String
            },
            from:{
                type:String
            },
            to:{
                type:String
            },
            designation:{
                type:String
            },
            website:{
                type:String
            },
            summary:{
                data:{
                    type:String
                },
                enable:{
                    type:Boolean
                }
            },
    
>>>>>>> 282140afd346249b812dd83c0f293a940eaeaa84
        }],
        education:[{
            institution:{
                type:String
            },
            fieldOfStudy:{
                type:String
            },
            typeOfDegree:{
                type:String
            },
            startDate:{
                type:String
            },
            endDate:{
                type:String
            },
            gpa:{
                type:String
            },
            summary:{
                data:{
                    type:String
                },
<<<<<<< HEAD
            },
            enabled:{
                type:Boolean
            }
        }],
        projects:[{
            name:{
=======
                enable:{
                    type:Boolean
                }
            }
        }],
        projects:[{
            title:{
>>>>>>> 282140afd346249b812dd83c0f293a940eaeaa84
                type:String
            },
            domain:{
                type:String
            },
            from:{
                type:String
            },
            to:{
                type:String
            },
    
            website:{
                type:String
            },
            summary:{
                data:{
                    type:String
                },
<<<<<<< HEAD
            },
            enabled:{
                type:Boolean
=======
                enable:{
                    type:Boolean
                }
>>>>>>> 282140afd346249b812dd83c0f293a940eaeaa84
            }
        }],
        awards:[{
            name:{
                type:String
            },
            awarder:{
                type:String
            },
            todate:{
                type:String
            },
            summary:{
                data:{
                    type:String
                },
<<<<<<< HEAD
            },
            enabled:{
                type:Boolean
=======
                enable:{
                    type:Boolean
                }
>>>>>>> 282140afd346249b812dd83c0f293a940eaeaa84
            }
        }],
        certifications: [{
            title:{
                type:String
            },
            date:{
                type:String
            },
            issuer:{
                type:String
            },
            summary:{
                data:{
                    type:String
                },
<<<<<<< HEAD
            },
            enabled:{
                type:Boolean
=======
                enable:{
                    type:Boolean
                }
>>>>>>> 282140afd346249b812dd83c0f293a940eaeaa84
            }
        }],
        skills:[{
            name:{
                type:String
            },
            level:{
                type:String
            },
            enabled:{
                type:Boolean
            },
        }],
        languages:[{
            name:{
                type:String
            },
            level:{
                type:String
            },
            enabled:{
                type:Boolean
            },
        }],
        hobbies:[{
            name:{
                type:String
            },
            enabled:{
                type:Boolean
            },
        }]
    }]
})

export default mongoose.models.userResumes || mongoose.model("userResumes", userResume);
=======
  personal: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    role: {
      type: String,
    },
    image: {
      type: String,
    },
    dob: {
      type: String,
    },
    phone: {
      type: String,
    },
    objective: {
      type: String,
    },
  },
  social: [
    {
      network: {
        type: String,
      },
      username: {
        type: String,
      },
      url: {
        type: String,
      },
      enabled: {
        type: Boolean,
      },
    },
  ],
  work: [
    {
      company: {
        type: String,
      },
      from: {
        type: String,
      },
      to: {
        type: String,
      },
      designation: {
        type: String,
      },
      website: {
        type: String,
      },
      summary: {
        data: {
          type: String,
        },
      },
      enabled: {
        type: Boolean,
      },
    },
  ],
  education: [
    {
      institution: {
        type: String,
      },
      fieldOfStudy: {
        type: String,
      },
      typeOfDegree: {
        type: String,
      },
      startDate: {
        type: String,
      },
      endDate: {
        type: String,
      },
      gpa: {
        type: String,
      },
      summary: {
        data: {
          type: String,
        },
      },
      enabled: {
        type: Boolean,
      },
    },
  ],
  projects: [
    {
      title: {
        type: String,
      },
      domain: {
        type: String,
      },
      from: {
        type: String,
      },
      to: {
        type: String,
      },

      website: {
        type: String,
      },
      summary: {
        data: {
          type: String,
        },
      },
      enabled: {
        type: Boolean,
      },
    },
  ],
  awards: [
    {
      name: {
        type: String,
      },
      awarder: {
        type: String,
      },
      date: {
        type: String,
      },
      summary: {
        data: {
          type: String,
        },
      },
      enabled: {
        type: Boolean,
      },
    },
  ],
  certifications: [
    {
      title: {
        type: String,
      },
      date: {
        type: String,
      },
      issuer: {
        type: String,
      },
      summary: {
        data: {
          type: String,
        },
      },
      enabled: {
        type: Boolean,
      },
    },
  ],
  skills: [
    {
      name: {
        type: String,
      },
      level: {
        type: String,
      },
      enabled: {
        type: Boolean,
      },
    },
  ],
  languages: [
    {
      name: {
        type: String,
      },
      level: {
        type: String,
      },
      enabled: {
        type: Boolean,
      },
    },
  ],
  hobbies: [
    {
      name: {
        type: String,
      },
      enabled: {
        type: Boolean,
      },
    },
  ],
});

export default mongoose.models.userResumes ||
  mongoose.model("userResumes", userResume);
>>>>>>> 197133cd1405cd56513962e9c5611e3790578973
