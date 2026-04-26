//--2--
//create the contact form opject

var cform = document.getElementById('cform');
 if(cform){
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


}}
//--3--

function ShowDescrp(id){
var descrp = document.getElementById(id);
 if(descrp){
   if(descrp.style.display == "none")
      descrp.style.display = "block";
   else
      descrp.style.display = "none";
   }}

//--4--

var cvQ = document.getElementById('cv-quote');
var OriBackGround = cvQ.style.backgroundColor;
var OriFont = cvQ.style.fontStyle;
 if(cvQ){
   cvQ.addEventListener('mouseover', function() {
         cvQ.style.backgroundColor = '#f0f8ff'; 
         cvQ.style.fontStyle = 'italic';
         cvQ.style.fontWeight = 'bold';
      });

   cvQ.addEventListener('mouseout', function() {
         cvQ.style.backgroundColor = OriBackGround;
         cvQ.style.fontStyle = OriFont;
         cvQ.style.fontWeight = 'normal';
      })};

//--5--

window.onload = function() {
    var newElement = document.createElement("p");

    var currentTime = new Date();
    
    var message = document.createTextNode("Page loaded on: " + currentTime.toLocaleString());
    
    newElement.appendChild(message);
    
    var footerElement = document.querySelector("footer");

    if (footerElement) {
        footerElement.appendChild(newElement);
    }
};
