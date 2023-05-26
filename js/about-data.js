function getDataAbout() {
  fetch("../assets/content/about-data.json")
  .then( (response) => response.json())
  .then((info) => {
      document.getElementById("about-data").innerHTML += `
      <div class="row align-items-center">
      <div class="col-lg-6">
        <div class="border-radius" >
        <img src="${info.img}" class="img-fluid" alt="">
        </div>
      </div>
      <div class="col-lg-6">
        <div class="p-3" >
          <h2 class="mb-4 mt-3" >${ info.header}</h2>
          <p> ${info.content1} <a href="#">${info.linkHash}</a>.</p>
          <p class="mb-4" >${info.content2}</p>
          <a href="contact.html" class="btn main-btn main-btn--scroll me-3 scrollTo" data-target="service">
            <span >Get in touch</span>
            <div class="marquee" aria-hidden="true">
              <div class="marquee__inner" >
                <span >Get in touch</span>
                <span >Get in touch</span>
                <span >Get in touch</span>
                <span >Get in touch</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      </div>
      `
  })
}
getDataAbout();
function getDataTeam() {
  fetch("../assets/content/team-data.json")
  .then( (response) => response.json())
  .then((info) => {
    info.forEach(card => {
      console.log(card)
    document.getElementById("team-data").innerHTML += `
    <div class="col-lg-6">
    <div class="row">
      <div class="col-md-6 mb-5 mb-md-0">
        <div><img src="${card.img}" class="img-fluid cardImg not" alt=""></div>
      </div>
      <div class="col-md-6 d-flex align-self-stretch mb-5 mb-md-0">
        <div class="mainCard our-team mainCard--light">
          <h4 class="mb-3" >${card.name}</h4>
          <p>${card.content}</p>
          <p class="pt-3 mb-0 border-top" ><a href="tel:+01118129509"><i class="bi bi-whatsapp me-2"></i>${card.PhoneNumber}</a></p>
        </div>
      </div>
    </div>
  </div>
  `
  });
  })
}
getDataTeam();