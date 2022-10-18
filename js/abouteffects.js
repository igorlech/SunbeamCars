const media = document.querySelector("video");
media.autoplay = true;
media.load();

const observerVid = new IntersectionObserver((entries, observerVid) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        media.autoplay = true;
        media.load();
        media.muted = true;
        observerVid.unobserve(entry.target);
      } else {
        media.autoplay = false;
      }
    })
}, {threshold: 0.5})

const vids = document.getElementsByClassName("video");

for (const anim of vids) {
    observerVid.observe(anim)
}

const observerAnim = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("tracking-in-contract")
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove("tracking-in-contract")
      }
    })
}, {threshold: 0.5})

const anims = document.getElementsByClassName("btw-head");

for (const anim2 of anims) {
    observerAnim.observe(anim2)
}

let observer = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            document.getElementById("a1").classList.remove("active");
            document.getElementById("a2").classList.remove("active");
            document.getElementById("a3").classList.remove("active");
            document.getElementById("a4").classList.remove("active")

            if (entry.target.id==="btw-about") {
                document.getElementById("a1").classList.add("active"); 
            }

            if (entry.target.id==="btw-services") {
                document.getElementById("a2").classList.add("active");
            }

            if (entry.target.id==="btw-loc") {
                document.getElementById("a3").classList.add("active");
            }

            if (entry.target.id==="video") {
                document.getElementById("a4").classList.add("active");
            }
        }
    };
}, { threshold: 0.7 }); 

const points = document.getElementsByClassName("searcher");
for (const point of points) {
    observer.observe(point)
}