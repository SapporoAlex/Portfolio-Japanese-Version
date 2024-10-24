const aboutMeBtn = document.getElementById("about-me-button");
const portfolioBtn = document.getElementById("portfolio-button");
const contactBtn = document.getElementById("contact-button");
const languageBtn = document.getElementById("language-button");
const callToActionBtn = document.getElementById("call-to-action");
const about1p = document.getElementById("about1p");
const about2p = document.getElementById("about2p");
const contact1p = document.getElementById("contact1p");
const contact2p = document.getElementById("contact2p");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactMessage = document.getElementById("your-message");
const sendBtn = document.getElementById("sendBtn");
const message = document.getElementById("message");
let currentLanguage = "English";
let topButton = document.getElementById("top-button");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        topButton.style.display = "block";
    }
    else {
        topButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

callToActionBtn.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
});

contactBtn.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
});

aboutMeBtn.addEventListener('click', () => {
    document.getElementById('about-me-section').scrollIntoView({
        behavior: 'smooth'
    });
})

portfolioBtn.addEventListener('click', () => {
    document.getElementById('portfolio').scrollIntoView({
        behavior: 'smooth'
    });
})

languageBtn.addEventListener('click', () => {
    if (currentLanguage === "English") {
        currentLanguage = "Japanese"
        languageBtn.textContent = "English"
        aboutMeBtn.textContent = "私について"
        portfolioBtn.textContent = "ポートフォリオ"
        contactBtn.textContent = "お問い合わせ"
        callToActionBtn.textContent = "お問い合わせ"
        about1p.textContent = "私は札幌を拠点に活動するプログラマーです。企業や個人と協力して、ニーズに合わせたITソリューションを提供しています。さまざまなプログラミング言語やフレームワークに精通しており、クライアントと協力して最適なツールを選択し、目標を達成する手助けをします。"
        about2p.textContent = "ウェブサイトの作成や保守、最新データのスクレイピング、オートメーション、その他あなたのニーズに合わせたソフトウェアが必要な場合は、無料相談のためにご連絡ください。"
        contact1p.textContent = "無料相談をご希望の方はメッセージをお送りください。"
        contact2p.textContent = "お待ちしております。"
        contactName.textContent = "お名前："
        contactEmail.textContent = "メールアドレス："
        contactMessage.textContent = "メッセージ："
        message.placeholder = "作ってほしいものあるんですが、"
        sendBtn.textContent = "送信"
        } else if (currentLanguage === "Japanese") {
        currentLanguage = "English"
        languageBtn.textContent = "日本語"
        aboutMeBtn.textContent = "About Me"
        portfolioBtn.textContent = "Portfolio"
        contactBtn.textContent = "Contact"
        callToActionBtn.textContent = "Contact Me"
        about1p.textContent = "I am a programmer based in Sapporo. I work with companies and individuals to create IT solutions tailored to their needs. I am proficient in a variety of languages and frameworks, and work with clients to choose the best tools to accomplish their goals."
        about2p.textContent = "If you need help building or maintaining websites, scraping up-to-date data, automation, software or something else unique to your needs, contact me for a free consultation."
        contact1p.textContent = "Send me a message for a free consultation."
        contact2p.textContent = "I'd love to hear from you."
        contactName.textContent = "Your Name:"
        contactEmail.textContent = "Your Email:"
        contactMessage.textContent = "Your Message:"
        message.placeholder = "Hi, are you able to make a ...?"
        sendBtn.textContent = "Send"
        }
    });
