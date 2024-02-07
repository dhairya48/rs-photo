
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import services from '../main.json'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

function Services(props) {

  // const service = services?.services
  const [loading, setLoading] = useState(true);
  const [serviceDetails, setServiceDetails] = useState([]);
  useEffect(() => {
    // Simulate data fetching (replace with actual data fetching logic)
    const fetchData = async () => {
      // Set a loading state while fetching data
      setLoading(true);

      // Replace this with your actual data fetching logic
      // const response = await fetch('/api/services'); // Example endpoint
      const data = services?.services

      // Set the fetched data and update loading state
      setServiceDetails(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div class="text-bg-dark pt-5" id={props.id}>
      <section id="ourServices" class="container">
        <div>
          <div class="mytextdiv">
            <div class="mytexttitle red-color">
              OUR SERVICES
            </div>
            <div class="divider"></div>
          </div>
          <h1 class="fw-bold pt-1">WHAT <span class="only-outline">WE DO</span></h1>
          <p>In a world we are constantly bambarded with images, <br /> photography has the power to cut though the noise
            and make us pause</p>

        </div>

        <div class="row mt-5">
          {loading ?
            (
              // Skeleton loading effect while data is being fetched
              Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="col-sm-3 d-flex justify-content-center mb-2">
                  <div className="border border-white rounded p-3 main-container" style={{ width: '85%' }}>
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <Skeleton height={255} style={{ marginBottom: '8px' }} count={1} />
                      <Skeleton height={20} width={150} style={{ marginBottom: '8px' }} count={1} />
                      <Skeleton height={60} count={1} />
                    </SkeletonTheme>
                  </div>
                </div>
              ))
            ) :


            serviceDetails.map(((items, index) => {
              return (
                <div class="col-sm-3 d-flex justify-content-center mb-2" key={index}>
                  <div class="border border-white rounded p-3" style={{ "width": "85%" }}>
                    <Image src={`http://localhost:3000/images/${items.image}`} class="rounded mb-2"
                      width={225} height={255} alt="image2" />
                    <b class="mt-1">{items.name}</b>
                    <p>{items.description}</p>
                  </div>
                </div>
              )


            }))
          }

        </div>

        <div class="d-flex justify-content-center  mt-5 mb-5">
          {/* <button class="btn btn-danger mt-5 mb-5">View All Services</button> */}
        </div>
      </section>


      <div class="row pb-5">
      </div>

    </div>
  );
}

export default Services;