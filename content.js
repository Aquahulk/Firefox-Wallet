// Listen for authentication requests from the web app
window.addEventListener("message", (event) => {
    if (event.data.action === "requestSignature") {
      // Request the extension to sign the message
      browser.runtime.sendMessage(
        { action: "signIn", message: event.data.message },
        (response) => {
          // Send the signature back to the web app
          window.postMessage({ action: "signature", signature: response.signature }, "*");
        }
      );
    }
  });