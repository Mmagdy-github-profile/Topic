let Marketing = document.querySelector(".Marketing");
let getBoxMarketing = document.getElementById("box__one");
let getBoxMarketingTow = document.getElementById("box__tow");
let getBoxMarketingThree = document.getElementById("box__three");

let Design = document.querySelector(".Design");
let getBoxDesign = document.getElementById("box__one");
let getBoxDesignTow = document.getElementById("box__tow");
let getBoxDesignThree = document.getElementById("box__three");
// Scroll
let scroll__up = document.querySelector(".scroll_Top");
let header = document.querySelector("header");

// Changed imag
let getTimelion = document.querySelector(".timelion");
//  get Array Imag
let imageArray = ["01.jpg", "02.jpg", "03.jpg"];

setInterval(() => {
  let randNumber = Math.floor(Math.random() * imageArray.length);

  getTimelion.style.backgroundImage = `url("imag/${imageArray[randNumber]}")`;
}, 3000);

window.onscroll = function () {
  if (scrollY >= 200) {
    scroll__up.style.right = "10px";

    header.style.backgroundImage =
      "linear-gradient(15deg, #80d0c7 0%, #80d0c7 100%)";
  } else {
    scroll__up.style.right = "-50px";
    header.style.backgroundImage =
      "linear-gradient(15deg, #57a1aa 0%, #80d0c7 100%)";
  }
};
scroll__up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavier: "smoth",
  });
};

Design.addEventListener("click", (event) => {
  if (event.currentTarget) {
    Marketing.className = "browse__link Marketing";
    Design.className = "browse__link Design active";
    getBoxDesign.innerHTML = ` 
          <h2 class="box__title">Web Design</h2>
          <p class="box__prag">
            When you search for free CSS templates, you will notice that
            TemplateMo is one of the best websites.
          </p>
          <img
            src="imag/topics/colleagues-working-cozy-office-medium-shot.png"
            alt="pic feature"
            class="box__img"
          />
          <span class="box-pull">14</span>`;
    getBoxDesignTow.innerHTML = `       
           <h2 class="box__title">Graphic</h2>
          <p class="box__prag">
            When you search for free CSS templates, you will notice that TemplateMo is one of the best websites.
          </p>
          <img
            src="imag/topics/undraw_Redesign_feedback_re_jvm0.png"
            alt="pic feature"
            class="box__img"
          />
          <span class="box-pull">14</span>`;
    getBoxDesignThree.innerHTML = `
          <h2 class="box__title">Web Design</h2>
          <p class="box__prag">
            When you search for free CSS templates, you will notice that
            TemplateMo is one of the best websites.
          </p>
          <img
            src="imag/topics/undraw_Remote_design_team_re_urdx.png"
            alt="pic feature"
            class="box__img"
          />
          <span class="box-pull">14</span>
    `;
  }
});

Marketing.addEventListener("click", (event) => {
  if (event.currentTarget) {
    Marketing.className = "browse__link Marketing active";
    Design.className = "browse__link Design ";
    getBoxMarketing.innerHTML = ` 
     
          <h2 class="box__title">Advertising</h2>
          <p class="box__prag">
            Lorem Ipsum dolor sit amet consectetur
          </p>
          <img
            src="imag/topics/undraw_online_ad_re_ol62.png"
            alt="pic feature"
            class="box__img"
          />
          <span class="box-pull-java">30</span>
        
      `;
    getBoxMarketingTow.innerHTML = `       
       <h2 class="box__title">Video Content</h2>
          <p class="box__prag">
            Lorem Ipsum dolor sit amet consectetur
          </p>
          <img
            src="imag/topics/undraw_Group_video_re_btu7.png"
            alt="pic feature"
            class="box__img"
          />
          <span class="box-pull-java">65</span>`;
    getBoxMarketingThree.innerHTML = `
              <h2 class="box__title">Viral Tweet</h2>
          <p class="box__prag">
            Lorem Ipsum dolor sit amet consectetur
          </p>
          <img
            src="imag/topics/undraw_viral_tweet_gndb.png"
            alt="pic feature"
            class="box__img"
          />
          <span class="box-pull-java">50</span>
    `;
  }
});

//---__---button nav
let burgar = document.querySelector(".burgar");

let navLinks = document.querySelector(".navgation");

burgar.addEventListener("click", () => {
  const active = document.querySelector(".disable_link");
  if (active) {
    navLinks.classList.remove("disable_link");
  } else {
    navLinks.classList.add("disable_link");
  }
});

//---__---
