// function reverseSentence(sentence) {
//     sentence = sentence.split(" ");
//     let reversedSentence = ""
//     for (let i = sentence.length - 1; i >= 0; i--) {
//         reversedSentence += sentence[i]
//         if (i !== 0) reversedSentence += " "


//     }
//     return reversedSentence
// }

// console.log(reverseSentence("Hello World from OpenAI"));
















function revsen(str){
    str=str.split(" ")
    let revsentance=""
    for(let i=str.length-1;i>=0;i--){
        revsentance+=str[i]  //revserseing the sentance
        if(i!==0) revsentance+=" " //adding space between the words
    }
    return revsentance
}
console.log(revsen("Hello World from OpenAI"));