import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
export default function GAlleryDetailsCard(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };



    // let imageName = props.imagePath.split('/').pop().split('.')[0].split('&').join(' & ')

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
                <>
                    <div class="col-xl-3 col-lg-4 col-md-6 flex-single">
                        <div class="gallery-item h-80">
                            <img src={props.imagePath} class="img-fluid" alt="" />
                            <div class="gallery-links d-flex align-items-center justify-content-center">
                                <a href="" title="Gallery 1" class="btn btn-primary preview-link" >
                                    <i class="bi bi-arrows-angle-expand" onClick={() => setSelectedImage(props.imagePath)}></i></a>
                            </div>
                        </div>
                    </div>

                    {selectedImage !== null &&
                        <Modal show={selectedImage !== null} onHide={closeModal}>
                            <Modal.Header closeButton>
                                {/* Modal header content */}
                            </Modal.Header>
                            <Modal.Body>
                                <img src={selectedImage} className="img-fluid" alt="" />
                            </Modal.Body>
                            <Modal.Footer>
                                {/* Modal footer content */}
                            </Modal.Footer>
                        </Modal>
                    }
                </>

            }
        </>
    )
}