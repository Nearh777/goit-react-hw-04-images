import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Overlay, ModalWindow, ImgModal  } from './Modal.styled';
import { Backdrop, ModalWin, Wrapper, Title, Button, ImgModal  } from './Modal.styled';
// import { createRoot } from 'react-dom/client';
import { createPortal } from 'react-dom';
// import { createPortal } from 'react-dom/client';
import { BsXLg } from 'react-icons/bs';

// export class Modal extends Component {

//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyModalClose);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyModalClose);
//   }

//   handleKeyModalClose = event => {
//     if (event.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = event => {
//     if (event.target === event.currentTarget) {
//       this.props.onClose();
//     }
//   };
//   render() {
//     return (
//       <Overlay onClick={this.handleBackdropClick}>
//         <ModalWindow>
//           <ImgModal
            
//             src={this.props.currentImage}
//             alt="lalala"
//           />
//         </ModalWindow>
//       </Overlay>
//     );
//   }
// }

// Modal.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   currentImage: PropTypes.string.isRequired,
// };
const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

  static propTypes = {
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    currentImageUrl: PropTypes.string,
    currentImageDescription: PropTypes.string,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { title, onClose, currentImageUrl, currentImageDescription } =
      this.props;

    return createPortal(
      <Backdrop onClick={this.handleClickBackdrop}>
        <ModalWin>
          <Wrapper>
            {title && <Title>{title}</Title>}
            <Button type="button" onClick={onClose}>
              <BsXLg size={10}  />
            </Button>
          </Wrapper>
          <ImgModal
            src={currentImageUrl}
            alt={currentImageDescription}
            loading="lazy"
          />
        </ModalWin>
      </Backdrop>,
      modalRoot
    );
  }
}