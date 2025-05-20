let clickCount = 0;
const passwordBenar = "28";

function checkPassword() {
  const input = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  if (input === passwordBenar) {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("mainContainer").classList.remove("hidden");
  } else {
    errorMsg.textContent = "Password salah! Coba lagi yaa 😊";
  }
}

function handleGiftClick() {
  window.location.href = "surat.html"; // arahkan ke halaman baru
}

  if (clickCount === 1) {
    popup.classList.remove("hidden");
  } else if (clickCount === 2) {
    gallery.classList.remove("hidden");
  } else if (clickCount === 3) {
    magic.classList.remove("hidden");
    gift.style.display = "none";
    setTimeout(() => {
      magic.classList.add("hidden");
    }, 3000);
  }

