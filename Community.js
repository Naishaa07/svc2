if (localStorage.getItem('sOrT') === "student") {
    document.getElementById("tooltiptext").innerHTML = localStorage.getItem('Name') + "<br>" + localStorage.getItem('Grade')
    document.getElementById("navbar").innerHTML = "  <li><a href='AfterSignin.html' id='nav1'>Subjects</a></li> <li ><a href='Teacher.html' id='nav2'>Teachers</a></li><li class='active'><a href='Community.html' id='nav2'>Community</a></li>"
} else {
    document.getElementById("tooltiptext").innerHTML = localStorage.getItem('Name') + "<br>" + "Teacher"
    document.getElementById("navbar").innerHTML = "  <li><a href='AfterSignin.html' id='nav1'>Grades</a></li> <li ><a href='Teacher.html' id='nav2'>Chats</a></li><li class='active'><a href='Community.html' id='nav2'>Community</a></li>"
}
function Signout() {
    firebase.auth().signOut().then(() => {
        location.href = "HomePage2.html"
    })
}
function grade1(){
if(document.getElementById("sub").value=='teacher'){
    document.getElementById("grade").innerHTML=" <select name='sub' id='grades' onchange='changeSub()'><option value='' disabled selected>Grade</option><option value='6-8'>6-8</option> <option value='9-10'>9-10</option> <option value='11-12'>11-12</option><option value=''>All</option></select>"
}else{
    document.getElementById("grade").innerHTML=" <input type='number' class='form-control' id='grades' min='06' max='12' placeholder='Grade' onchange='changeSub()'>"
}}
var grade = localStorage.getItem('Grade')
function changeSub() {
    
    document.getElementById("teachers").innerHTML = ""
    sub = document.getElementById("sub").value;
    localStorage.setItem('sub', sub)
    db.collection('users').get().then(

        (snapshot) => {

            snapshot.forEach(doc => {
                if (sub === "teacher") {

                    if (doc.data().studOrTeach === 'teacher') {         
                        if(document.getElementById("grades").value== doc.data().Qualification || document.getElementById("grades").value=='' ){          
                        if (localStorage.getItem('sOrT') === 'teacher') {
                            if (doc.data().Subject3 == "" && doc.data().Subject2 !== "") {
                                document.getElementById("teachers").innerHTML += "<button id=" + doc.id + " >Name : "
                                + doc.data().Name + "<label> Grades : " + doc.data().Qualification + "<label/><label> Subject : " + doc.data().Subject
                                + ' , ' + doc.data().Subject2 + "<label/><label>Email : "+ doc.data().Email + "<label/></button><br>"
                            }
                            if (doc.data().Subject3 !== "" && doc.data().Subject2 !== "") {
                                document.getElementById("teachers").innerHTML += "<button id=" + doc.id + " onclick='chat(this.id)'>Name : "
                                    + doc.data().Name + "<label> Grades : " + doc.data().Qualification + "<label/><label> Subject : " + doc.data().Subject
                                    + ' , ' + doc.data().Subject2 + ' , ' + doc.data().Subject3 + "<label/><label>Email : "
                                    + doc.data().Email + "<label/></button><br>"
                            }
                            if (doc.data().Subject3 == "" && doc.data().Subject2 == "") {
                                document.getElementById("teachers").innerHTML += "<button id=" + doc.id + " onclick='chat(this.id)'>Name : "
                                    + doc.data().Name + "<label> Grades : " + doc.data().Qualification + "<label/><label> Subject : " + doc.data().Subject
                                    + "<label/><label>Email : " + doc.data().Email + "<label/></button><br>"
                            }
                            if (doc.data().Subject3 !== "" && doc.data().Subject2 == "") {
                                document.getElementById("teachers").innerHTML += "<button id=" + doc.id + " onclick='chat(this.id)'>Name : "
                                    + doc.data().Name + "<label> Grades : " + doc.data().Qualification + "<label/><label> Subject : " + doc.data().Subject
                                    + ' , ' + doc.data().Subject3 + "<label/><label> Email : " + doc.data().Email + "<label/></button><br>"
                            }
                        }
                        if (localStorage.getItem('sOrT') === 'student') {
                            if (doc.data().Subject3 == "" && doc.data().Subject2 !== "") {
                                document.getElementById("teachers").innerHTML += "<button id=" + doc.id + " >Name : "
                                    + doc.data().Name + "<label> Grades : " + doc.data().Qualification + "<label/><label> Subject : " + doc.data().Subject
                                    + ' , ' + doc.data().Subject2 + "<label/></button><br>"
                            }
                            if (doc.data().Subject3 !== "" && doc.data().Subject2 !== "") {
                                document.getElementById("teachers").innerHTML += "<button id=" + doc.id + " >Name : "
                                    + doc.data().Name + "<label> Grades : " + doc.data().Qualification + "<label/><label> Subject : " + doc.data().Subject
                                    + ' , ' + doc.data().Subject2 + ' , ' + doc.data().Subject3 + "<label/></button><br>"
                            }
                            if (doc.data().Subject3 == "" && doc.data().Subject2 == "") {
                                document.getElementById("teachers").innerHTML += "<button id=" + doc.id + " >Name : "
                                    + doc.data().Name + "<label> Grades : " + doc.data().Qualification + "<label/><label> Subject : " + doc.data().Subject
                                    + "<label/></button><br>"
                            }
                            if (doc.data().Subject3 !== "" && doc.data().Subject2 == "") {
                                document.getElementById("teachers").innerHTML += "<button id=" + doc.id + " >Name : "
                                    + doc.data().Name + "<label> Grades : " + doc.data().Qualification + "<label/><label> Subject : " + doc.data().Subject
                                    + ' , ' + doc.data().Subject3 + "<label/></button><br>"
                            }
                        }}
                    }
                }
                if (sub === "student") {
                    if(document.getElementById("grades").value== doc.data().Grade || document.getElementById("grades").value=='' ){          
                    if (doc.data().studOrTeach == 'student') {
                        console.log(document.getElementById("grades").value)
                        if (localStorage.getItem('sOrT') === 'teacher') {
                            document.getElementById("teachers").innerHTML += "<button id=" + doc.id + ">Name : "
                                + doc.data().Name + "<label> Grades : " + doc.data().Grade + "<label/</button><br>"
                        }
                        if (localStorage.getItem('sOrT') === 'student') {
                            document.getElementById("teachers").innerHTML += "<button id=" + doc.id + ">Name : "
                                + doc.data().Name + "<label> Grades : " + doc.data().Grade + "<label/><label> Email : " + doc.data().Email + "<label/></button><br>"
                        }
                    }
                 } }
            });
        }

    )
}
