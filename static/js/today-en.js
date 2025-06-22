document.addEventListener("DOMContentLoaded", function () {
  const target = document.getElementById("today-date");
  if (!target) return;

  const now = new Date();
  const opts = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const str = now.toLocaleDateString("en-US", opts);
  target.textContent = str;
});
