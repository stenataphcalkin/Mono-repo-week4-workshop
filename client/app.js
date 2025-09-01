async function getMessage() {
  const response = await fetch(
    "https://mono-repo-week4-workshop.onrender.com/message"
  );

  const message = await response.json();

  const app = document.getElementById("app");
  app.textContent = message;
}

getMessage();