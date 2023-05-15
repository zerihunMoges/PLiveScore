require('dotenv').config()
export const configs = {
  sourceBaseUrl: process.env.SOURCEBASEURL,
  destBaseUrl: process.env.DESTBASEURL,
  apiKey: process.env.APIKEY,
  apiHost: process.env.APIHOST
}