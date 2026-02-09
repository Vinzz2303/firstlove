const { useState } = React;

const timelineItems = [
  {
    date: "Januari 2023",
    title: "Pertemuan pertama yang sederhana",
    text: "Tatap yang canggung berubah jadi tawa yang akrab dalam satu sore.",
  },
  {
    date: "Agustus 2024",
    title: "Jalan pulang yang terasa singkat",
    text: "Kita berbagi cerita dan kota terlihat lebih hangat.",
  },
  {
    date: "januari 2025",
    title: "Mimpi yang saling dijaga",
    text: "Kamu menyebut masa depan dengan suara pelan, aku percaya.",
  },
];

const memoryCards = [
  {
    icon: "01",
    title: "Hujan yang kita tunggu",
    text: "Di bawah payung, kita sepakat bahwa diam pun bisa jadi bahagia.",
  },
  {
    icon: "02",
    title: "Nada favoritmu",
    text: "Lagu lama terasa baru karena kamu ikut bernyanyi.",
  },
  {
    icon: "03",
    title: "Kafe kecil di sudut kota",
    text: "Tempat di mana waktu melambat dan senyum tidak kita simpan.",
  },
  {
    icon: "04",
    title: "Janji sederhana",
    text: "Saling pulang ketika lelah, saling jaga ketika ragu.",
  },
];

function App() {
  const [message, setMessage] = useState(
    "Jika hati kamu masih terbuka, izinkan aku menata ulang kisah kita."
  );

  return (
    <div className="page">
      <div className="glow one"></div>
      <div className="glow two"></div>

      <section className="hero container">
        <div>
          <div className="eyebrow fade-up">Sebuah surat yang lembut</div>
          <h1 className="hero-title fade-up delay-1">
            Olivia <span>Ananda</span>, mari mengingat masa lalu yang indah
          </h1>
          <p className="fade-up delay-2">
            Ada banyak hal yang belum sempat aku katakan. Hari ini, aku memilih
            jujur: aku rindu kebersamaan yang sederhana, rindu ketenangan yang
            selalu kamu bawa.
          </p>
          <div className="tag-list fade-up delay-3">
            <span className="tag">Elegan</span>
            <span className="tag">Romantis</span>
            <span className="tag">Pulang</span>
          </div>
        </div>
        <div className="hero-card fade-up delay-2">
          <h3 className="section-title">Kenangan yang selalu kembali</h3>
          <p>
            Kita pernah berjalan tanpa perlu banyak kata. Kini aku ingin
            menjemput lagi rasa itu, perlahan, dengan hati yang lebih matang.
          </p>
          <p>
            Jika kamu bersedia, aku ingin memulai dari hal kecil: mendengar
            kabarmu, memberi ruang, dan membiarkan cinta tumbuh lebih bijaksana.
          </p>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">Jejak yang tidak pernah pudar</h2>
        <p className="section-subtitle">
          Setiap momen punya cahaya sendiri. Aku ingin kita menatapnya lagi,
          bukan untuk mengulang, tapi untuk memahami betapa berharganya kamu.
        </p>
        <div className="timeline">
          {timelineItems.map((item) => (
            <div className="timeline-card fade-up" key={item.date}>
              <div className="timeline-date">{item.date}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="video-wrap fade-up">
          <div>
            <h2 className="section-title">Video yang tak bisa kulupakan</h2>
            <p className="section-subtitle">
              Aku putar ulang ini berkali-kali, berharap suaramu datang kembali.
              Kadang aku cuma duduk diam, memikirkan kita, merasa kosong, dan
              kangen yang tidak bisa dijelaskan.
            </p>
            <p className="video-note">
              Jika ada satu hal yang ingin kuubah, itu adalah jarak di antara
              kita sekarang. Aku rindu, Olivia.
            </p>
          </div>
          <div className="video-card">
            <video controls preload="metadata">
              <source src="media/olivia-ananda.mp4" type="video/mp4" />
              Browser kamu tidak mendukung video.
            </video>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">Detail kecil yang membuatku tersenyum</h2>
        <p className="section-subtitle">
          Hal-hal sederhana yang dulu terasa biasa, sekarang justru terasa
          paling istimewa.
        </p>
        <div className="memory-grid">
          {memoryCards.map((card) => (
            <div className="memory-card fade-up" key={card.title}>
              <div className="memory-icon">{card.icon}</div>
              <h5>{card.title}</h5>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="letter fade-up">
          <h2 className="section-title">Sebuah niat yang pelan</h2>
          <p>
            Olivia, aku tidak ingin memaksa. Aku hanya ingin memberi tahu bahwa
            ada ruang di hati ini yang masih bernama kamu. Bila kamu siap, mari
            bertemu lagi dengan versi terbaik kita.
          </p>
          <p>
            <strong>{message}</strong>
          </p>
          <div className="cta">
            <button
              className="button primary"
              onClick={() =>
                setMessage(
                  "Aku siap mendengar semuanya, tanpa menyela, tanpa terburu-buru."
                )
              }
            >
              Aku ingin berbicara
            </button>
            <button
              className="button secondary"
              onClick={() =>
                setMessage(
                  "Terima kasih sudah membaca. Aku akan menunggumu dengan tenang."
                )
              }
            >
              Aku butuh waktu
            </button>
          </div>
        </div>
      </section>

      <footer className="footer container">
        Untuk Olivia Ananda, dengan rasa yang belum selesai.
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
