export const toggleTheme = () => {
  if(localStorage.getItem('theme') === 'dark') {
    localStorage.setItem('theme', 'bright');
    setBrightTheme();
  } else {
    localStorage.setItem('theme', 'dark');
    setDarkTheme();
  }
};

export const setTheme = () => {
  if(localStorage.getItem('theme') === 'dark') {
    setDarkTheme();
  } else {
    setBrightTheme();
  }
};

const setDarkTheme = () => {
  document.documentElement.style.setProperty('--primary', '#f48fb1');
  document.documentElement.style.setProperty('--primary-dark', '#bf5f82');
  document.documentElement.style.setProperty('--primary-light', '#ffc1e3');
  document.documentElement.style.setProperty('--primary-contrast', '#000');
  document.documentElement.style.setProperty('--primary-background', '#411d31');
  document.documentElement.style.setProperty('--secondary', '#90caf9');
  document.documentElement.style.setProperty('--secondary-dark', '#5d99c6');
  document.documentElement.style.setProperty('--secondary-light', '#c3fdff');
  document.documentElement.style.setProperty('--secondary-contrast', '#000');
  document.documentElement.style.setProperty('--secondary-background', '#e3f2fd');
  document.documentElement.style.setProperty('--default', '#373737');
  document.documentElement.style.setProperty('--default-dark', '#272727');
  document.documentElement.style.setProperty('--default-light', '#474747');
  document.documentElement.style.setProperty('--default-contrast', '#E2E2E2');
  document.documentElement.style.setProperty('--default-background', '#272727');
  document.documentElement.style.setProperty('--background', '#121212');
  document.documentElement.style.setProperty('--background-contrast', '#E2E2E2');
  document.documentElement.style.setProperty('--text', '#E2E2E2');
  document.documentElement.style.setProperty('--text-disabled', '#777');
  document.documentElement.style.setProperty('--paper', '#272727');
  document.documentElement.style.setProperty('--paper-contrast', '#E2E2E2');
};

const setBrightTheme = () => {
  document.documentElement.style.setProperty('--primary', '#ec407a');
  document.documentElement.style.setProperty('--primary-dark', '#b4004e');
  document.documentElement.style.setProperty('--primary-light', '#ff77a9');
  document.documentElement.style.setProperty('--primary-contrast', '#000');
  document.documentElement.style.setProperty('--primary-background', '#fce4ec');
  document.documentElement.style.setProperty('--secondary', '#00bcd4');
  document.documentElement.style.setProperty('--secondary-dark', '#008ba3');
  document.documentElement.style.setProperty('--secondary-light', '#62efff');
  document.documentElement.style.setProperty('--secondary-contrast', '#000');
  document.documentElement.style.setProperty('--secondary-background', '#e0f7fa');
  document.documentElement.style.setProperty('--default', '#BBB');
  document.documentElement.style.setProperty('--default-dark', '#AAA');
  document.documentElement.style.setProperty('--default-light', '#CCC');
  document.documentElement.style.setProperty('--default-contrast', '#000');
  document.documentElement.style.setProperty('--default-background', '#EEE');
  document.documentElement.style.setProperty('--background', '#F5F5F5');
  document.documentElement.style.setProperty('--background-contrast', '#000');
  document.documentElement.style.setProperty('--text', '#000');
  document.documentElement.style.setProperty('--text-disabled', '#999');
  document.documentElement.style.setProperty('--paper', '#FFF');
  document.documentElement.style.setProperty('--paper-contrast', '#000');
};
