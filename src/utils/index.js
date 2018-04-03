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
  return getWindowWidth() >= 1200
}
