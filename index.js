// 1. genereate a CAPTCHA
// 6 digit 0-9 a-f random method
let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
code  = ''; //init a empty string
function generatecode() {
    code = '';
    for(let i = 0;i<6;i++)
        {
            let codeindex = (Math.random()*chars.length);
            code = code+chars[Math.floor(codeindex)];
        }
        console.log(code);
    return code
}
document.getElementById("linkbt").addEventListener('click',function(){
    code = generatecode()
    document.getElementById('checkCode').innerHTML = code;

})
window.onload = function(){
    code = generatecode()
    document.getElementById('checkCode').innerHTML = code;
}
document.getElementById("Button1").addEventListener('click',function(){
    //obtain the value of the input 
    let inputcode = document.getElementById("inputCode").value;
    let checkcode = document.getElementById("checkCode").innerHTML;
    if (inputcode == checkcode){
        document.getElementById("text_show").innerHTML = 'You passed the CAPTCHA!';
    }
    else {
        document.getElementById("text_show").innerHTML = 'You failed to pass the CAPTCHA!';

        document.getElementById("inputCode").value  = '';
        code = generatecode()
        document.getElementById('checkCode').innerHTML = code;

    }

})

