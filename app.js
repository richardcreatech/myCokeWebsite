const theProducts = [
   
    {
        id: 'drink' + 2,
        name: 'Fanta',
        img: "./img/Fanta.png",
        drinkType: 'Fanta'
    }
    ,

    {
        id: 'drink' + 3,
        name: 'Dasani',
        img: "./img/dasani.png",
        drinkType: 'Dasani'
    }
    ,

    {
        id: 'drink' + 4,
        name: 'Sprite',
        img: './img/sprite.png' ,
        drinkType: 'Sprite'
    }
    ,
    
    {
        id: 'drink' + 5,
        name: 'Vitamin Water',
        img: './img/vitaminWater.png',
        drinkType: 'Vitamin'
    }
    ,
    
    {
        id: 'drink' + 6,
        name: 'Appletizers',
        img: './img/Appletizers.png', 
        drinkType: 'Appletizers'
    }
];

console.log(theProducts[0].id);

const listOfproducts = document.getElementsByClassName('listOfproducts')[0];

for(let i = 0; i < theProducts.length; i++){
    let MPI = theProducts[i];
    listOfproducts.innerHTML += `
    <div title="${MPI.name}" id="${MPI.id}" class="theProduct">
    <img src="${MPI.img}" alt="">
    <span id=${MPI.drinkType} class="seeMore  ${MPI.drinkType}">See more</span>
    </div>
    `;
    /* for(let k = 0; k < seeMore.length; k++){

    } */


}
const seeMore = document.getElementsByClassName('seeMore');
const myDrinkPopUp = document.querySelector('.myDrinkPopUp');
const drinkInner = document.getElementById('drinkInner');

for(let i = 0; i < seeMore.length; i++){
    let MPI = theProducts[i];
    
    seeMore[i].onclick = () => {
        console.log(seeMore[i]);
    }

    if(seeMore[i].classList.contains('Fanta')){
        seeMore[i].onclick = function (){
            
            myDrinkPopUp.classList.toggle('myDrinkPopDown');

            drinkInner.innerHTML = `
            <img src="./marbles/standbyFanta.jpg" alt="">

            <div class="drinkText">
                <h1>
                    <span class="Orangish">D</span>ripping with deliciousness. Fanta?
                </h1>                
                <p>It's like the taste of summer on your tongue</p>
                <a href="#"><button class="visitButton">Visit</button></a>

            </div>
            `;
        } 
    }

    // appletizerMarble

    else if(seeMore[i].classList.contains('Dasani')){
        seeMore[i].onclick = function (){
            
            myDrinkPopUp.classList.toggle('myDrinkPopDown');

            drinkInner.innerHTML = `
            <img src="./marbles/dasaniMarble.jpg" alt="">

            <div class="drinkText">
                <h1>
                    <span class="Bluish">D</span>rip D</span>rip
                </h1>                
                <p>

                From untouched springs to your hands, Dansani delivers clean, balanced hydration for those who value purity and mindful living.

                </p>
                <a href="#"><button class="visitButton">Visit</button></a>

            </div>
            `;
        } 
    }

    else if(seeMore[i].classList.contains('Sprite')){
        seeMore[i].onclick = function (){
            
            myDrinkPopUp.classList.toggle('myDrinkPopDown');

            drinkInner.innerHTML = `
            <div class="drinkText">
                <h1 >
                <span class="Greenish">
                    Lime Vibes
                    </span>
                </h1>                
                <p>
                "Uncap the chill. Sprite refreshes your senses with electric citrus energy."
                </p>
                <a href="#"><button class="visitButton">Visit</button></a>
            </div>

            <img src="./marbles/spriteMarble.jpg" alt="">

            `;
        } 
    }

    else if(seeMore[i].classList.contains('Vitamin')){
        seeMore[i].onclick = function (){
            
            myDrinkPopUp.classList.toggle('myDrinkPopDown');

            drinkInner.innerHTML = `
            <div class="drinkText">
            <img src="./marbles/vitaminMarble.jpg" alt="">
                <h1 >
                <span class="Purplish">
                    Lime Vibes
                    </span>
                </h1>                
                <p>Stay Active All Day E'r day</p>
                <a href="#"><button class="visitButton">Visit</button></a>
            </div>


            `;
        } 
    }

    else if(seeMore[i].classList.contains('Appletizers')){
        seeMore[i].onclick = function (){
            
            myDrinkPopUp.classList.toggle('myDrinkPopDown');

            drinkInner.innerHTML = `
            <img src="./marbles/appletizerMarble.jpg" alt="">

            <div class="drinkText">
                             
                <p>Anything fizz your fancy</p>

                <a href="#"><button class="visitButton">Visit</button></a>

            </div>
            `;
        } 
    }


    
    
    
}


console.log(seeMore[0]);

const footerOpen = document.getElementsByClassName('footer-open')[0];
const closeMe = document.querySelector('.closeMe');



closeMe.onclick= () => {
    footerOpen.classList.toggle('footer-close');
    
}


const submitButton = document.getElementById('submitButton');

let frms = document.forms["myForm"];
const signUp = document.querySelector('.signUp');

const audioList=[
    {
        src: "./pop.mp3"
    }
]


submitButton.onclick = (e) => {
    const inputChecker =  frms["date"].value =='' || frms['fullName'].value  == '' || frms['emailAddress'].value == '' || frms['phoneNumber'].value == '';
    
    if(inputChecker){
        e.preventDefault();
        alert('Empty field');
    }
    else{
        e.preventDefault();
        signUp.innerHTML = `<span class='Welcome'>Welcome! ${frms.fullName.value}</span>`
        signUp.innerHTML+=`
        <audio src="${audioList[0].src}" autoplay></audio>
        `
    }
}


let quarterSection = false;
let missionsPageSpacing = document.querySelector('.missionsPageSpacing');
let missionsPage = document.querySelector('.missionsPage');

let divideHeadQuarters = document.querySelector('.divideHeadQuarters');
let cokeApp = document.querySelector('.cokeApp');
let familySection = document.querySelector('.familySection');


missionsPageSpacing.style.display ='none';

missionsPage.addEventListener('mouseover', () => {
    
    quarterSection = true;
    
    if(quarterSection){
        missionsPageSpacing.style.display ='block';

        divideHeadQuarters.classList.add('addQuarters');

        setTimeout(() => {
            cokeApp.classList.add('addCoke');   
        },500);

        
        
        setTimeout(() => {
            familySection.classList.add('addFamilySection');   
        },1500)
        
    
        
    }

    
})

const closeMe2 = document.getElementById('closeMe2');

document.addEventListener('keydown', (e) => {
    if(e.key == "Escape"){
        myDrinkPopUp.classList.toggle('myDrinkPopDown');
    }
})

closeMe2.onclick = () => {
    myDrinkPopUp.classList.toggle('myDrinkPopDown');
}
"mouseover"


const dockMenu = document.querySelector('.dockMenu');
const navigationLayer = document.querySelector('.navigationLayer');

dockMenu.onclick = () => {
    if(navigationLayer.style.display !=='none'){
    navigationLayer.style.display ='none';
}

else{
    navigationLayer.style.display ='flex';
}

}
