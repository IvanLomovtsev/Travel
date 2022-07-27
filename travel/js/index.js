const btnLogin = document.getElementById('myBtn');
const popup = document.querySelector('.pop_up');
const btnSign = document.getElementById('btnSign');
let run = -1000;

btnLogin.addEventListener('click', ()=>{
    run = run + 1030;
    popup.style.top = run + 'px';
})

document.getElementById('accaunt').addEventListener('click',function (e) {
    run = run + 1030;
    popup.style.top = run + 'px';
})

popup.addEventListener('click', (event)=>{
    if (event.target.classList.contains('pop_up')) {
        run = run - 1030;
        popup.style.top = run + 'px';
    }
})
btnSign.addEventListener('click', ()=>{
    var mail = document.getElementById('mail').value;
    var password = document.getElementById('password').value;
    let message='Email: '+mail+'\nPassword: '+password;
    alert(message);
})

document.getElementById('link_pop_up').addEventListener('click',function (e) {
    for (let i=0; i<document.getElementsByClassName('login').length; i++){
        document.getElementsByClassName('login')[i].style.display = "none";
    }  
    for (let y=0; y<document.getElementsByClassName('register').length; y++){
        document.getElementsByClassName('register')[y].style.display = "block";
    }
    document.getElementById('link_pop_up').style.display = "none";
    document.getElementsByClassName('line_in_bot')[0].style.margin = "20px auto auto auto";
    if( window.innerWidth < 1300 ){
        document.getElementsByClassName('register')[0].style.margin = "5% auto 5% auto"
        document.getElementsByClassName('login_pop_up')[0].style.height = "57vw";
    } else {
        document.getElementsByClassName('register')[0].style.margin = "25px auto 18px auto";
        document.getElementsByClassName('login_pop_up')[0].style.height = "436px";
    } 

    e.preventDefault();
})

/*document.getElementById('link_pop_up_log').addEventListener('click',function (m) {
    for (let j=0; j<document.getElementsByClassName('register').length; j++){
        document.getElementsByClassName('register')[j].style.display = "none";
    }  
    for (let t=0; t<document.getElementsByClassName('login').length; t++){
        document.getElementsByClassName('login')[t].style.display = "block";
    } 
    m.preventDefault();
})*/


let offset = 0;
const sliderLine = document.querySelector('.cards_of_place');
let check = 1;
document.getElementById('invisible_left').addEventListener('click', ()=>{
    offset = offset + 850;
    if (offset > 1600) {
        offset = 850;
    }
    sliderLine.style.left = -offset + 'px';
    check = check + 1;
    if (check > 2) {
        check = 2;
    }
    document.getElementsByName('places_dsk')[check].checked = true;
})

document.getElementById('invisible_right').addEventListener('click', ()=>{
    offset = offset - 850;
    if (offset < -1600) {
        offset = -850;
    }
    sliderLine.style.left = -offset + 'px';
    check = check - 1;
    if (check < 0) {
        check = 0;
    }
    document.getElementsByName('places_dsk')[check].checked = true;
})

check_mob = 0;
document.getElementById('right').addEventListener('click', ()=>{
    offset = offset + 400;
    if (offset > 900) {
        offset = 800;
    }
    sliderLine.style.left = -offset + 'px';
    check_mob = check_mob + 1;
    if (check_mob > 2) {
        check_mob = 2;
    }
    document.getElementsByName('places_mob')[check_mob].checked = true;
})
document.getElementById('left').addEventListener('click', ()=>{
    offset = offset - 400;
    if (offset < -300) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
    check_mob = check_mob - 1;
    if (check_mob < 0) {
        check_mob = 0;
    }
    document.getElementsByName('places_mob')[check_mob].checked = true;
})