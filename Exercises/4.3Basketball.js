function avgScore(scores){
    let average = 0;
    for(let i=0;i<scores.length;i++){
        average += scores[i];
    }
    average /= scores.length;
    return average
}
function higherAvg(team1,team2){
    if(team1.average > team2.average){
        console.log(`${team1.name}'s team wins with the Average score of : ${team1.average}`)
    }
    else if(team2.average > team1.average){
        console.log(`${team2.name}'s team wins with the Average score of : ${team2.average}`)
    }
    else{
        console.log("it's a Draw!")
    }
}
let johnAvg = {name:"John",average:avgScore([89,120,103])} ;
let mikeAvg = {name:"Mike",average:avgScore([116,94,123])};
higherAvg(johnAvg,mikeAvg);