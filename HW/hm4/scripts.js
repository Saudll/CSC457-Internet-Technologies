//--2--
//create the contact form opject

var cform = document.getElementById('cform');

cform.onsubmit = function(event) {
 var name = document.getElementById('name').value;
 var email = document.getElementById('email').value;
 
 //ملاحظة الالمنت الاسم والايميل هي من نفسها ترفض انها تكون فاضية لكن اضفت الي تحت عشان متطلب الواجب


 if(name == '' || email == ''){
    alert("Please fill out all required fields.")

    event.preventDefault();
    return false;
 }
 console.log("submiting the data");
 return true;


}