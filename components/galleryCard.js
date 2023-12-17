import React, { useState, useEffect } from 'react';
export default function GalleryCard(props) {
    const [isLoading, setIsLoading] = useState(true);
    let imageName = props.imagePath.split('/').pop().split('.')[0].split('&').join(' & ')

    useEffect(() => {
        // Simulating a delay for loading data
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust the delay time as needed

    }, []);
    return (
        <>
            {isLoading ? (
                <div id="preloader">
                    <div class="line"></div>
                </div>
            ) :
                <div class="col-xl-3 col-lg-4 col-md-6 flex-single">
                    <div class="gallery-item h-80">
                        <img src={props.imagePath} class="img-fluid" alt="" />
                        <div class="gallery-links d-flex align-items-center justify-content-center">
                            <div className="details-link" id={imageName} onClick={props?.handleClick}>{imageName}</div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}