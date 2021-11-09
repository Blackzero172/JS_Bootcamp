function countryToLiveIn(language,isIsland,population,country){
    if(language === "English" && population < 50 && !isIsland){
        console.log(`You sholud live in ${country}`)
    }
    else{
        console.log(`${country} does not meet your criteria`)
    }
}
countryToLiveIn("Swedish",false,10.4,"Sweden")
countryToLiveIn("English",false,5.5,"Finland")
countryToLiveIn("Russian",false,146.2,"Russia")
