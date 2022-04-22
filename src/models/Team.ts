import mongoose from 'mongoose'

/* TeamSchema will correspond to a collection in our MongoDB database. */
const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this member.'],
  },
  position: {
    type: Number,
    required: [true, "Please provide the member's position"],
  },
  category: {
    type: String,
    required: [true, 'Please specify the species of your pet.'],
  },
  title: {
    type: String,
    required: [true, 'Please specify the title of this member.'],
  },
  backgroundInformation: {
    type: String,
  },
  longDescription: {
    type: String,
    required: [true, 'Please provide long description'],
  },
  image: {
    required: [true, 'Please provide an image url for this member.'],
    type: String,
  },
  project: {
    type: String,
  },
  shortDescription: {
    type: String,
  },
  socialLinks: {
    type: {
      facebook: String,
      youtube: String,
      twitter: String,
    },
  },
})

export default mongoose.models.Team || mongoose.model('Team', TeamSchema)
