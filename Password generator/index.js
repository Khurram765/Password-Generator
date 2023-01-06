

var upperCase= document.getElementById("uppercase");
var lowerCase= document.getElementById("lowercase");
var numeric= document.getElementById("numeric");
var symbols= document.getElementById("symbols");
// var passwordLength= document.getElementById("passwordlength").value;
var btn= document.getElementById("btn");
var password=document.getElementById("password")

btn.addEventListener("click",()=>{
    
        
        password.innerHTML=""
        var passwordLength= document.getElementById("passwordlength").value;
        var randomCharacters=""
        if(passwordLength>=23){
            alert("please enter minimum 22 password length")
        }else{

            if(upperCase.checked==true){
                var characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                randomCharacters += characters
            }
            if(lowerCase.checked==true){
                var charactersTwo="abcdefghijklmnopqrstuvwxyz"
                randomCharacters += charactersTwo
            }
            if(numeric.checked==true){
                var charactersThree="01234567890"
                randomCharacters += charactersThree
            }
             if(symbols.checked==true){
                var charactersFour="@$#&*_!^"
                randomCharacters += charactersFour
            }
           
            
            for(i=0;i<passwordLength;i++){
                console.log(randomCharacters)
                var getValue=""
                getValue += randomCharacters.charAt(Math.floor(Math.random()*randomCharacters.length))
                password.innerHTML+=getValue
            }
           
        }
    
})
document.getElementById("copy").addEventListener("click",()=>{
    navigator.clipboard.writeText(password.innerHTML)
    alert(password.innerHTML + " is copied to the clipboard")
})