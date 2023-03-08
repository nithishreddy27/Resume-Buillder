import mongoose from "mongoose";

const userResume = new mongoose.Schema({
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
