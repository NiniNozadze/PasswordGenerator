const getRange=document.querySelector(".range");
const rangeSpan=document.querySelector(".rangeValue")
const rangeProgress = document.querySelector(".range-progress");
const getUpper=document.querySelector(".upper");
const getLower=document.querySelector(".lower");
const getNumbers=document.querySelector(".numbers");
const getSymbols=document.querySelector(".symbols");
const getButton=document.querySelector(".button");
const genPassword=document.querySelector(".generatedPassword");
const getInput=document.querySelector(".inputClass")
const selectCopy=document.querySelector(".copyFile");
const textCopied=document.querySelector(".copied")
const passStrength=document.querySelector(".medium");
const passContainers=document.querySelectorAll(".container")




getRange.addEventListener("input", function () {
  const value = getRange.value;
  const min = getRange.min || 0;
  const max = getRange.max || 100;
  const percent = ((value - min) / (max - min)) * 100;
  rangeProgress.style.width = percent + "%";
});
getRange.addEventListener("input", function () {
    rangeSpan.textContent = getRange.value;
});

selectCopy.addEventListener("click", function () {
navigator.clipboard.writeText(getInput.value);
textCopied.style.display="block";
});
 

getButton.addEventListener("click",randomPass);
function randomPass(){
    let charset="";
    if(getUpper.checked){
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(getLower.checked){
        charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if(getNumbers.checked){
        charset += "0123456789";
    }
    if(getSymbols.checked){
        charset += "!@#$%^&*()_+[]{}|;:,.<>?";
    }
    
    let password="";
    for(let i=0;i<getRange.value;i++){
    let randomNumber = Math.floor(Math.random() * charset.length);
        password += charset[randomNumber]  
    }
    genPassword.innerHTML = password;
    getInput.value=password;


 function ContainersColor(){
    for(let i=0;i<passContainers.length;i++){
        passContainers[i].style.display="none";
        passContainers[i].style.background="#18171F";
        passContainers[i].style.border="2px solid #E6E5EA"
    }   
 }

    if(getRange.value>=0 && getRange.value <=4 && charset.length !== 0){
        ContainersColor()
        passStrength.style.display="block";  
        passStrength.innerHTML="TOO WEAK!";
        for(let i=0;i<passContainers.length;i++){
            passContainers[i].style.display="block";
            passContainers[0].style.background="#F64A4A";
            passContainers[0].style.border="none"
        }        
    }

    if(getRange.value>4 && getRange.value <=8 && charset.length !== 0 ){
        ContainersColor()
        passStrength.style.display="block";  
        passStrength.innerHTML="WEAK";
        for(let i=0;i<passContainers.length;i++){
            passContainers[i].style.display="block";
            if(i<2){
                passContainers[i].style.background="#FB7C58"
                passContainers[i].style.border="none"
            }
        }
       }
     if(getRange.value>8 && getRange.value <=12 && charset.length !== 0) {
        ContainersColor()
        passStrength.style.display="block";  
        passStrength.innerHTML="MEDIUM";
        for(let i=0;i<passContainers.length;i++){
            passContainers[i].style.display="block";
            if(i<3){
                passContainers[i].style.background="#F8CD65"
                passContainers[i].style.border="none"
            } 
        }
     }if(getRange.value>12 && getRange.value <=20 && charset.length !== 0){
        ContainersColor()
        passStrength.style.display="block";  
        passStrength.innerHTML="STRONG";
        for(let i=0;i<passContainers.length;i++){
            passContainers[i].style.display="block";
            if(i<4){
                passContainers[i].style.background="#A4FFAF"
                passContainers[i].style.border="none"
            }  
        }
     }
     
    if (charset.length === 0 ) {
        genPassword.innerHTML = "";
        getInput.value="";
        passStrength.style.display="none"; 
        ContainersColor()
         }
     textCopied.style.display="none"
     }





