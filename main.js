(function () {
  "use strict";

  // ── DOM refs ──────────────────────────────
  var loading     = document.getElementById("loading");
  var topLeft     = document.getElementById("topLeft");
  var topRight    = document.getElementById("topRight");
  var jacketWrap  = document.getElementById("jacketWrap");
  var jacketOuter = document.getElementById("jacketWrapWrap");
  var arrowL      = document.getElementById("arrowL");
  var arrowR      = document.getElementById("arrowR");
  var topEffect   = document.getElementById("topEffect");
  var topHana     = document.getElementById("topHana");
  var topRelease  = document.getElementById("topRelease");
  var topIconWrap = document.getElementById("topIconWrap");
  var topHaguruma = document.getElementById("topHaguruma");
  var topAnother  = document.getElementById("topAnother");
  var backWrap    = document.getElementById("topBackWrap");
  var arrowLWrap  = document.getElementById("arrowLWrap");
  var arrowRWrap  = document.getElementById("arrowRWrap");

  var jacketItems = jacketWrap ? jacketWrap.children : [];
  var backDivs    = backWrap ? backWrap.children : []; // 4 backgrounds
  var REAL_SLIDE_COUNT = 4;
  var VISIBLE_SLOT_COUNT = 5;
  var slideCaptions = {
    1: "",
    2: '"秘密"さしかえアナザージャケット',
    3: '"約束"さしかえアナザージャケット',
    4: '"彗星になれたなら"さしかえアナザージャケット'
  };

  // ── Slider state ─────────────────────────
  var currentIndex = 1;
  var animating    = false;
  var ANIM_DURATION = 500; // ms, matches reference's 500ms

  // ── Gear rotation ────────────────────────
  var gearAngle = 0;

  // ── Position slider ──────────────────────
  function getSlides() {
    if (!jacketWrap) return [];
    return Array.prototype.slice.call(jacketWrap.children);
  }

  function cloneSlide(slide) {
    var clone = slide.cloneNode(true);
    clone.setAttribute("data-clone", "true");
    return clone;
  }

  function clearSlideOffsets() {
    var slides = getSlides();
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.transition = "none";
      slides[i].style.marginLeft = "";
      slides[i].style.marginRight = "";
    }
  }

  function rebuildSlider() {
    if (!jacketWrap) return;

    var slides = getSlides();
    for (var i = slides.length - 1; i >= 0; i--) {
      if (slides[i].getAttribute("data-clone") === "true") {
        jacketWrap.removeChild(slides[i]);
      }
    }

    slides = getSlides();
    if (slides.length !== REAL_SLIDE_COUNT) return;

    jacketWrap.insertBefore(cloneSlide(slides[slides.length - 1]), slides[0]);
    jacketWrap.style.marginLeft = -(jacketWrap.offsetWidth / VISIBLE_SLOT_COUNT) + "px";
    clearSlideOffsets();
  }

  // ── Background switching ─────────────────
  // Maps slider visual index (1-4) to background div (0-3)
  function switchBackground(realIndex) {
    for (var i = 0; i < backDivs.length; i++) {
      if (i === realIndex - 1) {
        backDivs[i].style.display = "block";
        backDivs[i].style.opacity = "1";
      } else {
        backDivs[i].style.opacity = "0";
        // Keep first always in flow; hide others after transition
        if (i > 0) {
          (function (div) {
            setTimeout(function () { if (div.style.opacity === "0") div.style.display = "none"; }, 500);
          })(backDivs[i]);
        }
      }
    }
  }

  function updateSlideCaption(realIndex) {
    if (!topAnother) return;
    var caption = slideCaptions[realIndex] || "";
    topAnother.textContent = caption;
    topAnother.classList.toggle("is-visible", caption !== "");
  }

  function updateCurrentIndex(direction) {
    currentIndex += direction;
    if (currentIndex > REAL_SLIDE_COUNT) currentIndex = 1;
    if (currentIndex < 1) currentIndex = REAL_SLIDE_COUNT;
  }

  // ── Slide next (right arrow) ──────────────
  function slideNext() {
    if (animating || !jacketWrap) return;
    animating = true;

    var slides = getSlides();
    if (slides.length < VISIBLE_SLOT_COUNT) {
      animating = false;
      return;
    }

    var shift = (jacketWrap.offsetWidth / VISIBLE_SLOT_COUNT) * -2;
    var firstSlide = slides[0];
    var nextClone = cloneSlide(slides[1]);

    updateCurrentIndex(1);
    switchBackground(currentIndex);
    updateSlideCaption(currentIndex);

    firstSlide.style.transition = "margin-left " + ANIM_DURATION + "ms cubic-bezier(0.215, 0.61, 0.355, 1)";
    firstSlide.style.marginLeft = shift + "px";

    setTimeout(function () {
      if (firstSlide.parentNode === jacketWrap) jacketWrap.removeChild(firstSlide);
      jacketWrap.appendChild(nextClone);
      jacketWrap.style.marginLeft = -(jacketWrap.offsetWidth / VISIBLE_SLOT_COUNT) + "px";
      clearSlideOffsets();
      animating = false;
    }, ANIM_DURATION + 20);
  }

  // ── Slide prev (left arrow) ──────────────
  function slidePrev() {
    if (animating || !jacketWrap) return;
    animating = true;

    var slides = getSlides();
    if (slides.length < VISIBLE_SLOT_COUNT) {
      animating = false;
      return;
    }

    var shift = (jacketWrap.offsetWidth / VISIBLE_SLOT_COUNT) * -2;
    var lastSlide = slides[slides.length - 1];
    var prevClone = cloneSlide(slides[slides.length - 2]);

    updateCurrentIndex(-1);
    switchBackground(currentIndex);
    updateSlideCaption(currentIndex);

    lastSlide.style.transition = "margin-right " + ANIM_DURATION + "ms cubic-bezier(0.215, 0.61, 0.355, 1)";
    lastSlide.style.marginRight = shift + "px";

    setTimeout(function () {
      if (lastSlide.parentNode === jacketWrap) jacketWrap.removeChild(lastSlide);
      jacketWrap.insertBefore(prevClone, jacketWrap.firstChild);
      jacketWrap.style.marginLeft = -(jacketWrap.offsetWidth / VISIBLE_SLOT_COUNT) + "px";
      clearSlideOffsets();
      animating = false;
    }, ANIM_DURATION + 20);
  }

  // ── Arrow click handlers ──────────────────
  if (arrowR) arrowR.addEventListener("click", slideNext);
  if (arrowL) arrowL.addEventListener("click", slidePrev);

  // ── Keyboard navigation ──────────────────
  window.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") slideNext();
    if (e.key === "ArrowLeft") slidePrev();
  });

  // ── Resize handler ───────────────────────
  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      jacketWrap.style.marginLeft = -(jacketWrap.offsetWidth / VISIBLE_SLOT_COUNT) + "px";
      clearSlideOffsets();
      setArrowHeights();
    }, 200);
  });

  // ── Set arrow wrap heights to match jacket area ──
  function setArrowHeights() {
    if (!jacketOuter) return;
    var rect = jacketOuter.getBoundingClientRect();
    var h = jacketOuter.offsetHeight;
    if (arrowLWrap) {
      arrowLWrap.style.top = rect.top + 50 + "px";
      arrowLWrap.style.height = h + 50 + "px";
    }
    if (arrowRWrap) {
      arrowRWrap.style.top = rect.top + 50 + "px";
      arrowRWrap.style.height = h + 50 + "px";
    }
  }

  // ── Intro animation helper ───────────────
  function animateIn(el, prop, from, to, duration, delay, cb) {
    if (!el) return;
    setTimeout(function () {
      var start = performance.now();
      el.style.opacity = "0";
      el.style[prop] = from;

      function tick(now) {
        var p = Math.min((now - start) / duration, 1);
        // easeOutQuint approximation
        var ease = 1 - Math.pow(1 - p, 5);
        el.style.opacity = String(ease);
        el.style[prop] = (from + (to - from) * ease) + "px";
        if (p < 1) {
          requestAnimationFrame(tick);
        } else {
          el.style.opacity = "1";
          if (cb) cb();
        }
      }
      requestAnimationFrame(tick);
    }, delay);
  }

  // ── On load: hide loading, play intro ────
  window.addEventListener("load", function () {
    // Hide loading screen
    if (loading) loading.classList.add("loading--hidden");

    // Position slider immediately (no animation)
    rebuildSlider();
    switchBackground(currentIndex);
    updateSlideCaption(currentIndex);
    setArrowHeights();

    // === Intro sequence (matching reference site timing) ===

    // 1. Left character slides in from left (0-2600ms)
    animateIn(topLeft, "left", -topLeft.offsetWidth, 0, 2600, 0, function () {
      if (topLeft) topLeft.classList.add("top_left--blur");
    });

    // 2. Right character slides in from right (0-2600ms)
    var rightStart = window.innerWidth * 0.25 + topRight.offsetWidth;
    animateIn(topRight, "right", -topRight.offsetWidth, 0, 2600, 0, function () {
      if (topRight) topRight.classList.add("top_right--blur");
    });

    // 3. Jacket area fades in (2800ms)
    setTimeout(function () {
      if (jacketOuter) {
        jacketOuter.style.transition = "opacity 800ms ease-out";
        jacketOuter.style.opacity = "1";
      }
    }, 2800);

    // 4. Arrows stay visible immediately after load
    if (arrowL) arrowL.style.opacity = "1";
    if (arrowR) arrowR.style.opacity = "1";

    // 5. Release + icon fade in (3100ms)
    setTimeout(function () {
      if (topRelease) {
        topRelease.style.display = "block";
        topRelease.style.opacity = "0";
        topRelease.style.transition = "opacity 800ms ease-out";
        setTimeout(function () { topRelease.style.opacity = "1"; }, 50);
      }
      if (topIconWrap) {
        topIconWrap.style.display = "block";
        topIconWrap.style.opacity = "0";
        topIconWrap.style.transition = "opacity 800ms ease-out";
        setTimeout(function () { topIconWrap.style.opacity = "1"; }, 50);
      }
    }, 3100);

    // 6. Effect flash (1800ms delay, then animate width + fade)
    setTimeout(function () {
      if (topEffect) {
        topEffect.style.display = "block";
        topEffect.style.opacity = "1";
        topEffect.style.transition = "width 1800ms ease-out, opacity 1800ms ease-out";
        topEffect.style.width = "100%";
        topEffect.style.opacity = "0";
        setTimeout(function () { topEffect.style.display = "none"; }, 1800);
      }
      if (topHana) {
        topHana.style.display = "block";
        setTimeout(function () { topHana.style.display = "none"; }, 3600);
      }
    }, 1800);

    // 7. Start gear rotation
    setInterval(function () {
      gearAngle += 1.2;
      if (topHaguruma) topHaguruma.style.transform = "rotate(" + gearAngle + "deg)";
    }, 200);
  });

  // ── Scroll-based fade-in ─────────────────
  function checkFadeElements() {
    var selectors = [".fade", ".fade_nana", ".fade_lili", ".fade_50per"];
    for (var s = 0; s < selectors.length; s++) {
      var sel = selectors[s];
      var cls = sel.replace(".", "");
      var visibleCls = cls + "--visible";
      var els = document.querySelectorAll(sel + ":not(." + visibleCls + ")");
      for (var i = 0; i < els.length; i++) {
        var rect = els[i].getBoundingClientRect();
        var windowH = window.innerHeight;
        if (rect.top < windowH * 0.75) {
          els[i].classList.add(visibleCls);
        }
      }
    }
  }

  window.addEventListener("scroll", checkFadeElements, { passive: true });
  window.addEventListener("load", function () {
    setTimeout(checkFadeElements, 200);
  });

  // ── Modal handlers ───────────────────────
  function setupModal(triggerSel, modalId, imgId, imgOnClass) {
    var triggers = document.querySelectorAll(triggerSel);
    var modal = document.getElementById(modalId);
    var img = imgId ? document.getElementById(imgId) : null;

    for (var i = 0; i < triggers.length; i++) {
      triggers[i].addEventListener("click", function () {
        if (modal) modal.style.display = "block";
        if (img && imgOnClass) img.classList.add(imgOnClass);
      });
    }

    // Close on bg click
    if (modal) {
      var bg = modal.querySelector(".modal_bg");
      if (bg) {
        bg.addEventListener("click", function () {
          modal.style.display = "none";
          if (img && imgOnClass) img.classList.remove(imgOnClass);
        });
      }
    }
  }

  // Nana modal
  setupModal(".list_nana img", "modalNana", "modalNanaImg", "modal_nana_img_on");
  // Lili modal
  setupModal(".list_lili img", "modalLili", "modalLiliImg", "modal_lili_img_on");
  // Macaron modal
  setupModal(".list_macaron", "modalMacaron", "modalMacaronImg", "modal_macaron_img_on");
  // Gohan (gear icon) modal
  setupModal(".top_icon_wrap", "modalGohan", "modalGohanImg", "modal_gohan_img_on");

  // ── Book (artbook) page flip ─────────────
  var bookPages = document.getElementById("bookPages");

  if (bookPages) {
    var pages = bookPages.querySelectorAll(".page");
    var TOTAL_PAGES = pages.length;
    var pageTexts = [
      null,
      document.querySelector(".page_text1"),
      document.querySelector(".page_text2"),
      document.querySelector(".page_text3"),
      document.querySelector(".page_text4"),
      document.querySelector(".page_text5"),
      document.querySelector(".page_text6"),
      document.querySelector(".page_text7"),
    ];

    var pageTextMap = [2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6];

    var bookAnimating = false;

    function updateZIndices() {
      for (var i = 0; i < pages.length; i++) {
        var n = i + 1;
        if (pages[i].classList.contains("flipped")) {
          // Flipped pages on the left: higher page numbers on top
          pages[i].style.zIndex = n;
        } else {
          // Unflipped pages on the right: lower page numbers on top
          pages[i].style.zIndex = TOTAL_PAGES + 1 - n;
        }
      }
    }

    updateZIndices();

    for (var i = 0; i < pages.length; i++) {
      (function (idx) {
        pages[idx].addEventListener("click", function () {
          if (bookAnimating) return;

          var n = idx + 1;

          if (n % 2 === 1) {
            // Odd page (right side) — flip forward
            if (!this.classList.contains("flipped")) {
              bookAnimating = true;
              // Boost z-index during animation so flipping page stays on top
              this.style.zIndex = TOTAL_PAGES + 10;
              if (idx + 1 < pages.length) {
                pages[idx + 1].style.zIndex = TOTAL_PAGES + 9;
              }

              this.classList.add("flipped");
              // Also flip the paired even page (back of the same sheet)
              if (idx + 1 < pages.length) {
                pages[idx + 1].classList.add("flipped");
              }

              setTimeout(function () {
                updateZIndices();
                bookAnimating = false;
              }, 1500);
            }
          } else {
            // Even page (left side) — flip backward
            if (this.classList.contains("flipped")) {
              bookAnimating = true;
              // Boost z-index during animation
              this.style.zIndex = TOTAL_PAGES + 10;
              if (idx - 1 >= 0) {
                pages[idx - 1].style.zIndex = TOTAL_PAGES + 9;
              }

              this.classList.remove("flipped");
              // Also un-flip the paired odd page (front of the same sheet)
              if (idx - 1 >= 0) {
                pages[idx - 1].classList.remove("flipped");
              }

              setTimeout(function () {
                updateZIndices();
                bookAnimating = false;
              }, 1500);
            }
          }

          // Update text
          var textIdx = pageTextMap[idx];
          if (textIdx !== undefined && pageTexts[textIdx]) {
            for (var t = 0; t < pageTexts.length; t++) {
              if (pageTexts[t]) pageTexts[t].style.display = "none";
            }
            pageTexts[textIdx].style.display = "block";
          }
        });
      })(i);
    }
  }

})();
