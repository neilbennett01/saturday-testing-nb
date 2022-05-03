import admin from "firebase-admin";
import service_account from "./credentials.js";

admin.initializeApp({
    credential: admin.credential.cert(service_account)
});

const db = admin.firestore();
export const newColl = db.collection("League");