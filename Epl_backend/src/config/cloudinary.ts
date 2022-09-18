import {v2 as cloudinary} from 'cloudinary'
import { configs } from '.'

cloudinary.config({
    cloud_name: configs.cloudinaryName,
    api_key: configs.cloudinaryKey,
    api_secret: configs.cloudinarySecret
})

export default cloudinary