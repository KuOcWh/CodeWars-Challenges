//Write a function that returns a string in which firstname is swapped with last name.

//Example(Input --> Output)

//"john McClane" --> "McClane john"

function nameShuffler(str){
    //Shuffle It
    let strSplit = str.split(' ')
    return `${strSplit[1]} ${strSplit[0]}`
  }