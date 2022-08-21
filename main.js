let textInput = document.querySelector("#txt-Input")
let textoutput = document.querySelector("#txt-output")
let checkbutton = document.querySelector("#check")
let resetButton = document.querySelector("#reset-button");
//let numInput = document.querySelector("#num-Input")

checkbutton.addEventListener("click", buttonClickHandler)
    function buttonClickHandler(event) {
        console.log("button clicked");
        // if(textInput.value !== ""){
        // var input = textInput.value
        // numInput = input
        // textoutput = numInput
          
        // }
        //textoutput.innerText = input.length;
        if (Number(textInput.value) <= 1000 || Number(textInput.value) === 1000)
    {
    var final = "";
    var inputLength = Number(textInput.value);
    var characterABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var characterabc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    characterabc = characterabc.toLowerCase();
    var number = "1234567890";
    var  symbol= "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
    var finalChar = characterABC + characterabc + number + symbol;
    var finalCharLength = finalChar.length;
    for (i=0;i<inputLength;i++){
    final = final + finalChar.charAt(Math.floor(Math.random() * finalCharLength));
    }
    textoutput.innerText = final.toString();
    //return final;
    }
}
resetButton.addEventListener("click", function ResetButton() {
    console.log("click");
    textInput.value ="";
        textoutput.innerText ="";
            
});