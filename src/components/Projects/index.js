import React from "react";

function Projects() {
    const dayplanner = "https://isaachrr4.github.io/dayplanner/" ;
    const cryptotycoon = "https://anthonyszymczak.github.io/Crypto-Tycoon/";
    const Horiseon = "https://isaachrr4.github.io/msund12/";
    const YrTracks = "https://cryptic-temple-23894.herokuapp.com/";

    return (
        <section>
            <div class="grid grid-flow-col auto-cols-max">
  <div>
      <h1>dayplanner</h1>
      <p> An app that allows you to plan out your 9-5 schedule!</p>
      <a>
          href={dayplanner}
      </a>
  </div>
  <div>
      <h1>Cryptotycoon!</h1>
      <p>This is an clicker game app that allows you to collect doge coin
          according to its day to day value! With the money collected
          it allows you to covert it into USD and purcahse parts for a computer
          that is built virtually!
      </p>
      <a>
          href={cryptotycoon}
      </a>
  </div>
  
  <div>
      <h1>Horiseon</h1>
      <p> This site was a site i used to practice HTMl and CSS</p>
      <a>
          href= {Horiseon}
      </a>
  </div>
  <div>
      <h1>YrTracks</h1>
      <p>This app was my second group project!..it is an app that allows you to search
          for your favorite artists and find thier discography
          and save it to your profile
      </p>
      <a>
          href={YrTracks}
      </a>
  </div>
</div>
        </section>
    )
}


export default Projects;