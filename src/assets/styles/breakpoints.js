export const deviceSizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const device = {
  mobile: `(min-width: ${deviceSizes.mobileS}px)`,
  tablet: `(min-width: ${deviceSizes.tablet}px)`,
  desktop: `(min-width: ${deviceSizes.laptop}px)`,
  desktopL: `(min-width: ${deviceSizes.laptopL}px)`,
  desktopXL: `(min-width: ${deviceSizes.desktop}px)`,
};
