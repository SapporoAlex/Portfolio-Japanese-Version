const languageBtn = document.getElementById("language-button");
const myName = document.getElementById("name");
const myTitle = document.getElementById("title");
const aboutMeTitle = document.getElementById("about-me-title");
const aboutText = document.getElementById("about-text");
const certificationsTitle = document.getElementById("certifications-title");
const jsAlgorithms = document.getElementById("js-algorithms");
const responsiveWebDesign = document.getElementById("responsive-web-design");
const dataAnalysis = document.getElementById("data-analysis-cert");
const scientificComputing = document.getElementById("scientific-computing");
const n2 = document.getElementById("n2");
const bachelor = document.getElementById("bachelor");
const languagesTitle = document.getElementById("languages-title");
const python = document.getElementById("python");
const sql = document.getElementById("sql");
const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
const git = document.getElementById("git");
const django = document.getElementById("django");
const pandas = document.getElementById("pandas");
const playwright = document.getElementById("playwright");
const jn = document.getElementById("jn");
const project1Title = document.getElementById("project-1-title");
const project1Name = document.getElementById("webscraping-title");
const project1Date = document.getElementById("project-1-date");
const madeForAdl2 = document.getElementById("made-for-adl2");
const project1DescriptionText = document.getElementById("project-1-description-text");
const weeklyEarningsData = document.getElementById("weekly-earnings-data");
const hotelReservation = document.getElementById("hotel-reservation");
const mailParser = document.getElementById("mail-parser");
const project2Title = document.getElementById("project-2-title");
const project2Date = document.getElementById("project-2-date");
const project2MadeFor = document.getElementById("project-2-made-for");
const project2DescriptionText = document.getElementById("project-2-description-text");
const kpiTracker = document.getElementById("kpi-tracker");
const project3Title = document.getElementById("project-3-title");
const project3Name = document.getElementById("timecard-app-title");
const project3Date = document.getElementById("project-3-date");
const project3MadeFor = document.getElementById("project-3-made-for");
const project3DescriptionText = document.getElementById("project-3-description-text");
const timeCard = document.getElementById("time-card");
const adminProgram = document.getElementById("admin-program");
const adminProgramDescription = document.getElementById("admin-program-description");
const project4Title = document.getElementById("project-4-title");
const project4Name = document.getElementById("african-president-name");
const project4Date = document.getElementById("project-4-date");
const project4MadeFor = document.getElementById("project-4-made-for");
const project4DescriptionText = document.getElementById("project-4-description-text");
const africanPresident = document.getElementById("african-president");
const playAfricanPresident = document.getElementById("play-african-president");
const project5Name = document.getElementById("hammy-title");
const project5Date = document.getElementById("project-5-date");
const project5MadeFor = document.getElementById("project-5-made-for");
const project5DescriptionText = document.getElementById("project-5-description-text");
const hammyStop = document.getElementById("hammy-stop");
const project6Title = document.getElementById("project-6-title");
const project6Name = document.getElementById("course-title");
const project6Date = document.getElementById("project-6-date");
const project6MadeFor = document.getElementById("project-6-made-for");
const project6DescriptionText = document.getElementById("project-6-description-text");
const summerCourse = document.getElementById("python-course");
const contactSection = document.getElementById("contact-section");
const contactInfo = document.getElementById("contact-info");
let currentLanguage = "Japanese";


languageBtn.addEventListener('click', () => {
    if (currentLanguage === "Japanese") {
        currentLanguage = "English"
        languageBtn.textContent = "日本語"
        myName.textContent = "Alex McKinley"
        myTitle.textContent = "Programmer, Data Analyst"
        aboutMeTitle.textContent = "About me"
        aboutText.textContent = "I am a programmer based in Sapporo Hokkaido. I have completed various projects that are currently used by several Japanese companies to increase workflow, and give up to date insights to stakeholders. I work with companies to find IT solutions including automation, webscraping, data analysis, web development, and tutoring. I speak Japanese and English. I also have over 5 years experience managing a team and consulting with clients."
        certificationsTitle.textContent = "Qualifications"
        n2.textContent = "N2 Japanese-Language Proficiency Test (JLPT)"
        languagesTitle.textContent = "Tools"
        project1Title.textContent = "Data Analysis"
        project1Name.textContent = "Web Scraping, Data Cleaning, and Data Visualisation"
        project1Date.textContent = "January ~ April, 2024"
        madeForAdl2.textContent = "Made for ADL2."
        project1DescriptionText.textContent = "After consulting with ADL2, a hotel company. I identified ways to boost productivity and increase accuracy. Because the company needed up-to-date information related to bookings and earnings, I created 3 tools for them to use. \nFirstly, I made a daily automated script to scrape daily hotel bookings data from the company database, and email the information to the relevant staff. Secondly, I created a weekly earnings report script that scrapes data from 2 databases, cleans the data, performs desired operations on figures and displays data in an easy to understand chart. The third tool I made was an email parser. Potential clients for ADL2 fill out reservation forms on the homepage and send emails to the staff inbox. \nTo ensure all emails were properly recieved and read in a timely manner, I wrote an email parser that can extract all relevant information from the email, and add them to an excel table, that is sent to the staff updated every 24 hours. The email parser parses both Japanese and English emails alike. \nI continue to consult with ADL2 to create new ways to improve their business."
        weeklyEarningsData.textContent = "Weekly Earnings Report"
        hotelReservation.textContent = "Daily Reservations Update"
        mailParser.textContent = "Email Parser"
        project2Title.textContent = "KPI Tracker"
        project2Date.textContent = "March, 2024"
        project2MadeFor.textContent = "Made for Titan GreenTech"
        project2DescriptionText.textContent = "The CEO of Titan GreenTech, a recruiting company in Tokyo, asked if I could assist with creating a data visualisation tool. I developed some drafts and we discussed what might be the best solution. The CEO wanted a way to show charts of his employees KPIs every Monday, as well as view each employee's resume to placement ratio by quarter. He had the information in table format on his database, but wanted a quick and efficient way to get up-to-date easy to visulaise information. I wrote a script to scrape the employee data from the database, insert it into tables, update charts by week, and automatically email the data in an Excel sheet weekly. The CEO now still uses this visualisation tool to get insights into the progress of his employees and give better guidance."
        kpiTracker.textContent = "KPI Tracker"
        project3Title.textContent = "Software Development"
        project3Name.textContent = "Time Card App"
        project3Date.textContent = "Made for ADL2"
        project3MadeFor.textContent = "May, 2024"
        project3DescriptionText.textContent = "This is a program that can be run on a local machine to act as a time card for hotel staff. It keeps track of staff who are clocked-in or clocked-out and what time they did so. It allows up to 20 staff members to be added to the program, and accounting staff can use the calculate feature to calculate the total work hours of each employee broken down by day for each month. This data is stored in a monthly Excel file with employees seperated by Excel sheet."
        adminProgram.textContent = "Admin Program"
        adminProgramDescription.textContent = "Staff can easily make changes using the accompanying admin program."
        timeCard.textContent = "Time Card App"
        project4Title.textContent = "Game Development"
        project4Name.textContent = "African President"
        project4Date.textContent = "July, 2024"
        project4MadeFor.textContent = "JavaScript Game"
        project4DescriptionText.textContent = "I was inspired to make this game after watching a documentary about African Presidents of the late 20th century. It was also a good oppurtunity to improve my JavaScript skills."
        africanPresident.textContent = "African President"
        playAfricanPresident.textContent = "Play the game"
        project5Name.textContent = "Hammy Stop"
        project5Date.textContent = "July, 2024"
        project5MadeFor.textContent = "Made for my Daughter"
        project5DescriptionText.textContent = "I made this game as a way to understand how to make animation work. The game features various animation effects, and showcases how I can create a fun original bug-free game."
        hammyStop.textContent = "Hammy Stop"
        project6Title.textContent = "Teaching"
        project6Name.textContent = "Summer Python Course"
        project6Date.textContent = "August, 2024"
        project6MadeFor.textContent = "In Collaboration with IKS International School"
        project6DescriptionText.textContent = "I consulted with the Principal of IKS International School about teaching a 2 day Summer Programming Course. The idea was presented to the parents, and many were interested with the course being fully booked (14 students) within 24 hours. The students who had no experience programming were taught the fundamentals of programming through 10 coding activities I designed. The course finished with a written exam I wrote, and students were awarded certificates of completion. The feedback from students and parents was very positive, and a regular weekly programming lesson has begun which I teach. The economic outcome of this summer course is that the school made a large profit for the 2 day course, and the ongoing weekly lessons. Additionally the school can advertise that it is the only school offering elementary aged programming lessons in Hokkaido."
        summerCourse.textContent = "My Python Course"
        contactSection.textContent = "Contact Me"
        contactInfo.textContent = "Feel free to contact me via LinkedIn, GitHub, or Email"
    } else if (currentLanguage === "English") {
        currentLanguage = "Japanese"
        languageBtn.textContent = "English"
        myName.textContent = "アレックス・マッキンリー"
        myTitle.textContent = "プログラマー、データアナリスト"
        aboutMeTitle.textContent = "私のこと"
        aboutText.textContent = "北海道札幌市在住のプログラマーです。2023年にプログラミングを始めて以来、様々なプロジェクトを完成させ、現在いくつかの日本企業でワークフローを改善し、ステークホルダーに最新の洞察を与えるために使用されています。自動化、ウェブスクレイピング、データ分析、ウェブ開発、家庭教師など、ITソリューションを見つけるために企業で働いています。日本語と英語が話せます。また、5年以上のチームマネジメントとクライアントへのコンサルティング経験があります。"
        certificationsTitle.textContent = "資格"
        n2.textContent = "N2 日本語能力試験（JLPT）"
        languagesTitle.textContent = "コード言語"
        project1Title.textContent = "データ分析"
        project1Name.textContent = "ウェブスクレイピング、データクリーニング、データビジュアライゼーション"
        project1Date.textContent = "2024年1月～4月"
        madeForAdl2.textContent = "ADL2のために作りました"
        project1DescriptionText.textContent = "ホテル会社ADL2とのコンサルティングを経て。私は、生産性を高め、精度を上げる方法を特定しました。同社は予約と収益に関する最新の情報を必要としていたため、私は3つのツールを作成しました。まず一つ目、 会社のデータベースから毎日のホテル予約データをスクレイピングし、その情報を関連スタッフにメールで送信する自動スクリプトを毎日作成しました。次に、2つのデータベースからデータをスクレイピングし、データをクレンジングし、数値に必要な処理を実行し、データをわかりやすく表示する週次収益レポートスクリプトを作成しました。そしてデータをわかりやすいグラフで表示します。3つ目のツールはEメール・パーサーだ。ADL2の見込み客は、ホームページの予約フォームに記入します。フォームに記入し、スタッフの受信トレイにメールを送ります。すべてのメールが適切に受信され、タイムリーに読まれるようにするためです、 メールから関連情報を抽出し、エクセルの表に追加することができるメール・パーサーを書きました。このメール解析ツールは、日本語のメールも英語のメールも同じように解析します。私は、ADL2社のビジネスを改善するための新しい方法を生み出すために、ADL2社のコンサルティングを続けています。"
        weeklyEarningsData.textContent = "週間収益報告"
        hotelReservation.textContent = "毎日の予約状況"
        mailParser.textContent = "メールパーサー"
        project2Title.textContent = "KPIトラッカー"
        project2Date.textContent = "2024年3月"
        project2MadeFor.textContent = "タイタン・グリーンテック製"
        project2DescriptionText.textContent = "東京にある人材紹介会社、タイタン・グリーンテックのCEOから、データ可視化ツールの作成を手伝ってもらえないかとの依頼がありました。私はいくつかのドラフトを作成し、何がベストな解決策になりそうか話し合いました。社長は、毎週月曜日に社員のKPIをグラフで表示し、各社員の履歴書と就職先の比率を四半期ごとに表示する方法を求めていました。彼はデータベース上に表形式の情報を持っていましたが、最新の情報を見やすく取得する迅速で効率的な方法を求めていました。私は、データベースから従業員データをスクレイピングし、テーブルに挿入し、週ごとにチャートを更新し、毎週自動的にデータをExcelシートでEメール送信するスクリプトを作成しました。CEOは現在もこの可視化ツールを使って、従業員の進捗状況を把握し、より良い指導を行っています。"
        kpiTracker.textContent = "KPIトラッカー"
        project3Title.textContent = "ソフトウェア開発"
        project3Name.textContent = "タイムカードアプリ"
        project3Date.textContent = "ADL2のために作りました"
        project3MadeFor.textContent = "2024年5月"
        project3DescriptionText.textContent = "これは、ホテルのスタッフのためのタイムカードとして機能するローカルマシン上で実行することができるプログラムです。スタッフが何時に出勤、退勤したかを記録します。最大20人のスタッフをプログラムに追加することができます、 また、経理担当者は計算機能を使って、各従業員の月ごとの勤務時間を日別に集計することができます。このデータは、従業員をExcelシートごとに区切った月ごとのExcelファイルに保存されます。"
        adminProgram.textContent = "管理プログラム"
        adminProgramDescription.textContent = "管理スタッフは、付属の管理プログラムを使って簡単に変更できます。"
        timeCard.textContent = "タイムカードアプリ"
        project4Title.textContent = "ゲーム開発"
        project4Name.textContent = "アフリカ大統領"
        project4Date.textContent = "2024年7月"
        project4MadeFor.textContent = "JavaScript ゲーム"
        project4DescriptionText.textContent = "このゲームを作ろうと思ったのは、20世紀後半のアフリカの大統領についてのドキュメンタリーを見てからです。JavaScriptのスキルを向上させる良い機会でもありました。"
        africanPresident.textContent = "アフリカ大統領"
        playAfricanPresident.textContent = "ゲームをプレイ"
        project5Name.textContent = "ハミー・ストップ"
        project5Date.textContent = "2024年7月"
        project5MadeFor.textContent = "娘のために作りました"
        project5DescriptionText.textContent = "アニメーションの作り方を理解する方法として、このゲームを作りました。このゲームでは、さまざまなアニメーション効果を使い、バグのない楽しいオリジナルゲームを作る方法を紹介します。"
        hammyStop.textContent = "ハミー・ストップ"
        project6Title.textContent = "ティーチング"
        project6Name.textContent = "夏のPythonコース"
        project6Date.textContent = "2024年8月"
        project6MadeFor.textContent = "IKSインターナショナルスクールとのコラボレーション"
        project6DescriptionText.textContent = "IKSインターナショナルスクールの校長先生に、2日間のサマー・プログラミング・コースについて相談しました。このアイデアを保護者に説明したところ、多くの人が興味を示し、24時間以内にコースは満席（14人）になりました。プログラミングの経験のない生徒たちは、私がデザインしました10のコーディング・アクティビティを通してプログラミングの基礎を学びました。コースは私が作成した筆記試験で終了し、生徒には修了証書が授与されました。生徒や保護者からのフィードバックは非常に好意的で、私が教える週1回の定期的なプログラミング・レッスンが始まりました。この夏期講習の経済的成果は、2日間の講習と週1回の継続的なレッスンで学校が大きな利益を上げたことです。また、北海道で唯一、小学生向けのプログラミング教室を開いていることをアピールすることができます。"
        summerCourse.textContent = "私のPythonコース"
        contactSection.textContent = "お問い合わせ"
        contactInfo.textContent = "LinkedIn、GitHub、Eメールでお気軽にご連絡ください。"
        }
});
