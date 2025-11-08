document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("confessionForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.submit();
      // Redirect to thank you page after short delay
      setTimeout(() => {
        window.location.href = "thankyou.html";
      }, 1200);
    });
  }
});
