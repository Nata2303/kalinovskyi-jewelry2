var e={en:{backdrop:{modalText:"Leave your contacts and we will call you back",nameLabel:"Name",phoneLabel:"Phone",commentLabel:"Comment",sendButton:"Send"}},ge:{backdrop:{modalText:"დატოვეთ თქვენი კონტაქტი და ჩვენ გადმოგირეკებთ",nameLabel:"სახელი",phoneLabel:"ტელეფონი",commentLabel:"კომენტარი",sendButton:"გაგზავნა"}},ua:{backdrop:{modalText:"Залиште свої контактні дані, і ми зателефонуємо вам назад",nameLabel:"Ім`я",phoneLabel:"Телефон",commentLabel:"Коментар",sendButton:"Відправити"}},ru:{modal:{text:"Оставьте свои контакты и мы перезвоним вам",nameLabel:"Имя",phoneLabel:"Телефон",commentLabel:"Комментарий",sendButton:"Отправить"}}};function a(a){document.querySelectorAll(".translate").forEach((function(n){var t=n.id.replace("-link","");n.textContent=e[a].modal[t]}))}var n=document.getElementById("language-select");n.addEventListener("change",(function(){var e=n.value;a(e)})),a("en");
//# sourceMappingURL=gallery.27c92bf3.js.map