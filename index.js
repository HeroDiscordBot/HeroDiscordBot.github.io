const pages = document.querySelectorAll('.page');
const pageNumberText = document.getElementById('pageNumber');
let currentPage = 0;

function updatePage() {
    pages.forEach((page, index) => {
        page.classList.remove('active');
        if (index === currentPage) {
            page.classList.add('active');
        }
    });
    pageNumberText.textContent = `Page ${currentPage + 1} of ${pages.length}`;
}

document.getElementById('nextPage').addEventListener('click', function() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updatePage();
    }
});

document.getElementById('prevPage').addEventListener('click', function() {
    if (currentPage > 0) {
        currentPage--;
        updatePage();
    }
});

document.getElementById('errorGuideLink').addEventListener('click', function(event) {
    event.preventDefault();

    document.getElementById('homeContent').classList.add('hidden');
    document.getElementById('error-guide').classList.remove('hidden');
    document.getElementById('socialsInfo').classList.add('hidden');
    updatePage();
});

document.getElementById('homeLink').addEventListener('click', function(event) {
    event.preventDefault();

    document.getElementById('error-guide').classList.add('hidden');
    document.getElementById('homeContent').classList.remove('hidden');
    document.getElementById('socialsInfo').classList.add('hidden'); // Fix: hide socialsInfo
});

document.getElementById('socialsLink').addEventListener('click', function(event) {
    event.preventDefault();

    document.getElementById('homeContent').classList.add('hidden');
    document.getElementById('error-guide').classList.add('hidden');
    document.getElementById('socialsInfo').classList.remove('hidden');
});

function DiscordBotAdd() {
    window.open("https://discord.com/oauth2/authorize?client_id=1335695462753370133&permissions=8&integration_type=0&scope=bot+applications.commands");
}