(function () {
  "use strict";

  // ---------- Ekran startowy: wybór sezonu ----------
  var TRAIL = "M -80 820 C 220 760, 380 560, 640 600 S 1060 820, 1300 520 S 1560 160, 1700 120";
  var chooser = document.querySelector(".flow-chooser");
  if (chooser) {
    var picked = null;
    chooser.querySelectorAll('button[aria-label]').forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (picked) return;
        picked = btn.getAttribute("aria-label").indexOf("rower") !== -1 ? "bike" : "ski";
        var logo = chooser.querySelector("img[src*='flow-logo']");
        if (logo) { logo.classList.remove("opacity-100"); logo.classList.add("opacity-0", "delay-700"); }
        var overlay = document.createElement("div");
        overlay.className = "pointer-events-none absolute inset-0 z-30 trail-" + picked;
        overlay.innerHTML =
          '<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" class="h-full w-full">' +
          '<path d="' + TRAIL + '" class="trail-glow"></path><path d="' + TRAIL + '" class="trail-line"></path></svg>' +
          '<div class="trail-fill absolute inset-0"></div>';
        chooser.appendChild(overlay);
        setTimeout(function () {
          window.location.href = picked === "bike" ? "/rowery.html" : "/narty.html";
        }, 1500);
      });
    });
  }

  // ---------- Menu mobilne ----------
  var ICON_MENU = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>';
  var ICON_X = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>';
  var menu = document.getElementById("mobile-menu");
  var toggle = document.querySelector("header button[aria-expanded]");
  if (menu && toggle) {
    var setMenu = function (open) {
      menu.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Zamknij menu" : "Otwórz menu");
      toggle.innerHTML = open ? ICON_X : ICON_MENU;
    };
    toggle.addEventListener("click", function () { setMenu(menu.hidden); });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });
  }

  // ---------- Akordeon cennika ----------
  document.querySelectorAll('button[data-orientation="vertical"][id]').forEach(function (trigger) {
    var item = trigger.closest("div[data-state]");
    var region = item && item.querySelector('[role="region"]');
    if (!region) return;
    trigger.setAttribute("aria-controls", region.id);
    trigger.addEventListener("click", function () {
      var open = trigger.getAttribute("aria-expanded") !== "true";
      var state = open ? "open" : "closed";
      trigger.setAttribute("aria-expanded", String(open));
      [item, trigger, trigger.parentElement, region].forEach(function (el) { el.setAttribute("data-state", state); });
      region.hidden = !open;
    });
  });

})();
