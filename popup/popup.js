document.getElementById("signIn").addEventListener("click", () => {
    // Send a message to the background script to sign in
    browser.runtime.sendMessage({ action: "signIn" });
  });