let admin = require("firebase-admin");

let serviceAccount = require("./credentials.js");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});