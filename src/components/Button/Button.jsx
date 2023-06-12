import PropTypes from 'prop-types';
import { ButtonLoader } from './Button.styled';



export const Button = ({ onNextFetch}) => {
  return (
    <ButtonLoader onClick={onNextFetch} type="button">
      Load more
    </ButtonLoader>
  );
};

Button.propTypes = {
  onNextFetch: PropTypes.func.isRequired,
};