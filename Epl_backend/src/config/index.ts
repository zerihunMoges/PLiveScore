require('dotenv').config()
export const configs = {
  cloudinaryName: process.env.CLOUDINARYNAME || 'random',
  cloudinaryKey: process.env.CLOUDINARYKEY || 'random',
  cloudinarySecret: process.env.CLOUDINARYSECRET || 'random',
  mongoUrl: process.env.DATABASE || 'random',
  port: process.env.PORT || 3000
}
