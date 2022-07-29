const button= document.getElementById('button')
const username = document.getElementById('Username')
const date = document.getElementById('Date')
const pedple = document.getElementById('Pedple')
const email = document.getElementById('Email')
const time = document.getElementById('Time')

button.addEventListener('click', (event)=>{
    event.preventDefault()
   chek()
})

function chek(){
    if(username.value ==''){
        errorVal(username, 'Preencha o campo')
    }

    else{
     success(username)
    }

    if(email.value ==''){
        errorVal(email, 'Preencha o campo')
    }

    else if(email.value.indexOf("@")==-1 || email.value.indexOf(".") ==-1 ||(email.value.indexOf("@")-email.value.indexOf(".")==1)){
        errorVal(email, 'verifica os dados')

    }

    else{
     success(email)
    }

    if(date.value==''){
        errorVal(date, 'Preencha o campo')
    }

    else{
        success(date)
    }

    if(pedple.value==''){
        errorVal(pedple, 'Preencha o campo')
    }

    else{
        success(pedple)
    }

    if(time.value==''){
        errorVal(time, 'Preencha o campo')
    }

    else{
        success(time)
    }

}

function errorVal(input, mensage){
    const formControl= input.parentElement
    const small= formControl.querySelector('small')

    small.innerText = mensage 
    
    formControl.className='form-control Error'
}

function success(input){
    const formControl = input.parentElement
    formControl.className='form-control success'

}