// docs/js/landing.js

function updateLandingState() {
  const isDarkPage = !!document.querySelector("[data-velr-dark-page]");

  if (isDarkPage) {
    // Mark marketing pages for CSS + force dark scheme
    document.documentElement.classList.add("velr-landing");
    document.body.setAttribute("data-md-color-scheme", "slate");
  } else {
    document.documentElement.classList.remove("velr-landing");
    document.body.setAttribute("data-md-color-scheme", "default");
  }
}

// Run once on initial load (handle both early/late script execution)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", updateLandingState);
} else {
  updateLandingState();
}

// Run again on SPA navigation if instant navigation is enabled
if (window.document$ && typeof document$.subscribe === "function") {
  document$.subscribe(updateLandingState);
}
