<template>
  <div class="AboutUsHome">
    <div class="text-container">
      <h2>TechStore ™</h2>
      <p>
        TechStore ™ u jep klientëve shpejtësinë, saktësinë dhe besueshmërinë që
        ata presin në ekonominë e sotme dixhitale me ritme të shpejta dhe të
        gjithanshme. Një sistem i automatizuar i ruajtjes dhe rikthimit (ASRS),
        ai shfrytëzon fuqinë e robotëve të magazinës për përmbushjen e porosive
        24/7 brenda një plani kub kaq të dendur sa që në fakt mund të
        katërfishojë kapacitetin e ruajtjes dhe të zhbllokojë potencialin e
        vërtetë të hapësirës së ruajtjes.
      </p>
    </div>
    <div class="video-container">
      <video
        autoplay=""
        loop=""
        style="
          background-image: url('https://assets-global.website-files.com/60303082bcc0b14498dbe15d/61112d73da6c2355134a614b_AutoStore warehouse automation robots on grid-poster-00001.jpg');
        "
        muted=""
        playsinline=""
        data-wf-ignore="true"
        data-object-fit="cover"
      >
        <source
          src="https://assets-global.website-files.com/60303082bcc0b14498dbe15d/61112d73da6c2355134a614b_AutoStore warehouse automation robots on grid-transcode.mp4"
          data-wf-ignore="true"
        />
        <source
          src="https://assets-global.website-files.com/60303082bcc0b14498dbe15d/61112d73da6c2355134a614b_AutoStore warehouse automation robots on grid-transcode.webm"
          data-wf-ignore="true"
        />
      </video>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboususHome",
};
</script>
<style scoped>
.AboutUsHome {
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  gap: 100px;
  background: linear-gradient(#b2ffff, 200px, #fff);
}
.text-container {
  width: 47%;
  min-width: 250px;
  max-width: 600px;
}
.video-container {
  width: 47%;
  min-width: 300px;
  max-width: 600px;
  height: fit-content;
  position: relative;
}
.video-container video {
  width: 100%;
}
@media only screen and (max-width: 767px) {
  .text-container h2 {
    font-size: 23px;
  }
  .text-container p {
    font-size: 12px;
  }
}
</style>