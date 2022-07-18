import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscBtnClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscBtnClick);
  }

  handleEscBtnClick = e => {
    this.props.closeModal(e);
  };

  render() {
    const { url, alt, closeModal } = this.props;
    return (
      <div className={css.Overlay} onClick={e => closeModal(e)}>
        
        <div>
          <img src={url} alt={alt} className={css.Modal} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};