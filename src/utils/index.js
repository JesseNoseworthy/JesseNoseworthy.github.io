import $ from 'jquery';

export function getWindowWidth() {
  return window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
}

export function getWindowHeight() {
  return window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
}

export function freezeDocument() {
  document.body.style.cssText += 'overflow: hidden; width: 100%; height: 100%;';
}

export function unfreezeDocument() {
  document.body.style.cssText += 'overflow: auto; width: auto; height: auto;';
}

export function freezeDeviceDocument(topValue) {
  document.body.style.cssText += `overflow: hidden; width: 100%; height: 100%; position: fixed; top: -${topValue}px`;
}

export function unfreezeDeviceDocument(topValue) {
  document.body.style.cssText += 'overflow: auto; width: auto; height: auto; position: static;';
  const initialTopValue = document.body.style.top;
  const pureTopValue = initialTopValue.match(/\d/g).join('');
  window.scrollTo(0, pureTopValue)
}

export function isMobile() {
  return getWindowWidth() < 768
}

export function isTablet() {
  return getWindowWidth() >= 768 && getWindowWidth() < 1200
}

export function isDesktop() {
  return getWindowWidth() >= 1200 && getWindowWidth() < 1920
}

export function isDesktopLarge() {
  return getWindowWidth() >= 1920 && getWindowWidth() < 2560
}

export function isDesktopExtraLarge() {
  return getWindowWidth() >= 2560
}

export function isDesktopAll() {
  return getWindowWidth() >= 1200
}

export function getResponsiveItem(desktop, tablet, mobile) {
  if (desktop) {
    if (isMobile()) {
      return mobile || desktop
    } else if (isTablet()) {
      return tablet || desktop
    } else {
      return desktop
    }
  }
}

export function smoothScroll(element, scrollSpeed, offset) {
  function getScrollSpeed() {
    if (scrollSpeed) {
      return scrollSpeed
    }
    return 425
  }
  if (element.hash !== '') {
    const hash = element.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - offset
    }, getScrollSpeed(), () => {
      window.location.hash = hash;
    });
  }
}