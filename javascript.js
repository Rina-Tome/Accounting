let total = 0;
const checkboxes = document.querySelectorAll('.custom-control-input');
const inputs = Array.from(document.getElementsByClassName('custom-control-input'));

genderSelect.addEventListener("change", function() {

    let genderSelect = document.getElementById("genderSelect").value;
    let maleTable = document.getElementsByClassName('male-table');
    let femaleTable = document.getElementsByClassName('female-table');

    if (genderSelect === "female") {
        document.getElementById('table-of-girls').classList.remove('hide-table'); 
        document.getElementById('table-of-mans').classList.add('hide-table');
    } else if (genderSelect=='male'){
        document.getElementById('table-of-mans').classList.remove('hide-table');
        document.getElementById('table-of-girls').classList.add('hide-table');
    } else {
        document.getElementById('table-of-girls').classList.add('hide-table');
        ocument.getElementById('table-of-mans').classList.add('hide-table');
    }

    if (genderSelect === "female" || genderSelect === "male") {
        document.getElementById('total').classList.remove('hide-btn');
    } else {
        document.getElementById('total').classList.add('hide-btn');
    }

});

function myFunction() {
    total = 0;
    const inputs = Array.from(document.getElementsByClassName('custom-control-input'));
    inputs.forEach((input) => {
        if (input.checked) {
            if(!isNaN(input.value)){
                total += parseInt(input.value);
            }
         
        }
    });
    document.getElementById("total").innerHTML = " Total: " + total;

    inputs.forEach((input) => {
        if (input.checked) {
             input.checked = false;
        }
    });

} 
 