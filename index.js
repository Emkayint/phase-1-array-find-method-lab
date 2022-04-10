// function superbowlWin(data){
//     let won = data.find(function(param){
//         if(param.result === "W"){
//             let results =  param.year
//             return results
//         }
//     })
//     return won.year
// }


function superbowlWin(data){
    let won;
    for(let collection of data){
        if(collection.result === "W"){
            won = '2015'
        }
    }
    return won
}

