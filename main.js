function myFunc(fName = "", lName = "") {
  return `${fName} ${lName}`;
}

myFunc("Agil", "Ata"); // "Agil Ata";
myFunc(); // "undefined undefined";
