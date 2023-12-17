import Header from "../components/headers";
import Footer from "../components/footer";
import GalleryCard from "../components/galleryCard";
import GalleryDetailsCard from "../components/galleryDetailsCard";
import axios from "axios"
import { useState, useEffect } from "react";

export default function Wedding(props) {
  const [FrontPage, setFrontPage] = useState(true)
  const [FolderName, setFolderName] = useState('')
  const [FileArr, setFileArr] = useState([])
  useEffect(() => {
    if (!FrontPage) {
      getFolderImage(FolderName)
    }
  }, [FrontPage, FolderName]);

  async function getFolderImage(foldername) {
    try {
      let name = 'images' + '/' + foldername
      const response = await axios.post('http://localhost:3001/api/imageHandler',
        { folderName: name }
      );
      let imageUrls = []
      console.log(response.data)
      if (response.data.status) {
        imageUrls = response.data.data;
      } else {
        imageUrls = []
      }
      console.log('imageUrls :- ', response.data)
      setFileArr(imageUrls)
    } catch (error) {
      console.error('Error fetching image URLs:', error);
      return {
        props: {
          imageUrls: [],
        },
      };
    }
  }

  return (
    <>
      <Header pageName={'Wedding'} />

      <div style={{ "background-color": "black" }}>
        {FrontPage &&
          <>
            <div class="page-header d-flex align-items-center">
              <div class="container position-relative">
                <div class="row d-flex justify-content-center">
                  <div class="col-lg-6 text-center">
                    <h2>Best Of Seven Vows</h2>
                    <p>
                      Odio et unde deleniti. Deserunt numquam exercitationem.
                      Officiis quo odio sint voluptas consequatur ut a odio
                      voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi
                      ratione sint. Sit quaerat ipsum dolorem.
                    </p>

                    {/* <a class="cta-btn" href="contact.html">Available for hire</a> */}
                  </div>
                </div>
              </div>
            </div>
            <main id="main" data-aos="fade" data-aos-delay="1500">
              <section id="gallery" class="gallery">
                <div class="container">
                  <div class="row gy-4 justify-content-center flex-box-3">

                    {props?.imageUrls?.data?.map((items) => {
                      return (
                        <GalleryCard
                          imagePath={items}
                          handleClick={(e) => { setFrontPage(false), setFolderName(items.split('/').pop().split('.')[0].split('&').join('&')) }}
                        />
                      )
                    })}

                  </div>
                </div>
              </section>
            </main>
          </>
        }

        {!FrontPage &&
          <>
            <main id="main" data-aos="fade" data-aos-delay="1500">
              <div class="page-header d-flex align-items-center">
                <div class="container position-relative">
                  <div class="row d-flex justify-content-center">
                    <div class="text-center">
                      <h2>Wedding Memories</h2>
                    </div>
                  </div>
                </div>
              </div>
              <section id="gallery-single" class="gallery-single">
                <div class="container">
                  <div class="row justify-content-between gy-4 mt-4">
                    <section id="gallery" class="gallery">
                      <div class="container-fluid">
                        <div class="row gy-4 justify-content-center">
                          {/* <div class="gallery-item h-100"> */}
                          {FileArr.map((items) => {
                            return (
                              <GalleryDetailsCard
                                imagePath={items}
                              // handleClick={(e) => { setFrontPage(false), setFolderName(items.split('/').pop().split('.')[0].split('&').join('&')) }}
                              />
                            )
                          })}
                          {/* </div> */}
                        </div>
                      </div>
                    </section>
                  </div>

                </div>
              </section>

            </main>


          </>
        }
        <Footer />
      </div >
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.post('http://localhost:3001/api/imageHandler',
      { folderName: 'images/wedding' }
    );
    const imageUrls = response.data;
    return {
      props: {
        imageUrls,
      },
    };
  } catch (error) {
    console.error('Error fetching image URLs:', error);
    return {
      props: {
        imageUrls: [],
      },
    };
  }
}

