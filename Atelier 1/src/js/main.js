window.onload=()=>{
window.INPUT_VALIDATION = {
    nom: false,
    pass : false,
    ville : false
}
    getID = (id) => {

        return document.getElementById(id);

    }
    Verification = (element_id,regEXP,validClass,invalidClass)=>{
        let ELEMENT = getID(element_id);
        ELEMENT.onkeyup = (e)=>{
            let VALUE = e.target.value;
            if(regEXP.test(VALUE)){

                ELEMENT.classList.remove(invalidClass)
                ELEMENT.classList.add(validClass)
                window.INPUT_VALIDATION[element_id] = true;
            }else{
                ELEMENT.classList.remove(validClass)
                ELEMENT.classList.add(invalidClass)
                window.INPUT_VALIDATION[element_id] = false;
               
            }

        }

    }
    let ERROR_MESSAGES = getID('error-messages')
 let NOM = getID('nom')
 let PASS = getID('pass')
 let VILLE = getID('ville')
    let ON_BUTTON = getID('on');
    let OFF_BUTTON = getID('off');
    let HIDDEN_DIV = getID('hidden-div');
    ON_BUTTON.onclick = ()=>{
        OFF_BUTTON.checked = false;
        HIDDEN_DIV.classList.remove('d-none')
        HIDDEN_DIV.classList.add('d-flex')

    }
    OFF_BUTTON.onclick = ()=>{
        ON_BUTTON.checked = false;
        HIDDEN_DIV.classList.remove('d-flex')
        HIDDEN_DIV.classList.add('d-none')

    }

    PASS.onblur = (e)=>{
        e.target.classList.remove('valid')
        e.target.classList.remove('invalid')

    }

    NOM.onblur = (e)=>{
        e.target.classList.remove('valid')
        e.target.classList.remove('invalid')

    }
    Verification('pass',/^\w{8,}$/,'valid','invalid');
    Verification('nom',/^\S+\w{8,32}$/,'valid','invalid');

    CONNECT = ()=>{
        ERROR_MESSAGES.innerHTML = ''
        if(!window.INPUT_VALIDATION.nom){
            ERROR_MESSAGES.innerHTML +='<span>le nom est invalid</span>'
        }
        if(!window.INPUT_VALIDATION.pass){
             ERROR_MESSAGES.innerHTML +='<span>le motedepass est invalid</span>'
            
        }
        if(!window.INPUT_VALIDATION.ville && ON_BUTTON.checked){
             ERROR_MESSAGES.innerHTML +='<span>la ville est invalid</span>'
            
         
        }


        if(window.INPUT_VALIDATION.nom && window.INPUT_VALIDATION.pass  && (window.INPUT_VALIDATION.ville || OFF_BUTTON.checked) ){
           ERROR_MESSAGES.innerHTML = ''
           
        }
    }



       /// table of city
       const pays = "casa blanca,beni mellal,marakech,mohmmedia,tetouan,tanger,demnate".split(",")
      
       pays.forEach(pay=>{
       let option = document.createElement("option")
       option.value = pay;
       option.textContent=pay;
       VILLE.appendChild(option)
       });



   
   VILLE.onchange = (e)=>{
    if(e.target.value == "error"){
       window.INPUT_VALIDATION.ville = false;
       
    }else{
        window.INPUT_VALIDATION.ville = true;
    }
        
    }
   

}