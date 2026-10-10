/* Vood – progressive enhancement only. Content is fully visible without JS. */
(function () {
  var root = document.documentElement;
  if (!("IntersectionObserver" in window)) return;
  root.classList.add("js");
  var items = document.querySelectorAll(".reveal");
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
})();
