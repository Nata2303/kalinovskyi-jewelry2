var e={en:{hero:{titelHiro:"Exquisite jewelry for true connoisseurs",hero:"View catalog"}},ge:{hero:{titelHiro:"დახვეწილი სამკაულები ნამდვილი მცოდნეებისთვის",hero:"კატალოგის ნახვა"}},ua:{hero:{titelHiro:"Вишукана ювелірна продукція для справжніх поціновувачів",hero:"Переглянути каталог"}},ru:{hero:{titelHiro:"Изысканная ювелирная продукция для истинных ценителей",hero:"Посмотреть каталог"}}};function t(t){for(var r=document.querySelector(".hero-section").getElementsByClassName("translate"),o=0;o<r.length;o++){var n=r[o],a=n.id.replace("-link","");n.textContent=e[t].hero[a]}}var r=document.getElementById("language-select");r.addEventListener("change",(function(){var e=r.value;t(e)})),t("en");
//# sourceMappingURL=index.bf725b2c.js.map
