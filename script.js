window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('welcome-loader');
        const content = document.getElementById('main-content');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            content.classList.add('visible');
        }, 1000);
    }, 3500);
});

function showSection(sectionId) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.getElementById('link-' + sectionId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- 语言切换核心逻辑 ---
function switchLang(lang) {
    const body = document.body;
    const langDisplay = document.getElementById('lang-display');

    if (lang === 'zh') {
        body.classList.add('show-zh');
        langDisplay.innerText = '中文'; // 右上角显示为“简”
    } else {
        body.classList.remove('show-zh');
        langDisplay.innerText = 'EN'; // 右上角显示为“EN”
    }
}