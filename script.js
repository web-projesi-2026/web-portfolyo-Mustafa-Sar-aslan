const form = document.getElementById("form");
const sonuc = document.getElementById("sonuc");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const ad = document.getElementById("ad").value.trim();
    const email = document.getElementById("email").value.trim();
    const mesaj = document.getElementById("mesaj").value.trim();

    if (ad === "" || email === "" || mesaj === "") {
        sonuc.innerText = "Tüm alanları doldurun!";
        sonuc.style.color = "red";
        return;
    }

    const emailKontrol = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailKontrol.test(email)) {
        sonuc.innerText = "Geçerli email gir!";
        sonuc.style.color = "red";
        return;
    }

    sonuc.innerText = "Form başarıyla gönderildi!";
    sonuc.style.color = "green";

    form.reset();
});