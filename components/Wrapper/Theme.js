import {ThemeProvider} from 'next-themes';
import dynamic from 'next/dynamic';
const Theme = ({Component, pageProps}) => {
  return (
    <ThemeProvider>
    <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default Theme