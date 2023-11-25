import localFont from 'next/font/local'

const fontOpenSans = localFont({
  variable: '--font-opensans',
  src: [
    {
      path: '../public/fonts/OpenSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/OpenSans-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/OpenSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/OpenSans-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/OpenSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/OpenSans-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/OpenSans-Bold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/OpenSans-BoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../public/fonts/OpenSans-ExtraBold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/OpenSans-ExtraBoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
})

export { fontOpenSans }
