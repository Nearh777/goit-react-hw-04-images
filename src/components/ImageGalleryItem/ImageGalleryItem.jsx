
import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled.jsx'




export const ImageGalleryItem = ({ description, smallImage, largeImage, openModal }) => {
  return (
    <GalleryItem onClick={openModal}>
      <GalleryItemImg src={smallImage} alt={description} data-large={largeImage} />
    </GalleryItem>
  );
}

ImageGalleryItem.prototype = {
  description: PropTypes.string,
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
