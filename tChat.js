var uid = localStorage.getItem('uid')
           

db.collection('users').doc(uid).get().then((snapshot)=>{
    var Name=snapshot.data().Name
    document.getElementById("tooltiptext").innerHTML=Name+"<br>"+"Teacher"
    for(var i=-1;i<snapshot.data().Chats.length;i++){
        console.log(snapshot.data().Chats[i])
        db.collection('users').doc(snapshot.data().Chats[i]).get().then(snapshot=>{
            console.log(snapshot.id)
            document.getElementById("buttons").innerHTML+="<button id="+ snapshot.id+" onclick='clicked(this.id)' >"+snapshot.data().Name+"</button>"
        })
        
         
    }
  
})
function clicked(clicked_id){
    alert(clicked_id)
    localStorage.setItem('sId', clicked_id)
    location.href="Chat.html"
}  
function Signout(){
    firebase.auth().signOut().then(()=>{
     location.href="HomePage2.html"
        })
}
