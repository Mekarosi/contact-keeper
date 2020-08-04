import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faEnvelopeOpen, faPhone);

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <FontAwesomeIcon icon={['fas', 'envelope-open']} /> {email}
          </li>
        )}
        {phone && (
          <li>
            <FontAwesomeIcon icon={['fas', 'phone']} /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className='btn btn-dark btn-sm'>Edit</button>
        <button className='btn btn-danger btn-sm'>Delete</button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
