import React, { useState, useEffect } from 'react';
// import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getImg } from '../cervises/getImg';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { Button } from 'components/Button';
import { Loader } from 'components/Loader';
import {Modal} from 'components/Modal';



export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [imagesOnPage, setImagesOnPage] = useState(0);
  const [totalImages, setTotalImages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [images, setImages] = useState(null);
  const [error, setError] = useState(null);
  const [currentImageUrl, setCurrentImageUrl] = useState(null);
  const [currentImageDescription, setCurrentImageDescription] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const { hits, totalHits } = await getImg(query);
        const imagesArray = hits.map(hit => ({
          id: hit.id,
          description: hit.tags,
          smallImage: hit.webformatURL,
          largeImage: hit.largeImageURL,
        }));

        setImages(imagesArray);
        setImagesOnPage(imagesArray.length);
        setTotalImages(totalHits);
        setPage(1);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (query !== '') {
      fetchImages();
    }
  }, [query]);

  useEffect(() => {
    const fetchMoreImages = async () => {
      setIsLoading(true);
      try {
        const { hits } = await getImg(query, page);
        const imagesArray = hits.map(hit => ({
          id: hit.id,
          description: hit.tags,
          smallImage: hit.webformatURL,
          largeImage: hit.largeImageURL,
        }));

        setImages(prevImages => [...prevImages, ...imagesArray]);
        setImagesOnPage(prevImagesOnPage => prevImagesOnPage + imagesArray.length);
        setError(null);
      } catch (error) {
        
        console.error('Error fetching images:', error);
        setError('Error fetching images. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    if (page !== 1) {
      fetchMoreImages();
    }
  }, [query, page]);

  const handleSearch = newQuery => {
    setQuery(newQuery);
  };

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleOpenModal = e => {
    const currentImageUrl = e.target.dataset.large;
    const currentImageDescription = e.target.alt;

    if (e.target.nodeName === 'IMG') {
      setShowModal(prevShowModal => !prevShowModal);
      setCurrentImageUrl(currentImageUrl);
      setCurrentImageDescription(currentImageDescription);
    }
  };

  const handleToggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };


  return (
          <>
            <Searchbar onSubmit={handleSearch} />
    
            {images && <ImageGallery images={images} openModal={handleOpenModal} />}
    
            {isLoading && <Loader />}
    
            {imagesOnPage >= 12 && imagesOnPage < totalImages && (
              <Button onNextFetch={handleNextPage} />
            )}
    
            {showModal && (
              <Modal
                onClose={handleToggleModal}
                currentImageUrl={currentImageUrl}
                currentImageDescription={currentImageDescription}
              />
            )}
            {error && (
        <div className="error-message">{error}</div>
      )}
    
            <ToastContainer autoClose={2000}/>
          </>
        );
}


// export class App extends Component {
//   state = {
//     query: '',
//     page: 1,
//     imagesOnPage: 0,
//     totalImages: 0,
//     isLoading: false,
//     showModal: false,
//     images: null,
//     error: null,
//     currentImageUrl: null,
//     currentImageDescription: null,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const { query, page } = this.state;

//     if (prevState.query !== query) {
//       this.setState(({ isLoading }) => ({ isLoading: !isLoading }));

//       getImg(query)
//         .then(({ hits, totalHits }) => {
//           const imagesArray = hits.map(hit => ({
//             id: hit.id,
//             description: hit.tags,
//             smallImage: hit.webformatURL,
//             largeImage: hit.largeImageURL,
//           }));

//           return this.setState({
//             page: 1,
//             images: imagesArray,
//             imagesOnPage: imagesArray.length,
//             totalImages: totalHits,
//           });
//         })
//         .catch(error => this.setState({ error }))
//         .finally(() =>
//           this.setState(({ isLoading }) => ({ isLoading: !isLoading }))
//         );
//     }

//     if (prevState.page !== page && page !== 1) {
//       this.setState(({ isLoading }) => ({ isLoading: !isLoading }));

//       getImg(query, page)
//         .then(({ hits }) => {
//           const imagesArray = hits.map(hit => ({
//             id: hit.id,
//             description: hit.tags,
//             smallImage: hit.webformatURL,
//             largeImage: hit.largeImageURL,
//           }));

//           return this.setState(({ images, imagesOnPage }) => {
//             return {
//               images: [...images, ...imagesArray],
//               imagesOnPage: imagesOnPage + imagesArray.length,
//             };
//           });
//         })
//         .catch(error => this.setState({ error }))
//         .finally(() =>
//           this.setState(({ isLoading }) => ({ isLoading: !isLoading }))
//         );
//     }
//   }

//   getSearchRequest = query => {
//     this.setState({ query });
//   };

//   onNextFetch = () => {
//     this.setState(({ page }) => ({ page: page + 1 }));
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({ showModal: !showModal }));
//   };

//   openModal = e => {
//     const currentImageUrl = e.target.dataset.large;
//     const currentImageDescription = e.target.alt;

//     if (e.target.nodeName === 'IMG') {
//       this.setState(({ showModal }) => ({
//         showModal: !showModal,
//         currentImageUrl: currentImageUrl,
//         currentImageDescription: currentImageDescription,
//       }));
//     }
//   };

//   render() {
//     const {
//       images,
//       imagesOnPage,
//       totalImages,
//       isLoading,
//       showModal,
//       currentImageUrl,
//       currentImageDescription,
//     } = this.state;

//     const getSearchRequest = this.getSearchRequest;
//     const onNextFetch = this.onNextFetch;
//     const openModal = this.openModal;
//     const toggleModal = this.toggleModal;

//     return (
//       <>
//         <Searchbar onSubmit={getSearchRequest} />

//         {images && <ImageGallery images={images} openModal={openModal} />}

//         {isLoading && <Loader />}

//         {imagesOnPage >= 12 && imagesOnPage < totalImages && (
//           <Button onNextFetch={onNextFetch} />
//         )}

//         {showModal && (
//           <Modal
//             onClose={toggleModal}
//             currentImageUrl={currentImageUrl}
//             currentImageDescription={currentImageDescription}
//           />
//         )}

//         <ToastContainer autoClose={2000}/>
//       </>
//     );
//   }
// }