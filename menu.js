// To make menubar UI consistent

//Declare direct link button for each pages
const menu_home = `
    <div id="menu_home" class="menuSlot active" onclick="window.location.href = 'main.html';">
        <img src="png/home.png" style="width: 50px;" />
        <span class="toolTip">Home</span>
    </div>
`;
const menu_history = `
    <div id="menu_history" class="menuSlot active" onclick="window.location.href = 'transaction_history.html';">
        <img src="png/history.png" style="width: 50px;" />
        <span class="toolTip">Transaction History</span>
    </div>
`;
const menu_manage = `
    <div id="menu_manage" class="menuSlot active" onclick="window.location.href = 'manage_inventory.html';">
        <img src="png/manage_inventory.png" style="width: 50px;" />
        <span class="toolTip">Manage Inventory</span>
    </div>
`;
const menu_modify = `
    <div id="menu_modify" class="menuSlot active" onclick="window.location.href = 'modify_inventory.html';">
        <img src="png/modify_inventory.png" style="width: 50px;" />
        <span class="toolTip">Modify Inventory</span>
    </div>
`;
const menu_report = `
    <div id="menu_report" class="menuSlot active" onclick="window.location.href = 'report.html';">
        <img src="png/report.png" style="width: 50px;" />
        <span class="toolTip">Sales Report</span>
    </div>
`;
const menu_staff = `
    <div id="menu_staff" class="menuSlot active" onclick="window.location.href = 'staff.html';">
        <img src="png/staff.png" style="width: 50px;" />
        <span class="toolTip">Manage Staff</span>
    </div>
`;
const menu_logout = `
    <div id="menu_logout" class="menuSlot active" style="margin-top: calc(20vh - 90px);" onclick="logout()">
        <img src="png/logout.png" style="width: 50px;" />
        <span class="toolTip">Logout</span>
    </div>
`;

document.getElementById("menu").outerHTML = `<div id="menu" class="menu"><div style="position: relative; transform: translateY(-50%); top: 50%;"></div></div>`;

//Detect role for staff level control
if (sessionStorage.getItem('role') == "staff") {
    document.getElementById("menu").children[0].innerHTML = menu_home + menu_history + menu_logout;
};
if (sessionStorage.getItem('role') == "admin") {
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
    var user = sessionStorage.getItem("user");
    if (user) {
        sessionStorage.removeItem("user");
        sessionStorage.setItem("order", JSON.stringify([]));
        window.location.href = "staffcode.html";
    }
}

/* Import statement

<!-- Import Menu Bar -->
<script type="text/javascript" src="menu.js"></script>

*/