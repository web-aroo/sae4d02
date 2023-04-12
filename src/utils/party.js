import * as party from "party-js";

export default class Party{
    static play(){
        party.sparkles(document.querySelector("div"),{
            count: party.variation.range(20,50)
        });
    }
}