module.exports = {
  mongodb: {
    dbURI: `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`
  },
  session: {
    cookieKey: process.env.COOKIE_KEY
  },
  googleAuth: {
    googleClientId: process.env.GOOGLE_CLIENTID,
    googleClientSecret: process.env.GOOGLE_CLIENTSECRET
  },
  facebookAuth: {
    facebookClientId: process.env.FACEBOOK_CLIENTID,
    facebookClientSecret: process.env.FACEBOOK_CLIENTSECRET
  },
  jwtAuth: {
    secret: process.env.JWT_SECRET
  }
};

// Previous mongodb setting was:
// mongodb: {
//   dbURI: `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin`
// }