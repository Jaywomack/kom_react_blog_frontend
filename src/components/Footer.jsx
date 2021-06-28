import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <footer className='bg-gray-800 '>
      <SocialIcons />
      <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center  '>
        <p className='text-2xl text-white mb-3'>
          &copy; Knowledgeofman.com <small>2021</small>
        </p>
        <p className='text-white'>A &copy;NerdBrainz Site</p>
      </div>
    </footer>
  );
};

export default Footer;
