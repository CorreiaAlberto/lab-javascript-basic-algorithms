
/* Iteration 1 - Names and Inputs ----------------------------------------
    1.1 Create a variable called "driver" with the driver's name.
    1.2 Print in the console "The driver's name is XXXX"
    1.3 Create a variable called "navigator" with the navigator's name.
    1.4 Print in the console "The navigator's name is YYYY"
*/
let driver = "alberto";
let navigator1 = "chus";
let navigator2 = "claudi";

console.log("The driver´s name is "+ driver);
console.log("The navigators names are " + navigator1 + navigator2);


/* Iteration 2: Conditionals ---------------------------------------------
    2.1. Depending on which name is longer, print:
    - Driver has the longest name, it has XX characters. or
    - Navigator has the longest name, it has XX characters. or
    - Wow, you both have equally long names, XX characters!.
*/
if (driver.length > navigator1.length && driver.length > navigator2.length) {
    console.log("Driver has the longest name, it has"+ driver.length +"characters.")
  } else if (navigator1.length> driver.length && navigator1.length > navigator2.length) {
    console.log("Navigator1 has the longest name, it has"+ navigator1.length + "characters.")
  } else if  (navigator2.length> driver.length && navigator2.length > navigator1.length) {
    console.log("Navigator2 has the longest name, it has"+ navigator2.length + "characters.")
  } else {
    console.log ("Wow, you both have equally long names," driver.length "characters!.")
  }



/* Iteration 3: Loops ----------------------------------------------------
    3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
    3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
*/
for (let i = 0; i < driver.length; i++) {
    console.log(`${driver[i].toUpperCase()} `);
  }
  let reverseName=""
  for (let i = navigator1.length - 1; i >= 0 ; i--) {
    reverseName = reverseName.concat(navigator1.charAt(i)) ;
  }
  console.log(reverseName);

  /*  Bonus Time!
    Bonus 1: -------------------------------------------------------------
    Go to lorem ipsum generator and:
    Generate 3 paragraphs. Store the text in a variable type of string.
    Make your program count the number of words in the string.
    Make your program count the number of times the Latin word "et" appears.
    Podeis utilizar indexOf. Para que sepas, para el metodo indexOf podeis
    passar un segundo parámetro que indica a partir de donde va a encontrar la
    palabra buscada
    Sintaxix: str.indexOf(searchValue [, fromIndex])
    ejemplo:
        let lastPosition = 0;
        lasPosition = str.indexOf("et", lastPosition);

*/
let parrafo1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget augue vitae lorem eleifend accumsan. Praesent et lorem quam. Sed accumsan, velit id pretium feugiat, nisi ante gravida urna, in dignissim lectus orci sed nibh. Duis egestas lorem non turpis commodo scelerisque. Morbi eget diam eu purus molestie egestas. Proin bibendum suscipit sapien, et malesuada velit facilisis sed. Nunc nec rutrum orci, in rutrum dolor. Etiam vestibulum nunc dolor, nec ullamcorper ex ultricies quis. Integer ornare dui sed scelerisque dictum. Vivamus molestie hendrerit eros, ut egestas justo imperdiet sit amet. Mauris et eros volutpat, scelerisque tellus ac, convallis diam. Vivamus iaculis dolor arcu. Sed mauris felis, bibendum non tellus dignissim, imperdiet consectetur nisl. In et porttitor tellus. Vestibulum rutrum eu tortor id consectetur."
let parrafo2= "Duis luctus a nibh a malesuada. In hac habitasse platea dictumst. Mauris non bibendum augue. Vestibulum lorem eros, pulvinar in turpis eget, ullamcorper maximus urna. Quisque ac ligula sed diam pharetra condimentum nec vel lectus. Aliquam ullamcorper est nisl, in dictum velit maximus id. Phasellus volutpat, nulla ac pharetra rutrum, nulla quam blandit lorem, sagittis convallis justo quam vel ex. Vivamus eget pharetra eros. Praesent vel tempus urna. Vivamus ornare elementum tellus, ac maximus nulla."
let parrafo3= "Vestibulum ultrices venenatis massa at ultricies. Maecenas laoreet diam sit amet mi placerat, non euismod neque dapibus. Vivamus condimentum, mi a auctor gravida, magna massa sodales velit, id finibus sem massa et tellus. Suspendisse et varius libero. Phasellus non felis nec orci mattis consequat vitae nec enim. Cras ac tortor tempor, vestibulum nibh eu, ultrices urna. Sed at interdum nibh. Suspendisse nec rutrum sem, eu molestie sapien."
let contador = 0;
for (let i=0;i<=parrafo1.length;i++) {
  if (parrafo1.length (i) === " ") {
 contador++
  }
}
console.log(contador)

let contadorEt =0;
let lastEtPosition = 0;

for (let i=0; i < parrafo1.length; i++ ){
  lastEtPosition = parrafo1.indexOf("et",lastEtPosition);
  i=lastEtPosition;
  contadorEt++;
   
}

console.log(contadorEt);