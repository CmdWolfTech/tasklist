document.addEventListener("DOMContentLoaded", function () {
  const target = document.getElementById("today-date");
  if (!target) return;

  const jstString = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
  const jstDate = new Date(jstString);

  const year = jstDate.getFullYear();
  const month = jstDate.getMonth() + 1;
  const day = jstDate.getDate();
  const weekdayNames = ["日", "月", "火", "水", "木", "金", "土"];
  const weekday = weekdayNames[jstDate.getDay()];

  target.textContent = `${year}年${month}月${day}日（${weekday}）`;
});
