function numOfSiblings(){
   let num = window.prompt('how many siblings do you have?')
    if(num == 1){
        console.log("1 sibling")
    }
    else if(num > 1){
        console.log("More than 1 sibling")
    }
    else if(num <= 0){
        console.log("No Siblings")
    }
}
numOfSiblings();