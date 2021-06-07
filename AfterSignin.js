function subject(button_clicked) {
    localStorage.setItem("clickedSubject", button_clicked)
    location.href = "Questions.html";
}

function Tsubject(button_clicked) {

    location.href = "Questions.html";
    var signinGrade = document.getElementById(button_clicked).value;
    alert(signinGrade)
    localStorage.setItem("Grade", signinGrade)
}

function Signout() {
    firebase.auth().signOut().then(() => {
        location.href = "HomePage2.html"
    })
}
var uid = localStorage.getItem('uid')
db.collection('users').get().then(

    (snapshot) => {

        snapshot.forEach(doc => {
            if (doc.id === uid) {
                var occupation = doc.data().studOrTeach
                localStorage.setItem('sOrT', occupation)
                var Name = doc.data().Name;
                document.getElementById("tooltiptext").innerHTML = Name + "<br>" + doc.data().studOrTeach
                localStorage.setItem('Name', Name)
                if (doc.data().studOrTeach === "student") {

                    var signinGrade = doc.data().Grade;
                    localStorage.setItem("Grade", signinGrade)
                    document.getElementById("tooltiptext").innerHTML = Name + "<br> Grade : " + signinGrade
                    document.getElementById("buttons").innerHTML = " <button id='English' onclick='subject(this.id)'>English</button><br><button id='Mathematics' onclick='subject(this.id)'>Mathematics</button><br><button id='Physics' onclick='subject(this.id)'>Physics</button><br><button id='Chemistry' onclick='subject(this.id)'>Chemistry</button><br><button id='Biology' onclick='subject(this.id)'>Biology</button>"
                    document.getElementById("navbar").innerHTML = " <li class='active'><a href='AfterSignin.html' id='grades'>Grades</a></li>  <li><a href='AfterSignin.html' id='Chats'>Teachers</a></li><li><a href='Community.html' id='Chats'>Community</a></li>"

                }
                else {
                    var subject1=doc.data().Subject
                    localStorage.setItem('sub1',subject1)
                    var subject2=doc.data().Subject2
                    localStorage.setItem('sub2',subject2)
                    var subject3=doc.data().Subject3
                    localStorage.setItem('sub3',subject3)
                    console.log(subject2)
                    document.getElementById("tooltiptext").innerHTML = Name + "<br>" + "Teacher"
                    document.getElementById("navbar").innerHTML = "  <li class='active'><a href='AfterSignin.html' id='grades'>Grades</a></li> <li><a href='tChat.html' id='Chats'>Chats</a></li><li><a href='Community.html' id='Chats'>Community</a></li>"
                    if (doc.data().Qualification === "6-8") {
                        var subject                    
                        if (subject1 !== "") {
                            subject = subject1
                            document.getElementById("buttons").innerHTML = " <button id=6" + subject + " onclick='Tsubject(this.id)' value='6'>Grade 6 -" + " " + subject + "</button><br>" + " <button id=7" + subject + " onclick='Tsubject(this.id)' value='7'>Grade 7 -" + " " + subject + "</button><br>" + " <button id=8" + subject + " onclick='Tsubject(this.id)' value='8'>Grade 8 -" + " " + subject + "</button><br>"
                        }
                        if (subject2 !== "") {
                            subject = subject2
                            document.getElementById("buttons").innerHTML = " <button id=6" + subject + " onclick='Tsubject(this.id)' value='6'>Grade 6 -" + " " + subject + "</button><br>" + " <button id=7" + subject + " onclick='Tsubject(this.id)' value='7'>Grade 7 -" + " " + subject + "</button><br>" + " <button id=8" + subject + " onclick='Tsubject(this.id)' value='8'>Grade 8 -" + " " + subject + "</button><br>"
                        }
                        if (subject3 !== "") {
                            subject = subject3
                            document.getElementById("buttons").innerHTML = " <button id=6" + subject + " onclick='Tsubject(this.id)' value='6'>Grade 6 -" + " " + subject + "</button><br>" + " <button id=7" + subject + " onclick='Tsubject(this.id)' value='7'>Grade 7 -" + " " + subject + "</button><br>" + " <button id=8" + subject + " onclick='Tsubject(this.id)' value='8'>Grade 8 -" + " " + subject + "</button><br>"
                        }
                        localStorage.setItem("clickedSubject", subject)
                    }
                    if (doc.data().Qualification === "9-10") {
                        var subject
                        if (subject1 !== "") {
                             subject = subject1
                            document.getElementById("buttons").innerHTML += " <button id=9" + subject + " onclick='Tsubject(this.id)' value='9'>Grade 9 -" + " " + subject + "</button><br>" + " <button id=10" + subject + " onclick='Tsubject(this.id)' value='10'>Grade 10 -" + " " + subject + "</button><br><br>" 
                        }
                        if (subject2 !== "") {
                             subject = subject2
                            document.getElementById("buttons").innerHTML += " <button id=9" + subject + " onclick='Tsubject(this.id)' value='9'>Grade 9 -" + " " + subject + "</button><br>" + " <button id=10" + subject + " onclick='Tsubject(this.id)' value='10'>Grade 10 -" + " " + subject + "</button><br><br>" 
                        }

                        if (subject3 !== "") {
                             subject = subject3
                            document.getElementById("buttons").innerHTML += " <button id=9" + subject + " onclick='Tsubject(this.id)' value='9'>Grade 9 -" + " " + subject + "</button><br>" + " <button id=10" + subject + " onclick='Tsubject(this.id)' value='10'>Grade 10 -" + " " + subject + "</button><br>" 
                        }

                        localStorage.setItem("clickedSubject", subject)
                    }
                    if (doc.data().Qualification === "11-12") {
                        var subject
                        if (subject1 !== "") {
                             subject = subject1
                            document.getElementById("buttons").innerHTML += " <button id=11" + subject + " onclick='Tsubject(this.id)' value='11'>Grade 11 -" + " " + subject + "</button><br>" + " <button id=12" + subject + " onclick='Tsubject(this.id)' value='12'>Grade 12 -" + " " + subject + "</button><br><br>" 
                        }
                        if (subject2 !== "") {
                             subject = subject2
                            document.getElementById("buttons").innerHTML += " <button id=11" + subject + " onclick='Tsubject(this.id)' value='11'>Grade 11 -" + " " + subject + "</button><br>" + " <button id=12" + subject + " onclick='Tsubject(this.id)' value='12'>Grade 12 -" + " " + subject + "</button><br><br>" 
                        }

                        if (subject3 !== "") {
                             subject = subject3
                            document.getElementById("buttons").innerHTML += " <button id=11" + subject + " onclick='Tsubject(this.id)' value='11'>Grade 11 -" + " " + subject + "</button><br>" + " <button id=12" + subject + " onclick='Tsubject(this.id)' value='12'>Grade 12 -" + " " + subject + "</button><br>" 
                        }

                        localStorage.setItem("clickedSubject", subject)
                    }
                    localStorage.setItem('qualification', doc.data().Qualification)
                }
            }

        }

        );

    }

)