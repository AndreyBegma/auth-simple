const btns = { 
  signIn: document.querySelector("#btnSignIn"),
  signUp: document.querySelector("#btnSignUp")
}

const links = { 
  signIn: "/sign-in.html",
  signUp: "/sign-up.html"
}


const handleRedirect = (url) => { 
  window.location.href = url
}


btns.signIn.addEventListener("click", () => handleRedirect(links.signIn))
btns.signUp.addEventListener("click", () => handleRedirect(links.signUp))