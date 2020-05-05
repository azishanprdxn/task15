/* Toggle between adding and removing the "responsive" class to page-navigation when the user clicks on the icon */
function toggleHamburger() {
  var navigation = document.getElementById("page-navigation");
  if (navigation.className === "page-navigation") {
    navigation.className += " responsive";
  } else {
    navigation.className = "page-navigation";
  }
}