// To make menubar UI consistent

//Declare direct link button for each pages
const menu_home = `
    <div id="menu_home" class="menuSlot active">
        <img src="png/home.png" class="showToolTip" style="width: 50px;" onclick="window.location.href = 'main.html';" />
        <span class="toolTip">Home</span>
    </div>
`;
const menu_history = `
    <div id="menu_history" class="menuSlot active">
        <img src="png/history.png" style="width: 50px;" onclick="window.location.href = 'transaction_history.html';" />
        <span class="toolTip">Transaction History</span>
    </div>
`;
const menu_manage = `
    <div id="menu_manage" class="menuSlot active">
        <img src="png/manage_inventory.png" style="width: 50px;" onclick="window.location.href = 'manage_inventory.html';" />
        <span class="toolTip">Manage Inventory</span>
    </div>
`;
const menu_modify = `
    <div id="menu_modify" class="menuSlot active">
        <img src="png/modify_inventory.png" style="width: 50px;" onclick="window.location.href = 'modify_inventory.html';" />
        <span class="toolTip">Modify Inventory</span>
    </div>
`;
const menu_report = `
    <div id="menu_report" class="menuSlot active">
        <img src="png/report.png" style="width: 50px;" onclick="window.location.href = 'report.html';" />
        <span class="toolTip">Sales Report</span>
    </div>
`;
const menu_staff = `
    <div id="menu_staff" class="menuSlot active">
        <img src="png/staff.png" style="width: 50px;" onclick="window.location.href = 'staff.html';" />
        <span class="toolTip">Manage Staff</span>
    </div>
`;
const menu_logout = `
    <div id="menu_logout" class="menuSlot active" style="margin-top: calc(20vh - 90px);">
        <img src="png/logout.png" style="width: 50px;"  onclick="logout();" />
        <span class="toolTip">Logout</span>
    </div>
`;

document.getElementById("menu").outerHTML = `<div id="menu" class="menu"><div style="position: relative; transform: translateY(-50%); top: 50%;"></div></div>`;

var userPass = JSON.parse(sessionStorage.getItem("credential"));

if (userPass.role == "staff") {
    document.getElementById("menu").children[0].innerHTML = menu_home + menu_history + menu_logout;
};
if (userPass.role == "admin") {
    document.getElementById("menu").children[0].innerHTML = menu_home + menu_history + menu_manage + menu_modify + menu_report + menu_staff + menu_logout;
};

//Detect current page
var currentUrl = window.location.href.split("/");
var currentPage = currentUrl[currentUrl.length - 1];
var activePage = "";

//Assign currentPage for active page button css style
switch (currentPage) {
    case "main.html":
        activePage = 'home';
        break;
    case "order.html":
        activePage = 'home';
        break;
    case "transaction_history.html":
        activePage = 'history';
        break;
    case "manage_inventory.html":
        activePage = 'manage';
        break;
    case "modify_inventory.html":
        activePage = 'modify';
        break;
    case "report.html":
        activePage = 'report';
        break;
    case "staff.html":
        activePage = 'staff';
        break;
    default:
        break;
};

//Direct to home page when the role is not in the right page
if (sessionStorage.getItem('role') == "staff"
    && (currentPage == 'manage_inventory.html'
        || currentPage == 'modify_inventory.html'
        || currentPage == 'report.html'
        || currentPage == 'staff.html')) {
    window.location.href = 'main.html';
};

//Set current page button css style
document.getElementById("menu_" + activePage).className = "menuSlot now";

//Logout function
function logout() {
    //Clear session storage *temp
    if (userPass != null) {
        sessionStorage.removeItem("credential");
        window.location.href = "staffcode.html";
    }
}

// Detect phone size by comparing width and height
if (window.innerWidth < window.innerHeight) {

};

/* Import statement

<!-- Import Menu Bar -->
<script type="text/javascript" src="menu.js"></script>

*/