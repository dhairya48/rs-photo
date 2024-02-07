import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/assets/vendor/bootstrap/css/bootstrap.min.css'
import '../styles/assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '../styles/assets/vendor/swiper/swiper-bundle.min.css'


function MyApp({ Component, pageProps }) {
  <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" ></link>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
    {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script> */}
  </>;
  return <Component {...pageProps} />;
}

export default MyApp;