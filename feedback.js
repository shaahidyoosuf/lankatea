// functioning of rating star 
var rate = "";
document.getElementById("star1").addEventListener("click",function(){
  
    document.getElementById("star1").src = "img/contact-images/star.png";
    document.getElementById("star2").src = "img/contact-images/star1.png";
    document.getElementById("star3").src = "img/contact-images/star1.png";
    document.getElementById("star4").src = "img/contact-images/star1.png";
    document.getElementById("star5").src = "img/contact-images/star1.png";
    rate="very poor"
});

document.getElementById("star2").addEventListener("click",function(){
    
    document.getElementById("star1").src = "img/contact-images/star.png";
    document.getElementById("star2").src = "img/contact-images/star.png";
    document.getElementById("star3").src = "img/contact-images/star1.png";
    document.getElementById("star4").src = "img/contact-images/star1.png";
    document.getElementById("star5").src = "img/contact-images/star1.png";
    rate="poor"
});
document.getElementById("star3").addEventListener("click",function(){
    
    document.getElementById("star1").src = "img/contact-images/star.png";
    document.getElementById("star2").src = "img/contact-images/star.png";
    document.getElementById("star3").src = "img/contact-images/star.png";
    document.getElementById("star4").src = "img/contact-images/star1.png";
    document.getElementById("star5").src = "img/contact-images/star1.png";
    rate="good"
});
document.getElementById("star4").addEventListener("click",function(){
   
    document.getElementById("star1").src = "img/contact-images/star.png";
    document.getElementById("star2").src = "img/contact-images/star.png";
    document.getElementById("star3").src = "img/contact-images/star.png";
    document.getElementById("star4").src = "img/contact-images/star.png";
    document.getElementById("star5").src = "img/contact-images/star1.png";
    rate="intermidiate"
});
document.getElementById("star5").addEventListener("click",function(){

    document.getElementById("star1").src = "img/contact-images/star.png";
    document.getElementById("star2").src = "img/contact-images/star.png";
    document.getElementById("star3").src = "img/contact-images/star.png";
    document.getElementById("star4").src = "img/contact-images/star.png";
    document.getElementById("star5").src = "img/contact-images/star.png";
    rate="Excellent"
    
});

document.getElementById("submit").addEventListener("click",function(){
    var name = document.getElementsByClassName("contact-form-text")[0].value;
    var email = document.getElementsByClassName("contact-form-text")[1].value;
    var contact = document.getElementsByClassName("contact-form-text")[2].value;
    var comment = document.getElementsByClassName("contact-form-text")[3].value;
    // validating the inputs
    if(name == ""){
        alert("Please fill the Name !");
    }else if (!/^[a-zA-Z]+$/.test(name)){
        alert("Please enter only letters")
    }
    else if (email == ""){
        alert("Please fill the Email !");
    }else if (email.lastIndexOf('@') < 1){
        alert("email is missing with @")
    }else if (contact == ""){
        alert("contact is not entered !")
    }else if(!/^[0-9]+$/.test(contact)){
        alert("input only numbers for contact")
    }else if(comment == ""){
        alert("please fill the comment")
    }else if(rate == ""){
        alert("Please rate !!!")
    }else{
        alert("Dear "+name+", Thank you very much for your feedback. You have rated our site as "+rate+" and thanks for your comments")
    }
    console.log(name)
    console.log(email)
    console.log(contact)
    console.log(comment)


})