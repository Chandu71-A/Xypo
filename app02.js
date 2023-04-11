let profileLogo01=document.getElementById('profileLogo01');
let profileLogo=document.getElementById('profileLogo');
let menuBarNavLinks=document.getElementById('menuBarNavLinks');
menuBarNavLinks.classList.add('d-none');
let cross=document.getElementById('cross');
let FoodArray=['H U N G R Y ? ?','O R D E R','G E T','E N J O Y ! !'];
let landingPageText=document.getElementById('landingPageText');
let maintext='F O O D';
profileLogo.addEventListener('click',function(){
    profileLogo.classList.toggle('d-none');
    menuBarNavLinks.classList.toggle('d-none');
});
cross.addEventListener('click',function(){
    profileLogo.classList.toggle('d-none');
    menuBarNavLinks.classList.toggle('d-none');
});
window.onload=function(){
    let i=0;
    let id=setInterval(() => {
        if(i<4){
            landingPageText.textContent=FoodArray[i];
            i++;
        }
        else{
            landingPageText.textContent=maintext;
        }
    }, 450);
}
let mainpage=document.getElementById('mainpage');
let signUppage=document.getElementById('singupPage');
let goBacksignUp=document.getElementById('goBack');
let singUpBtn=document.getElementById('signBtn');
let loginBtn=document.getElementById('loginBtn');
let LoginInputemail=document.getElementById('LoginInputemail');
let LoginInputpassword=document.getElementById('LoginInputpassword');
singUpBtn.addEventListener('click',function(){
    mainpage.classList.toggle('d-none');
    signUppage.classList.toggle('d-none');
})
goBacksignUp.addEventListener('click',function(){
    mainpage.classList.toggle('d-none');
    signUppage.classList.toggle('d-none');
})
loginBtn.addEventListener('click',function(){
    if(LoginInputemail.value==='' && LoginInputpassword.value===''){
        LoginInputemail.style.borderColor="red";
        LoginInputpassword.style.borderColor="red";

    }
    else if(LoginInputemail.value===''){
        LoginInputemail.style.borderColor="red"
    }
    else if( LoginInputpassword.value===''){
        LoginInputpassword.style.borderColor="red"
    }

})