var newPassword = document.getElementById("newPassword")
const email = localStorage.getItem('email')
const password = localStorage.getItem('password')
document.getElementById("newEmail").value = email;
document.getElementById("newPassword").value = password;
if (localStorage.getItem('sOrT') === "student") {
    var grade = localStorage.getItem('Grade')
    document.getElementById("tooltiptext").innerHTML = localStorage.getItem('Name') + "<br>" + "Grade : " + grade
    document.getElementById("field").innerHTML = "<label>Grade:</label><input type='number' class='form-control' id='grade' min='06' max='12' placeholder=" + grade + ">"
    document.getElementById("navbar").innerHTML = "<li><a href='AfterSignin.html' id='nav1'>Subjects</a></li><li><a href='AfterSignin.html' id='Chats'>Chats</a></li>"
"<li><a href='Teacher.html' id='nav2'>Teachers</a></li><li><a href='Community.html' id='nav2'>Community</a></li>"
} else {
    document.getElementById("tooltiptext").innerHTML = localStorage.getItem('Name') + "<br>" + "Teacher"
    var qualification = localStorage.getItem('qualification');   
    var subject1  = localStorage.getItem('sub1');
    var subject2  = localStorage.getItem('sub2');
    var subject3  = localStorage.getItem('sub3');
    document.getElementById("field").innerHTML = "<label>Grades:</label><br><select name='qualification' id='qual'><option value='6-8'>6-8</option><option value='9-10'>9-10</option><option value='11-12'>11-12</option></select><br><br>"+
    "<label>Subjects:</label><br><select name='subject' id='subject1'><option value='' disabled selected>Subject1</option><option value='English'>English</option><option value='Mathematics'>Mathematics</option><option value='Physics'>Physics</option><option value='Chemistry'>Chemistry</option><option value='Biology'>Biology</option></select><br>"+
    "<select name='subject' id='subject2'><option value=''>Subject 2</option><option value='English'>English</option><option value='Mathematics'>Mathematics</option><option value='Physics'>Physics</option><option value='Chemistry'>Chemistry</option><option value='Biology'>Biology</option></select><br>"+
    "<select name='subject' id='subject3'><option value=''>Subject 3</option><option value='English'>English</option><option value='Mathematics'>Mathematics</option><option value='Physics'>Physics</option><option value='Chemistry'>Chemistry</option><option value='Biology'>Biology</option></select><br>"
    document.getElementById("navbar").innerHTML = "<li ><a href='AfterSignin.html' id='nav1'>Grades</a></li>"
    +"<li><a href='tChat.html' id='nav2'>Chats</a></li><li><a href='Community.html' id='nav2'>Community</a></li>"
    document.getElementById("qual").value = qualification
    document.getElementById('subject1').value = subject1
    document.getElementById('subject2').value = subject2
    document.getElementById('subject3').value = subject3
}

document.getElementById("Updatebtn").addEventListener('click', e => {
    e.preventDefault();
    const newEmail = document.getElementById("newEmail").value
    const newPassword1 = document.getElementById("newPassword").value
    firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(function (userCredentials) {
            userCredentials.user.updateEmail(newEmail)
            userCredentials.user.updatePassword(newPassword1)
            if (localStorage.getItem('sOrT') === "teacher") {
                const qualValue = document.getElementById("qual").value
                const subject1 = document.getElementById('subject1').value
                const subject2 = document.getElementById('subject2').value
                const subject3 = document.getElementById('subject3').value
                console.log(subject2)
                db.collection("users").doc(userCredentials.user.uid).update({
                    Qualification: qualValue,
                    Subject: subject1,
                    Subject2:subject2,
                    Subject3: subject3
                }).then(e=>{
                    
                    localStorage.setItem('qualification', qualValue)
                })
                
            } else {
                const newGrade = document.getElementById('grade').value
                 db.collection("users").doc(userCredentials.user.uid).update({
                    Grade: newGrade
                }).then({})
                localStorage.setItem('Grade', newGrade)
            }
            alert("Your Profile has been updated")
        })


}
)

function show() {

    var icon = document.getElementById("icon")
    if (newPassword.type === "password") {
        newPassword.type = "text"
        icon.style.color = "grey"
    } else {
        newPassword.type = "password"
        icon.style.color = '#eeeeee';
    }
}
function Signout() {
    firebase.auth().signOut().then(() => {
        location.href = "HomePage2.html"
    })
}