document.addEventListener("DOMContentLoaded", (event) => {
  const tl = gsap.timeline({ duration: 1 });
  const tl2 = gsap.timeline({ duration: 1 });

  tl.fromTo(
    "header .left",
    {
      opacity: 0,
      x: -20,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
    }
  ).fromTo(
    "header nav .link",
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: 0,
      stagger: 0.3,
    },
    "-=0.5"
  );

  tl2
    .fromTo(
      ".s-hero .robot",
      {
        opacity: 0,
        y: 20,
      },
      {
        y: 0,
        opacity: 1,
      }
    )
    .fromTo(
      ".s-hero .left-container",
      {
        opacity: 0,
        x: -20,
      },
      {
        x: 0,
        opacity: 1,
      },
      "-=0-2"
    )
    .fromTo(
      ".s-hero .container .second-content ul li",
      {
        opacity: 0,
        y: 20,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
      }
    )
    .fromTo(
      ".s-hero .second-content .card-lg",
      {
        opacity: 0,
        x: 20,
      },
      {
        x: 0,
        opacity: 1,
      }
    )
    .fromTo(
      ".s-hero .left-container .launching",
      {
        opacity: 0,
        scale: 0,
      },
      {
        scale: 1,
        opacity: 1,
      }
    )
    .fromTo(
      ".s-hero .container .second-content .we-robot",
      {
        opacity: 0,
        x: 20,
      },
      {
        opacity: 1,
        x: 0,
      }
    );
});
