function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    
    return inputNumber;
}


function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}
document.getElementById('btn-donate-now')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = getInputFieldValueById('input-add-money');
        

        if(isNaN(addMoney)){
            alert('Failed to donate. Invalid amount');
            return;
        }
      
        if(addMoney > 0){
        
            const balance = getTextFieldValueById('account-balance');
            const newBalance = balance + addMoney;

            document.getElementById('account-balance').innerText = newBalance;

            // add to transaction history
            const div = document.createElement('div');
            div.style.border='thin solid #C7C6C5';
            div.style.fontWeight= 'bold' ;
            div.style.textAlign= 'center';
            div.innerHTML = `
                <p class="text-2xl">${addMoney} Taka Is Donated For Flood In Noakhali, Bangladesh</p>
            `

            document.getElementById('transaction-container').appendChild(div);
        
          
            const p = document.createElement('p');
            p.innerText = Date();
            console.log(p); 
            div.appendChild(p);
        }
        else{
            alert('Failed to donate. Invalid amount.')
        }

    })








function showSectionById(id){
    // hide all the sections
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    
    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}
document.getElementById('show-donation-section')
    .addEventListener('click', function () {
        showSectionById('donation-section');
    });

    document.getElementById('show-transaction-history')
    .addEventListener('click', function () {
        showSectionById('transaction-section');

    });

