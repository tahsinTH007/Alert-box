const ClickEle = document.querySelector('.click')
const PopUpBox = document.querySelector('.popup-box')
const Btn1Ele = document.querySelector('.btn1')
const Btn2Ele = document.querySelector('.btn2')

function ClickAlert(){
    PopUpBox.classList.add("show")
}

function RemoveAlert(){
    PopUpBox.classList.remove("show")
}

function AlertBox () {
    alert("Your account will be delete parmanently")
    PopUpBox.classList.remove("show")
    ClickEle.innerHTML = "Account Deleted";
}

ClickEle.addEventListener('click', ClickAlert);
Btn1Ele.addEventListener('click',RemoveAlert);
Btn2Ele.addEventListener('click' ,AlertBox);