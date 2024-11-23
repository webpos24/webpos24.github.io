// To make menubar UI consistent

document.getElementById("menu").outerHTML = `
<div id="menu"
    style="grid-area: menu; width: 70px; height: 100vh; background-image: linear-gradient(rgb(240, 240, 240), lightgray); position: relative; transform: translate(-50%, -50%); top: 50%; left: 50%;">
    <div style="position: relative; transform: translateY(-50%); top: 50%;">
        <div id="menu_home" class="menuSlot active" onclick="window.location.href = 'main.html';"">
            <img src="png/home.png" style="width: 50px;" />
        </div>
        <div id="menu_history" class="menuSlot active" onclick="window.location.href = 'transaction_history.html';">
            <img src="png/refund.png" style="width: 50px;" />
        </div>
        <div id="menu_manage" class="menuSlot active" onclick="window.location.href = 'manage_inventory.html';">
            <img src="png/manage_inventory.png" style="width: 50px;" />
        </div>
        <div id="menu_modify" class="menuSlot active" onclick="window.location.href = 'modify_inventory.html';">
            <img src="png/modify_inventory.png" style="width: 50px;" />
        </div>
        <div id="menu_report" class="menuSlot active" onclick="window.location.href = 'report.html';">
            <img src="png/report.png" style="width: 50px;" />
        </div>
        <div style="position: relative; height: min(60vh, 20vh);"></div>
        <div id="menu_logout" class="menuSlot active" onclick="logout()">
            <img src="png/logout.png" style="width: 50px;" />
        </div>
    </div>
</div>
`;

var page = document.getElementById("Title").innerHTML.toLowerCase();
if (page == "order") { page = "home" };
if (page == "transaction history") { page = "history" };
if (page == "modify inventory") { page = "modify" };
if (page == "manage inventory") { page = "manage" };
if (page == "sales report") { page = "report" };

document.getElementById("menu_" + page).className = "menuSlot now";

/* Import statement

<!-- Import Menu Bar -->
<script type="text/javascript" src="menu.js"></script>

*/