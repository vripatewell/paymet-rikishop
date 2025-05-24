window.addEventListener('load', function() {
  setTimeout(() => {
    document.getElementById('loading-screen').style.display = 'none';
  }, 1500); // Bisa diubah ke 2000 atau lebih lama jika ingin
});
    
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

  // Play music once
  const music = document.getElementById("music");
  if (music && music.paused) {
    music.play();
  }
}

function closeDetail() {
  document.getElementById("detail-popup").style.display = "none";
}

function copyNumber() {
  navigator.clipboard.writeText(currentNumber).then(() => {
    alert("Nomor disalin: " + currentNumber);
  });
}