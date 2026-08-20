const promotionSection = document.querySelector(".summer-promotion");

if (promotionSection) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          promotionSection.classList.add("is-visible");
        } else {
          promotionSection.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.35,
    },
  );

  observer.observe(promotionSection);
}
