import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'

function HomePage() {
  return <div>
    <Head>
      <title>UltraCraft</title>
    </Head>
    <div className="page-wrapper">
      <Header />
      <section id="Slider">
        <div id="particles-js"></div>
        <img src="images/bg.png" className="image-bg" style={{opacity: .5}} />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div style={{margin: '0 0 5% 0'}}>
                <h3 style={{margin: 0}}>
                  Survival <span>//</span> Skyblock <span>//</span> Skywars
                </h3>
                <h1>UltraCrafT</h1>
              </div>
            </div>
            <div className="col-12">
              <h3 className="slider-playercount">Join <span className="player-count" data-ip="play.ultracraft.xyz" data-port="25582">0</span> other players</h3>
              <a href="#" className="server-ip btn-effect btn-secondary effect-slash">
                <div className="effect-inner">
                  <span className="effect-l"><span><small>play</small>.UltraCraft.<small>xyz</small></span></span>
                  <span className="effect-r"><span><small>play</small>.UltraCraft.<small>xyz</small></span></span>
                  <span className="effect-shade"><span><small>play</small>.UltraCraft.<small>xyz</small></span></span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <img src="images/header1.png" className="dividerBottom" />
      </section>
      
      <section id="Section2">
        <div className="container">
          <div className="row column-height">
            <div className="col-6 col-md-6">
              <img className="image-responsive" src="images/section1.png" />
            </div>
            <div className="col-6 col-md-6">
              <h5>INTRODUCTION</h5>
              <h2>
                What Is...
                UltraCraft?
              </h2>
              <h6>A Survival & SkyBlock Server</h6>
              <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
              <a href="#" className="btn-effect btn-white-bg effect-slash">
                <div className="effect-inner">
                  <span className="effect-l"><span>Learn More</span></span>
                  <span className="effect-r"><span>Learn More</span></span>
                  <span className="effect-shade"><span>Learn More</span></span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <img src="images/top_dark.png" className="dividerBottom" />
      </section>
      
      <section id="Section3">
        <div className="container">
          <div className="row column-height clearfix">
            <div className="col-6 col-md-6 text-right">
              <h5>GAMEMODES</h5>
              <h2>
                Survival
              </h2>
              <h6>An Enhanced Survival Experience</h6>
              <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
            </div>
            <div className="col-6 col-md-6">
              <img className="image-responsive" src="images/survival.jpg" alt="Survival" />
            </div>
          </div>
          <br />
          <div className="row column-height">
            <div className="col-6 col-md-6">
              <img className="image-responsive" src="images/skyblock.jpg" alt="Skyblock" />
            </div>
            <div className="col-6 col-md-6">
              <h5>GAMEMODES</h5>
              <h2>
                SkyBlock
              </h2>
              <h6>Classic Skyblock (Currently Offline)</h6>
              <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
            </div>
            <iframe src="https://discordapp.com/widget?id=630088304901226506&amp;theme=dark" width="350" height="400"></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  </div>
}

export default HomePage