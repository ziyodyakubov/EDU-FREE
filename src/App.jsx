import { useState } from 'react'
import './App.scss'
import Header from "./components/Header";
import sectionmain from "./assets/images/section-1-asosiy.png";
import icon1 from "./assets/images/icon-1.svg";
import icon2 from "./assets/images/icon-2.svg";
import icon3 from "./assets/images/icon-3.svg";
import icon4 from "./assets/images/icon-4.svg";
import icon5 from "./assets/images/icon-5.svg";
import Card from './components/UI/Card';
import LastImage from "./assets/images/section-3-img.png";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <section id="section-1" className="section-1">
          <div className="container">
            <div className="section-1_wrapper">
              <div className="section-1_wrapper-title">
                <h2>Bangun dan Wujudkan Cita Bersama EDUFREE</h2>

                <p>EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secara online
                  yang bertujuan untuk membantu kamu meraih cita di bidang teknologi.</p>

                <div className="buttons-wrapper">
                  <button className="kursu">Lihat Kursus</button>
                  <button className='lihat'>Lihat Alur Belajar <i class='bx bx-right-arrow-alt'></i></button>
                </div>
              </div>

              <div className="section-1_wrapper-img">
                <img src={sectionmain} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section id="section-2" className='section-2'>
          <div className="container">
              <div className="section-2_wrapper">
                <div className="section-2_wrapper-left">
                    <div className="left-card">
                      <h2>21.000+</h2>
                      <p>Siswa terdaftar</p>
                    </div>

                    <div className="left-card">
                      <h2>100+</h2>
                      <p>Instruktur Ahli</p>
                    </div>

                    <div className="left-card">
                      <h2>150+</h2>
                      <p>Kursus Gratis</p>
                    </div>
                </div>

                <div className="section-2_wrapper-right">
                    <div className="right-card">
                      <img src={icon1} alt="" />
                      <h2>LOREM</h2>
                    </div>

                    <div className="right-card">
                      <img src={icon2} alt="" />
                      <h2>LOREM</h2>
                    </div>

                    <div className="right-card">
                    <img src={icon3} alt="" />
                      <h2>LOREM</h2>
                    </div>

                    <div className="right-card">
                    <img src={icon5} alt="" />
                      <h2>LOREM</h2>
                    </div>

                    <div className="right-card">
                      <img src={icon4} alt="" />
                      <h2>LOREM</h2>
                    </div>


                </div>
              </div>
          </div>
        </section>

        <section id="section-3" className='section-3'>
          <div className="container">
            <div className="section-3_wrapper">
            <h2>Keuntungan Bergabung Dengan  E-Learning EDUFREE</h2>


            <div className="card-wrapper">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
            </div>
          </div>
        </section>

        <section id="section-4" className='section-4'>
          <div className="container">
            <div className="section-4-wrapper">
              <div className="title">
                <small>Tentang Kami</small>

                <h2>EDUFREE Layanan E-Learning Gratis Untuk Membantu Kamu Bertumbuh</h2>

                <p>Edufree diharapkann bisa menjadi layanan yang bermanfaat bagi kedepanya dalam bidang pendidikan</p>
              </div>

              <div className="img">
                <img src={LastImage} alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>

      </footer>
    </>
  )
}

export default App
