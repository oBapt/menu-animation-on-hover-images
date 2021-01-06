const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 40) + "px; left: " + (e.pageX - 40) + "px;"
  );
});
