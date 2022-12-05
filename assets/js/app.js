/* galleri kode
---------------------------------------------------------------------------------------------------------------*/

// "let imgSrc" VÆLGER ELEMENTERNE: "IMG" I GALLERY: ("getElementsByTagName")
let imgSrc = document.getElementsByTagName("img");

//SKIFTER SRC (STIEN) UD PÅ: "#imgLarge" MED "DEN FRA "imgsrc" / (foreach element)? XD
let imgCon = document.querySelector("#imgLarge");
Array.from(imgSrc).forEach((element) => {
  element.addEventListener("click", () => {
    imgCon.src = element.src;
  });
});

/* form validering kode
--------------------------------------------------------------------------------------------------------------- */

/* Dom elementer der skal valideres*/
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");

/* submit button */
const submitButton = document.getElementById("submitButt");
submitButton.addEventListener("click", FormValidation);

/* feedback Dom element*/
const feedBackElement = document.getElementById("feedBackElement");

/* validerings funktion*/
function FormValidation(event) {
    event.preventDefault();
  let errorMsg = [];

  if(!nameInput.value){
errorMsg.push('indtast navn');
  }


  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(!emailInput.value.match(mailformat))
{
    errorMsg.push('Indtast korrekt e-mail');
      }


  if(errorMsg.length>0){
    errText='Fejl i indtastningen: \n';

    errorMsg.forEach( (msg)=>{
        errText=errText+msg+'!\n';


    });
    feedBackElement.innerText=errText;
    feedBackElement.style.color='red';


  }else{
    feedBackElement.innerHTML='tak for informationen';
    feedBackElement.style.color='green';

  }
}




/* modal kode
--------------------------------------------------------------------------------------------------------------- */



/* submit button */
const modalBox=document.getElementById("cookieModal");

const cookieButton = document.getElementById("cookieButt");
cookieButton.addEventListener("click", displayModal);

const cookieClose = document.getElementById("closeModal");
cookieClose.addEventListener("click", closeModal);



function displayModal() {
    modalBox.style.display = "block";
    }

function closeModal() {
    modalBox.style.display = "none";
}
