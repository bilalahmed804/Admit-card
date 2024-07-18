let input = document.querySelector("#input");

let email = document.querySelector("#email");

let selectOption = document.querySelector("#selectOpt");

let ageNumber = document.querySelector("#number");

let card = document.querySelector(".card_One");


let button = document.querySelector(".button");
button.addEventListener('click',function(){
    let serialNum = Math.floor(Math.random()*2698755)
    // console.log(`SN${serialNum}`);
    let userImage$ = document.querySelector("#imageOne");
     let userImage = JSON.stringify(userImage$.value)
    
    let genderValue = document.querySelector('.myForm')
    //  console.log(genderValue.value);

    let userObj = [
        {SerialNumber:`SN${serialNum}`},
        {userImage:userImage},
        {Name: input.value},
        { Email:email.value},
        {Age:ageNumber.value},
        {Gender:genderValue.value},
        {Coures:selectOption.value}
        
    ]
    let userData = JSON.stringify(userObj);
    
    localStorage.setItem(`SN${serialNum}`,userData)
    
    
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        // console.log(key);
        
        let userObject = JSON.parse(localStorage.getItem(key));
        let imagPath = JSON.parse(userObject[1].userImage)
        console.log(imagPath);
    console.log(userObject);
    
        
        card.innerHTML += `<div class="card"><h1 class="admit">Admit Card</h1><img id="imge" src="${imagPath}" alt="image">
        <span>${userObject[0].SerialNumber}</span>
        <p>Name<b>:</b> ${userObject[2].Name}</p>
        <p>Age<b>:</b> ${userObject[4].Age}</p>
        <p>Gender<b>:</b>${userObject[5].Gender}</p>
        <p>Email<b>:</b> ${userObject[3].Email}</p>
        <p>Course<b>:</b> ${userObject[6].Coures}</p>
        </div>`
        
        
    }
    
    let dropselect = document.querySelector(".select1")
    input.value = "";
    email.value = "";
    ageNumber.value = "";
    selectOption.value = dropselect.value;
    userImage$.value = "";
    
})
