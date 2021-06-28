import { Link } from 'react-router-dom';

const SocialIcons = () => {
  return (
    <ul className='social-icons flex items-baseline justify-center py-2 bg-black text-white'>
      <li>
        <Link
          to={{ pathname: 'https://facebook.com' }}
          rel='noopener'
          target='_blank'
        >
          <i className='fab fa-facebook-square fa-2x mr-3 '></i>
        </Link>
      </li>
      <li>
        <Link
          to={{ pathname: 'https://twitter.com' }}
          rel='noopener'
          target='_blank'
        >
          <i className='fab fa-twitter-square fa-2x mr-3'></i>
        </Link>
      </li>
      <li>
        <Link
          to={{ pathname: 'https://linkedin.com' }}
          rel='noopener'
          target='_blank'
        >
          <i className='fab fa-linkedin fa-2x mr-3'></i>
        </Link>
      </li>
      <li>
        <Link
          to={{ pathname: 'https://youtube.com' }}
          rel='noopener'
          target='_blank'
        >
          <i className='fab fa-youtube-square fa-2x  mr-3'></i>
        </Link>
      </li>
    </ul>
  );
};

export default SocialIcons;
