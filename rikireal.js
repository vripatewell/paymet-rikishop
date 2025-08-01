window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 1000); // animasi minimal 1 detik
});

 const loaderText = document.getElementById('loader-text');
  setTimeout(() => {
    loaderText.textContent = '𝑹𝑬𝑨𝑫𝒀 !';
  }, 1000);
  setTimeout(() => {
    document.getElementById('loader-container').style.display = 'none';
    document.getElementById('main-app').style.display = 'block';
  }, 1500);
    
    const salju = "❄︎❅✦❆✧".split('');
    for (let i = 0; i < 60; i++) {
      let snow = document.createElement('div');
      snow.className = 'snowflake';
      snow.style.left = Math.random() * window.innerWidth + 'px';
      snow.style.animationDuration = (Math.random() * 5 + 5) + 's';
      snow.style.fontSize = (Math.random() * 10 + 10) + 'px';
      snow.textContent = salju[Math.floor(Math.random() * salju.length)];
      document.body.appendChild(snow);
    }
  
    function updateClock() {
      const now = new Date();
      const hariList = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
      const hari = hariList[now.getDay()];
      const jam = now.toLocaleTimeString();
      const tanggal = now.toLocaleDateString('id-ID');
      const tahun = now.getFullYear();
      document.getElementById('hari').textContent = hari;
      document.getElementById('tanggal').textContent = tanggal;
      document.getElementById('jam').textContent = jam;
      document.getElementById('tahun').textContent = tahun;
    }
    setInterval(updateClock, 1000);
    updateClock();

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => alert("Disalin: " + text));
    }

    function showQR() {
      let qrPopup = document.getElementById("detail-popup-qr");
      qrPopup.style.display = "flex";
    }
    document.getElementById("detail-popup-qr").addEventListener("click", function (event) {
  if (event.target === this || event.target.classList.contains("qr-image")) {
    this.style.display = "none";
  }
});
    function copyToClipboard(text) {
      navigator.clipboard.writeText(text);
      let popup = document.getElementById("copyPopup");
      popup.style.display = "block";
      setTimeout(() => {
        popup.style.display = "none";
      }, 1500);
    }
    function toggleMode() {
      document.body.classList.toggle("light-mode");
      // Ubah ikon tombol mode berdasarkan mode aktif
      const modeToggle = document.getElementById("modeToggle");
      if (document.body.classList.contains("light-mode")) {
        modeToggle.textContent = "☾"; // ikon bulan untuk light mode
      } else {
        modeToggle.textContent = "☀︎"; // ikon matahari untuk dark mode
      }
    }

function showDetail(platform, number, owner) {
  document.getElementById("platform-name").innerText = platform;
  document.getElementById("platform-number").innerText = number;
  document.getElementById("platform-owner").innerText = owner;
  currentNumber = number;
  document.getElementById("detail-popup").style.display = "block";
}

function closeDetail() {
  document.getElementById("detail-popup").style.display = "none";
}

function copyNumber() {
  navigator.clipboard.writeText(currentNumber).then(() => {
    const notif = document.createElement("div");
    notif.innerText = `✅ Nomor ${currentNumber} berhasil disalin!`;
    notif.style.position = "fixed";
    notif.style.bottom = "20px";
    notif.style.left = "50%";
    notif.style.transform = "translateX(-50%)";
    notif.style.background = "rgba(0,0,0,0.8)";
    notif.style.color = "cyan";
    notif.style.padding = "10px 20px";
    notif.style.borderRadius = "10px";
    notif.style.boxShadow = "0 0 10px cyan";
    notif.style.zIndex = "9999";
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 2000);
  });
}
const texts = [
  "Halo, selamat datang!",
  "Website payment Riki",
  "Klik Go to Payment",
  "Pilih metode yang tersedia"
];

let i = 0, j = 0, isDeleting = false;
const el = document.getElementById("typing-text");

function typeEffect() {
  const current = texts[i];
  el.innerHTML = current.substring(0, j) + (j % 2 === 0 ? '|' : '');

  if (!isDeleting && j <= current.length) {
    j++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && j >= 0) {
    j--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % texts.length;
    setTimeout(typeEffect, 1000);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

function showPayment() {
  const nutEffect = document.getElementById("nut-effect");

  // Reset animasi
  nutEffect.style.animation = "none";
  nutEffect.style.opacity = "1";
  void nutEffect.offsetWidth; // force reflow

  // Jalankan animasi zoom-out nut-nut
  nutEffect.style.animation = "nutZoomOut 1.5s ease-out forwards";

  // Setelah animasi selesai, baru tampilkan website
  setTimeout(() => {
    document.getElementById("flash-sound").play();
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("bgVideo").style.display = "block";
    document.getElementById("bgVideo").muted = false;
    document.getElementById("bgVideo").play();
    document.getElementById('main-app').style.display = 'block';
  }, 1500);
}