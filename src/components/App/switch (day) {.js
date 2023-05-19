let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week.");
    break;
  case "Friday":
    console.log("End of the week.");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Weekday.");
}
