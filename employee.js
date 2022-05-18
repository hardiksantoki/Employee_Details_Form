var Gujarat = ["Ahmedabad", "Amreli", "Anand", "Bhavnagar", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kutch", "Morbi", "Navsari", "Porbandar", "Rajkot", "Surat", "Vadodara"];
var UttarPradesh = ["Agra", "Aligarh", "Ghaziabad", "Ghazipur", "Hathras", "Jhansi", "Kasganj", "Lucknow", "Mathura", "Varanasi"];
var Delhi = ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "Shahdara", "South Delhi", "West Delhi"];
var Punjab = ["Amritsar", "Firozpur", "Jalandhar", "Ludhiana", "Pathankot", "Patiala"];
var Rajasthan = ["Alwar", "Bharatpur", "Chittorgarh", "Jaipur", "Jaisalmer", "Kota", "Udaipur"];
var JammuKashmir = ["Anantnag", "Jammu", "Kargil", "Leh", "Pulwama", "Srinagar"];



function statefn() {
    var StateSelected = document.getElementById('inputState').value;
    //console.log(optionsList);
    var optionsList = StateSelected;
    var htmlString = "";

    switch (StateSelected) {
        case "Gujarat":
            optionsList = Gujarat;
            break;
        case "Uttar Pradesh":
            optionsList = UttarPradesh;
            break;
        case "Delhi":
            optionsList = Delhi;
            break;
        case "Punjab":
            optionsList = Punjab;
            break;
        case "Rajasthan":
            optionsList = Rajasthan;
            break;
        case "Jammu and Kashmir":
            optionsList = JammuKashmir;
            break;
    }

    for (var i = 0; i < optionsList.length; i++) {
        htmlString = htmlString + "<option value='" + optionsList[i] + "'>" + optionsList[i] + "</option>";
    }
    document.getElementById('city').innerHTML = htmlString;
}


//validation
function zzz() {
    flag = true;
    //validation for name
    let nm = document.getElementById('name').value;
    if (nm == "") {
        document.getElementById('err-nm').innerHTML = "Please Enter value";
        flag = false;

    }
    else if (!nm.match(/^[A-Za-z\s]*$/)) {
        document.getElementById('err-nm').innerHTML = "spacial character and number not allowed";
        flag = false;
    }
    else {
        document.getElementById('err-nm').innerHTML = "";
    }

    //email validation
    let em = document.getElementById('email').value;
    if (em == "") {
        document.getElementById('err-em').innerHTML = "Please Enter value";
        flag = false;
    }
    else if (!em.match(/^([a-z][a-z0-9]+)@([a-z0-9]+).([a-z]+)*$/)) {
        document.getElementById('err-em').innerHTML = "Enter VAlid Formate";
        flag = false;
    }
    else {
        document.getElementById('err-em').innerHTML = "";
    }

    //mobile number validation
    let mn = document.getElementById('mobile').value;
    if (mn == "") {
        document.getElementById('err-mn').innerHTML = "Please Enter value";
        flag = false;
    }
    else if (!mn.match(/^[0-9]{10}$/)) {
        document.getElementById('err-mn').innerHTML = "spacial character and number not allowed and length must be 10";
        flag = false;
    }
    else {
        document.getElementById('err-mn').innerHTML = "";
    }

    //Empcode validation
    let ecode = document.getElementById('empcode').value;
    if (ecode == "") {
        document.getElementById('err-empcode').innerHTML = "Please Enter value";
        flag = false;
    }
    else if (!ecode.match(/^[A-Z]{3}[A-Z0-9]*$/)) {
        document.getElementById('err-empcode').innerHTML = "spacial character not allowed";
        flag = false;
    }
    else {
        document.getElementById('err-empcode').innerHTML = "";
    }
    if (ecode) {
        var getting = JSON.parse(localStorage.getItem("hardik"));
        // console.log(getting.length);
        if (getting != null) {


            for (let i = 0; i < getting.length; i++) {
                //console.log(getting[i]);
                var v = Object.values(getting[i]);
                // for (let j = 0; j < v.length; j++) {
                // console.log(v[j]);
                //console.log(ecode);
                if (ecode == v[3]) {
                    document.getElementById('err-empcode').innerHTML = "This Code is alrady exist";
                    flag = false;
                    break;
                }
                else {
                    document.getElementById('err-empcode').innerHTML = "";
                }
            }

        }
    }



    //gender validation
    let g = document.getElementById('gender').value;
    if (g == "") {
        document.getElementById('err-gender').innerHTML = "Please select one option";
        flag = false;
    }
    else {
        document.getElementById('err-gender').innerHTML = "";
    }

    //country validation
    let count = document.getElementById('country').value;
    if (count == "") {
        document.getElementById('err-country').innerHTML = "Please select one option";
        flag = false;
    }
    else {
        document.getElementById('err-country').innerHTML = "";
    }

    //State validation
    let stt = document.getElementById('inputState').value;
    if (stt == "") {
        document.getElementById('err-state').innerHTML = "Please select one option";
        flag = false;
    }
    else {
        document.getElementById('err-state').innerHTML = "";
    }

    //city validation
    // if(document.getElementById('inputState').value!=""){

    //     let ct = document.getElementById('city').value;
    //     if (ct == "") {
    //         document.getElementById('err-city').innerHTML = "Please select one option";
    //         flag = false;
    //     }
    //     else {
    //         document.getElementById('err-city').innerHTML = "";
    //     }
    // }

    return flag;
}


function save() {

    if (zzz()) {
        let nm = document.getElementById('name').value;
        let em = document.getElementById('email').value;
        let mn = document.getElementById('mobile').value;
        let ecode = document.getElementById('empcode').value;
        let g = document.getElementById('gender').value;
        let country = document.getElementById('country').value;
        let state = document.getElementById('inputState').value;
        let city = document.getElementById('city').value;
        var temp = {
            "name": nm,
            "email": em,
            "mobile Number": mn,
            "employee code": ecode,
            "gender": g,
            "country": country,
            "state": state,
            "city": city
        }
        // var v = { }
        // temp.push(v);
        // var data = JSON.stringify(temp);
        //var save = new Object();
        let bookData = localStorage.getItem("hardik") ? JSON.parse(localStorage.getItem("hardik")) : []
        //  [nm,em,mn,ecode,g];
        //var save = new Object();
        bookData.push(temp);
        console.log(bookData);
        localStorage.setItem("hardik", JSON.stringify(bookData));

    }
    else {
        return false;
    }
}


//searching
function search() {
    var z = true;
    var getting = JSON.parse(localStorage.getItem("hardik"));
    var names = document.getElementById("search-1").value;
    var email = document.getElementById("search-2").value;
    var mobile = document.getElementById("search-3").value;
    var ec = document.getElementById("search-4").value;
    var ft = document.getElementsByName("mm");
    var arr = [names, email, mobile, ec];
    if (names == "" && email == "" && mobile == "" && ec == "") {
        return document.getElementById('search-err').innerHTML = "please enter details";
    }
    else if (getting == null) {
        return document.getElementById('search-err').innerHTML = "data not found.";
    }
    else {
        document.getElementById('search-err').innerHTML = "";
    }
    // console.log(ft);
    // console.log(names);
    for (let i = 0; i < getting.length; i++) {
        // console.log(getting[i]);
        var v = Object.values(getting[i]);
        // console.log(v.length);
        //console.log(ft.length);

        for (let j = 0; j < v.length; j++) {
            //console.log(arr[j]);
            //console.log(v[0]);
            // if(arr[j]!=v[j]){
            //     document.getElementById('search-err').innerHTML="data not found.";
            // }
            if (arr[j] == v[j]) {
                for (let n = 0; n < v.length - 1; n++) {
                    switch (v[n]) {
                        // case "male":
                        //     document.getElementById('search-5').value = 1;
                        //     break;

                        // case "female":
                        //     document.getElementById('search-5').value = 2;
                        //     break;

                        // case "india":
                        //     document.getElementById('search-6').value = 1;

                        case "Gujarat": {
                            document.getElementById('search-7').value = "Gujarat";
                            for (let i = 0; i < Gujarat.length; i++) {
                                if (v[n + 1] == Gujarat[i]) {
                                    var htmlString = '<option value="1">' + Gujarat[i] + ' </option>';
                                    document.getElementById('search-8').innerHTML = htmlString;
                                    document.getElementById('search-8').value = 1;
                                    break;
                                }
                            }
                            break;
                        }
                        case "Uttar Pradesh":
                            document.getElementById('search-7').value = "Uttar Pradesh";
                            for (let i = 0; i < UttarPradesh.length; i++) {
                                if (v[n + 1] == UttarPradesh[i]) {
                                    var htmlString = '<option value="1">' + UttarPradesh[i] + ' </option>';
                                    document.getElementById('search-8').innerHTML = htmlString;
                                    document.getElementById('search-8').value = 1;
                                    break;
                                }
                            }
                            break;
                        case "Delhi":
                            document.getElementById('search-7').value = "Delhi";
                            for (let i = 0; i < Delhi.length; i++) {
                                if (v[n + 1] == Delhi[i]) {
                                    var htmlString = '<option value="1">' + Delhi[i] + ' </option>';
                                    document.getElementById('search-8').innerHTML = htmlString;
                                    document.getElementById('search-8').value = 1;
                                    break;
                                }
                            }
                            break;
                        case "Punjab":
                            document.getElementById('search-7').value = "Punjab";
                            for (let i = 0; i < Punjab.length; i++) {
                                if (v[n + 1] == Punjab[i]) {
                                    var htmlString = '<option value="1">' + Punjab[i] + ' </option>';
                                    document.getElementById('search-8').innerHTML = htmlString;
                                    document.getElementById('search-8').value = 1;
                                    break;
                                }
                            }
                            break;
                        case "Rajasthan":
                            document.getElementById('search-7').value = "Rajasthan";
                            for (let i = 0; i < Rajasthan.length; i++) {
                                if (v[n + 1] == Rajasthan[i]) {
                                    var htmlString = '<option value="1">' + Rajasthan[i] + ' </option>';
                                    document.getElementById('search-8').innerHTML = htmlString;
                                    document.getElementById('search-8').value = 1;
                                    break;
                                }
                            }
                            break;
                        case "Jammu and Kashmir":
                            document.getElementById('search-7').value = "Jammu and Kashmir";
                            for (let i = 0; i < JammuKashmir.length; i++) {
                                if (v[n + 1] == JammuKashmir[i]) {
                                    var htmlString = '<option value="1">' + JammuKashmir[i] + ' </option>';
                                    document.getElementById('search-8').innerHTML = htmlString;
                                    document.getElementById('search-8').value = 1;
                                    break;
                                }
                            }
                            break;
                        // case "Jamnagar":
                        //     var htmlString = '<option value="1"> Jamnagar </option>';
                        //     document.getElementById('search-8').innerHTML = htmlString;
                        //     document.getElementById('search-8').value = 1;
                        //     break;

                        //console.log(document.getElementById('search-8').value);
                        default: {
                            // if (n == 7) {
                            //     break;
                            // } else {
                            ft[n].value = v[n];
                            z = false;
                            break;
                            // }
                        }
                    }
                    // if(document.getElementById('search-7').value!=""){
                    //     statefnSearch();
                    // }
                    /*  if (v[n] == "male") {
                          document.getElementById('search-5').value = 1;
                      }
                      else if (v[n] == "female") {
                          document.getElementById('search-5').value = 2;
                      }
                      else {
                          ft[n].value = v[n];
                      }*/
                    //console.log(ft[n].value);
                }
                // for(let n=0 ; n<v.length; n++){}
                // document.getElementById("search-em").value = v[j];
                //break;
                //return;

            }
            // else{
            //     document.getElementById("search-err").innerHTML="ddddd0";
            // }
        }
        if (z) {
            document.getElementById("search-err").innerHTML = "data not found";
        }
        else {
            document.getElementById("search-err").innerHTML = "";
        }
    }
    // console.log(getting.length);
    //document.write(getting.split();
}



//localStorage.setItem("name",nm);
function statefnSearch() {
    var StateSelected = document.getElementById('search-7').value;
    //console.log(optionsList);
    var optionsList = StateSelected;
    var htmlString = "";

    switch (StateSelected) {
        case "Gujarat":
            optionsList = Gujarat;
            break;
        case "Uttar Pradesh":
            optionsList = UttarPradesh;
            break;
        case "Delhi":
            optionsList = Delhi;
            break;
        case "Punjab":
            optionsList = Punjab;
            break;
        case "Rajasthan":
            optionsList = Rajasthan;
            break;
        case "Jammu and Kashmir":
            optionsList = JammuKashmir;
            break;
    }

    for (var i = 0; i < optionsList.length; i++) {
        htmlString = htmlString + "<option value='" + optionsList[i] + "'>" + optionsList[i] + "</option>";
    }
    document.getElementById('search-8').innerHTML = htmlString;
}