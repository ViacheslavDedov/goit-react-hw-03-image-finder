import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ loadMode }) => {
  return (
    <button type="button" className={css.Button} onClick={loadMode}>
      Load more
    </button>
  );
};

Button.propTypes = { loadMode: PropTypes.func.isRequired };