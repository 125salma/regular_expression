const CheckEmail=()=>{
   const inputField = document.getElementById('input-Frame');
   const inputText = inputField.value;
   //console.log(inputText)

//regular expression 
  const regularEx = /(?:[^`!@#$%^&*\-_=+'\/.,]*[`!@#$%^&*\-_=+'\/.,]){2}/.test(inputText);

 const error = document.getElementById('error-sms')
 const div= document.createElement('div')

 error.textContent=''

 if(!regularEx){
   div.innerHTML=`
    <p>Not Valid Email</p>
   `
   error.appendChild(div)
   document.getElementById('error-sms').style.color='red';
 }
 
 else{
   
   div.innerHTML=`
   <p>Valid Email</p>
  `
  error.appendChild(div)
  document.getElementById('error-sms').style.color='green';
 }

 //clear input value
   inputField.value='';
  
}

