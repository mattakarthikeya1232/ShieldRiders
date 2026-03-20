function openForm() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("formPage").classList.remove("hidden");
}

function processClaim() {
  const agree = document.getElementById("agree").checked;

  if (!agree) {
    alert("Please confirm details");
    return;
  }

  document.getElementById("formPage").classList.add("hidden");
  document.getElementById("loadingPage").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("loadingPage").classList.add("hidden");
    document.getElementById("successPage").classList.remove("hidden");
  }, 2000);
}