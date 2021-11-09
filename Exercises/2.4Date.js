function getDate() {
  let today = new Date();
  let weekday = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    today
  );
  let month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(today);
  let date = `Today is ${weekday} the ${today.getDate()} of ${month} , ${today.getFullYear()}`;
  console.log(date);
}
getDate();
