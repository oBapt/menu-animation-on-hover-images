const images = document.querySelectorAll(".hover-reveal");

document.addEventListener("mousemove", (e) => {
  images.forEach((el) =>
    el.setAttribute(
      "style",
      "top: " + (e.pageY - 160) + "px; left: " + (e.pageX - 110) + "px;"
    )
  );
});
