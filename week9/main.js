document.querySelector(".popup").addEventListener("click", () => {
  const popup = window.open(
    "https://sitepoint.com",
    "SitePoint",
    "width=400,height=400,resizable=yes"
  );

  window.setTimeout(() => popup.close(), 3000);
});

if (window.Notification) {
  Notification.requestPermission().then((permission) => {
    if (Notification.permission === "granted") {
      new Notification("Hello JavaScript!");
    }
  });
}
