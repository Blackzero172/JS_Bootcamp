function lightOrDark(color) {
  switch (color.toLowerCase()) {
    case "yellow":
    case "orange":
    case "pink":
      console.log(`${color.toLowerCase()} is a Light Color`);
      break;
    case "blue":
    case "purple":
    case "brown":
      console.log(`${color.toLowerCase()} is a Dark Color`);
      break;
    default:
      console.log("Unknown Color");
  }
}
lightOrDark("yElLow");
lightOrDark("BROWN");
lightOrDark("Black");
