window.onload = ()=>{

    /// table of city
    const pays = "casa blanca,beni mellal,marakech,mohmmedia,tetouan,tanger,demnate".split(",")
    //// select input
    const select_input = document.getElementById("select")
    const message = document.getElementById("message")
    message.style.opacity=0;
    const ShowButton = document.getElementById("ShowButton")
    //// add values to select input
    pays.forEach(pay=>{
    let option = document.createElement("option")
    option.value = pay;
    option.textContent=pay;
    select_input.appendChild(option)

})

    ///add event handler (change)
    // select_input.onchange = (e)=>{
    //     ShowMessage();
        
    // }
    ShowButton.onclick=()=>{
        ShowMessage();
    }
    ShowMessage  = ()=>{
        message.style.opacity=1;
        let val = select_input.value;
        if(val == "error"){
            message.textContent  = "Selectionez une ville !!!";
            message.classList.add("error")
           
            return;
        }

            message.classList.remove("error")
        message.textContent  = "vous avez selectionez la ville \""+val+"\"";
        fetch(`/add/${val}`)
     
         
        // message.style.transform="scale(1)"
    }

    
}