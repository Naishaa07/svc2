function Signout(){
    firebase.auth().signOut().then(()=>{
     location.href="HomePage2.html"
        })
}

var grade=localStorage.getItem('Grade')
document.getElementById("tooltiptext").innerHTML=localStorage.getItem('Name')+"<br> Grade : "+localStorage.getItem('Grade')
function changeSub(){
    document.getElementById("teachers").innerHTML=""
sub = document.getElementById("sub").value;
localStorage.setItem('sub', sub)
db.collection('users').get().then(

    (snapshot) => {

        snapshot.forEach(doc => {
            if (doc.data().studOrTeach === 'teacher' ) {
                if(doc.data().Subject===localStorage.getItem('sub') || doc.data().Subject2===localStorage.getItem('sub')
                || doc.data().Subject3==localStorage.getItem('sub')){
                    if(grade>5 && grade<9 && doc.data().Qualification==="6-8"){
                        document.getElementById("teachers").innerHTML+="<button id="+ doc.id+ " onclick='chat(this.id)'>Name : "+doc.data().Name+"<label> Qualification : "+doc.data().Qualification+"<label/><label> Subject : "+localStorage.getItem('sub')+"<label/></button><br>"               
                    }
                    if(grade>8 && grade<11 && doc.data().Qualification==="9-10"){
                        document.getElementById("teachers").innerHTML+="<button id="+ doc.id+ " onclick='chat(this.id)'>Name : "+doc.data().Name+"<label> Qualification : "+doc.data().Qualification+"<label/><label> Subject : "+localStorage.getItem('sub')+"<label/></button><br>"               
                    } 
                    if(grade>10 && grade<13 && doc.data().Qualification==="11-12"){
                        document.getElementById("teachers").innerHTML+="<button id="+ doc.id+ " onclick='chat(this.id)'>Name : "+doc.data().Name+"<label> Qualification : "+doc.data().Qualification+"<label/><label> Subject : "+localStorage.getItem('sub')+"<label/></button><br>"               
                    }
                }
                    
            }
           
        }); 
    }
    
)
}
function chat(clicked_id){

   localStorage.setItem('tId', clicked_id)
   alert(clicked_id)
    db.collection('users').doc(clicked_id).get(). then(function(snapshot){
    var Tname = (snapshot.data().Name);
    localStorage.setItem('Tname', Tname)
    location.href="Chat.html";
    })

}