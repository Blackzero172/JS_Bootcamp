function topLanguages(language){
    switch(language){
        case "Mandarin":
            console.log(`${language}: Most number of native speakers!`);
            break;
        case "Spanish":
            console.log(`${language}: 2nd place in number of native speakers`);
            break;
        case "English":
            console.log(`${language}: 3rd place`);
            break;
        case "Hindi":
            console.log(`${language}: Number 4`);
            break;
        case "Arabic":
            console.log(`${language}: 5th most spoken language`);
            break;
        default:
            console.log("Not in the top 5")
    }
}
topLanguages("English");
topLanguages("Arabic");
topLanguages("Hindi");
topLanguages("Mandarin");
topLanguages("Spanish");
topLanguages("Finnish");
topLanguages("Swedish");
topLanguages("Turkish");