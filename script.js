//Get Information//

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const username = urlParams.get("user_name")
const email = urlParams.get("user_mail")
const password = urlParams.get("mdp")

if (email =="admin@gmail.com"  && password =="admin" && username=="admin" ){
  console.log("Connecté")
  document.getElementById("section_2").style.display = "none";
  
}
else{
  document.getElementById("section_1").style.display="none";
  console.log("Pas Connecté")
}