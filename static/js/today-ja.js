document.addEventListener("DOMContentLoaded", function () {
  const target = document.getElementById("today-date");
  if (!target) return;

  const jst = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
  const d = new Date(jst);
  const y = d.getFullYear(), m = d.getMonth() + 1, day = d.getDate();
  const wd = ["日", "月", "火", "水", "木", "金", "土"][d.getDay()];
  target.textContent = `${y}年${m}月${day}日（${wd}）`;
});
