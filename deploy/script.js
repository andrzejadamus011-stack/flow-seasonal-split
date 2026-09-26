(function () {
  "use strict";
  var EMAIL = "kontakt@flowserwis.pl";

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

  // ---------- Wybór usługi -> formularz ----------
  var textarea = document.getElementById("service-description");
  var target = document.getElementById("zlec-serwis");
  document.querySelectorAll("button.pro-card-glow").forEach(function (card, i) {
    card.addEventListener("click", function () {
      var titleEl = card.querySelector("h3");
      var title = titleEl ? titleEl.textContent.trim() : "";
      var price = "";
      card.querySelectorAll("*").forEach(function (el) {
        if (!price && el.children.length === 0 && /^od\s/i.test(el.textContent.trim())) price = el.textContent.trim();
      });
      var label = (i >= 6 ? "Przegląd: " : "") + title + (price ? " (" + price + ")" : "");
      if (textarea) textarea.value = "Usługa: " + label + "\n\n";
      if (target) target.scrollIntoView({ behavior: "smooth" });
      setTimeout(function () { if (textarea) textarea.focus({ preventScroll: true }); }, 600);
    });
  });

  // ---------- Wysyłka formularza (program pocztowy) ----------
  var form = document.querySelector("#zlec-serwis form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var g = function (k, max) { return String(fd.get(k) || "").trim().slice(0, max); };
      var name = g("name", 80), phone = g("phone", 30), bike = g("bikeType", 30),
          desc = g("description", 1200), date = g("preferredDate", 30);
      if (!name || !phone || !bike || !desc || !date) return;
      var subject = encodeURIComponent("Zgłoszenie serwisowe – " + name);
      var body = encodeURIComponent("Imię: " + name + "\nTelefon: " + phone + "\nTyp roweru: " + bike +
        "\nPreferowany termin: " + date + "\n\nOpis usterki / zakres usługi:\n" + desc);
      window.location.href = "mailto:" + EMAIL + "?subject=" + subject + "&body=" + body;
    });
  }
})();
