//Alert function
var alertTimeout = 0;
function alertFunc(text, timeAdd = 0) {
    document.getElementById('alert').innerHTML = text;
    document.getElementById('alert').style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    if (alertTimeout <= 0) {
        var alertTimeoutInterval = setInterval(() => {
            alertTimeout -= 1;
            if (alertTimeout <= 0) {
                document.getElementById('alert').innerHTML = '';
                document.getElementById('alert').style.backgroundColor = 'rgba(0, 0, 0, 0)';
                clearInterval(alertTimeoutInterval);
                alertTimeout = 0;
            }
        }, 1)
    }
    alertTimeout = 600 + timeAdd;
}
function getId(id) {
    return document.getElementById(id).value;
}
function isNum(id) {
    if (!(getId(id) >= 0 && getId(id) <= 9) || getId(id) == " ") {
        document.getElementById(id).value = '';
    }
}
function visible(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//Logout
function logout() {
    //Clear session storage *temp
    var user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
        alertFunc(user[1] + " is logged out.");
        window.sessionStorage.removeItem("user");
        window.location.href = "main.html";
    }
}

//Maximize and minimize menu
function zoomMenu() {
    if (document.getElementById('menu').style.width != '32px') {
        //minimize
        document.getElementById('menu').style.width = '32px';
        for (var i = 0; i < document.getElementsByClassName('menuOpt').length; i++) {
            document.getElementsByClassName('menuOpt')[i].style.display = 'none';
        }
    } else {
        //maximize
        document.getElementById('menu').style.width = '150px';
        for (var i = 0; i < document.getElementsByClassName('menuOpt').length; i++) {
            document.getElementsByClassName('menuOpt')[i].style.display = 'inline-block';
        }
    }
}

//Locate to page
function locate(pageName) {
    if ((pageName + ".html") != ((window.location.href).split('/')).at(-1)) {
        switch (pageName) {
            case "main":
                window.location.href = "main.html";
                break;
            case "attendance":
                window.location.href = "attendance.html";
                break;
            default: break;
        }
    }
}

//DATABASE
var acc = [["1541", "Low"], ["1777", "She"]];

//Include html
generalHtml();
function generalHtml() {
    document.getElementById("body").innerHTML = `
    <div id="alert"
        style="position: absolute; top: 30px; align-self: center; display: block; left: 50%; transform: translate(-50%, 0%); text-align: center; padding: 10px; color: white;">
    </div>
    <div id="menu" class="menu" style="width: 32px;">

        <div class="menuChild" onclick="zoomMenu()">
            <div id="zoomBtn" class="menuIcon">
                <div style=" border-width: 6px 0px 0px 0px; border-color: rgb(54, 54, 54); border-style: solid; width:
        32px;">
                </div>
                <div
                    style="border-width: 6px 0px 0px 0px; border-color: rgba(0, 0, 0, 0); border-style: solid; width: 0px;">
                </div>
                <div
                    style="border-width: 6px 0px 0px 0px; border-color: rgb(54, 54, 54); border-style: solid; width: 32px;">
                </div>
                <div
                    style="border-width: 6px 0px 0px 0px; border-color: rgba(0, 0, 0, 0); border-style: solid; width: 0px;">
                </div>
                <div
                    style="border-width: 6px 0px 0px 0px; border-color: rgb(54, 54, 54); border-style: solid; width: 32px;">
                </div>
            </div>
            <div class="menuOpt">Minimize</div>
        </div>

        <div class="menuChild" onclick="locate('main')">
            <img src="png/home.png" style="width: 32px; display: inline-block; vertical-align: top;">
            <div class="menuOpt">Home</div>
        </div>

        <div class="menuChild" onclick="locate('attendance')">
            <img src="png/attendance.png" style="width: 32px; display: inline-block; vertical-align: top;">
            <div class="menuOpt">Attendance</div>
        </div>

        <div class="menuChild" onclick="logout()">
            <img src="png/logout.png" style="width: 32px; display: inline-block; vertical-align: top;">
            <div class="menuOpt">Log Out</div>
        </div>

    </div>
    ` + document.getElementById("body").innerHTML;
}