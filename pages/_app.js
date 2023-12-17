import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/assets/css/main.css'
import '../styles/assets/vendor/bootstrap/css/bootstrap.min.css'
import '../styles/assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '../styles/assets/vendor/swiper/swiper-bundle.min.css'
// import 'glightbox/dist/css/glightbox.min.css';
// import 'glightbox/dist/js/glightbox.min.js';


function MyApp({ Component, pageProps }) {
  //   <link
  //   rel="stylesheet"
  //   href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
  //   integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
  //   crossorigin="anonymous"
  // />
  <>
    <link rel="icon" href="../styles/assets/img/favicon.png"></link>
    <link rel="apple-touch-icon" href="../assets/img/apple-touch-icon.png" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Cardo:ital,wght@0,400;0,700;1,400&display=swap"
      rel="stylesheet"
    />

    <link
      href="../styles/assets/vendor/bootstrap/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      href="../styles/assets/vendor/bootstrap-icons/bootstrap-icons.css"
      rel="stylesheet"
    />
    <link href="../styles/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
    <link
      href="../styles/assets/vendor/glightbox/css/glightbox.min.css"
      rel="stylesheet"
    />
    <link href="../styles/assets/vendor/aos/aos.css" rel="stylesheet" />
    <link href="../styles/assets/css/main.css" rel="stylesheet" />

    <script src="../styles/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="../styles/assets/vendor/swiper/swiper-bundle.min.js"></script>
    <script src="../styles/assets/vendor/glightbox/js/glightbox.min.js"></script>
    <script src="../styles/assets/vendor/aos/aos.js"></script>
    <script src="../styles/assets/vendor/php-email-form/validate.js"></script>

    <script src="../styles/assets/js/main.js"></script>
  </>;
  return <Component {...pageProps} />;
}

export default MyApp;
