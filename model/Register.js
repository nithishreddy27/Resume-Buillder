import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, trim: true, unique: true },
    username: { type: String, trim: true, unique: true },
    hash: { type: String },
    salt: { type: String },
    placed: {
      type: Boolean,
      default: false,
    },
    detailsAvailable: {
      type: Boolean,
    },
    academicsAvailable: {
      type: Boolean,
    },
    paraphrase: {
      type: String,
    },
    profile: {
      firstName: {
        type: String,
        trim: true,
      },
      middleName: {
        type: String,
        trim: true,
      },
      lastName: {
        type: String,
        trim: true,
      },
      image: {
        type: String,
        default:
          "http://res.cloudinary.com/dj7nomqfd/image/upload/v1647117869/uploads/bphhxvmlcyyu2pntbikm.png",
      },
      dob: {
        type: Date,
      },
      gender: {
        type: String,
      },
      verified: {
        type: Boolean,
        default: false,
      },
      frozen: {
        type: Boolean,
        default: false,
      },
    },
    phone: {
      value: {
        type: Number,
      },
      verified: {
        type: Boolean,
        default: false,
      },
      frozen: {
        type: Boolean,
        default: false,
      },
    },
    approved: {
      type: Boolean,
    },
    category: {
      type: String,
    },
    rollNumber: {
      value: {
        type: String,
        trim: true,
        uppercase: true,
      },
      verified: {
        type: Boolean,
        default: false,
      },
      frozen: {
        type: Boolean,
        default: false,
      },
    },
    notificationMethod: {
      type: String
    },
    college: {
      name: {
        type: String,
      },
      code: {
        type: String,
      },
      campus: {
        type: String
      },
      program: {
        type: String,
      },
      specialisation: {
        type: String
      },
      
      // passphrase: {
      //   type: String,
      // },
      paraphrase: {
        type: String,
      },
      website: {
        type: String,
      },
    },
    principal:{
      // type:String
      phone:{
        type:String
      },
      email:{
        type:String
      }
      
    },
    placement:{
      designation:{
        type:String
      },
      phone:{
        type:String
      },
      email:{
        type:String
      }
    },
    resume:{
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
            type:String
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
            enable:{
                type:Boolean
            }
        }
    }],
    projects:[{
        name:{
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
            enable:{
                type:Boolean
            }
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
            enable:{
                type:Boolean
            }
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
            enable:{
                type:Boolean
            }
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
    }
  },
  { timestamps: true }
);

export default mongoose.models.students || mongoose.model("students", userSchema);