
function generateCaptcha() 
{
    var alphaNum = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
        'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1',
        '2', '3', '4', '5', '6', '7', '8', '9');
    
    var i;
    for ( i = 0; i < 5; i++) 
    {
        var a = alphaNum[Math.floor(Math.random()*alphaNum.length)];
        var b = alphaNum[Math.floor(Math.random()*alphaNum.length)];
        var c = alphaNum[Math.floor(Math.random()*alphaNum.length)];
        var d = alphaNum[Math.floor(Math.random()*alphaNum.length)];
        var e = alphaNum[Math.floor(Math.random()*alphaNum.length)];
    }

    var code = a + '' + b + '' + c + '' + d + '' +e;
    document.getElementById("mainCaptcha").value = code;
    document.getElementById("txtInput").innerHTML = "";
}

function checkValidCaptcha()
{
    var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
    var string2 = removeSpaces(document.getElementById('txtInput').value);

    if (string1 == string2) 
    {
        document.getElementById('success').innerHTML = "Captcha successfully verified."; 
        setTimeout(
            function()
            {
                document.getElementById('success').innerHTML =""; 
            },3000
        );
        enableButton();
        return true;
    }
    else
    {
        document.getElementById('error').innerHTML = "Please enter a valid captcha!";
        setTimeout(
            function()
            {
                document.getElementById('error').innerHTML =""; 
            },3000
        );
        generateCaptcha();
        document.getElementsByClassName('sub').disabled = true;
        return false;
    }
}

function removeSpaces(string)
{
    return string.split(' ').join('');
}

function enableButton()
{
    document.getElementById("sub").disabled = false;
}
