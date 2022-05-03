import { newColl } from "./connectDb.js";

const arsenal = {
    league: "EPL",
    country: "England",
    colours: "red",
    position: 4,
    players: 28
}

newColl.add(arsenal)
.then(function(doc) {
    console.log("Created team", doc.id)
})
.catch(function(err) {
    console.error(err)
})