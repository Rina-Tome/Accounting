
var genderSelect = document.getElementById("genderSelect");
let maleTable = document.getElementsByClassName('male-table');
let femaleTable = document.getElementsByClassName('female-table');

genderSelect.addEventListener("change", function() {
    let value = genderSelect.value;
    if (value === "female") {
        for (var i = 0; i < maleTable.length; i++) {
            // Do something with each element
            maleTable[i].style.display = "none";
        }

        for (var i = 0; i < femaleTable.length; i++) {
            // Do something with each element
            femaleTable[i].style.display = "";
        }

    } else if (value=='male'){

        for (var i = 0; i < maleTable.length; i++) {
            // Do something with each element
            maleTable[i].style.display = "";
        }

        for (var i = 0; i < femaleTable.length; i++) {
            // Do something with each element
            femaleTable[i].style.display = "none";
        }
    } else {
        for (var i = 0; i < maleTable.length; i++) {
            // Do something with each element
            maleTable[i].style.display = "none";
        }

        for (var i = 0; i < femaleTable.length; i++) {
            // Do something with each element
            femaleTable[i].style.display = "none";
        }
    }
});
genderSelect.dispatchEvent(new Event("change"));;