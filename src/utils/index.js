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

export function isMobile() {
  return getWindowWidth() < 768
}

export function isTablet() {
  return getWindowWidth() >= 768 && getWindowWidth() <= 1024
}

export function isDesktop() {
  return getWindowWidth() > 1024
}