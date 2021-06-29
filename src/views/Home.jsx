import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      {/* Header Section */}
      <div className='flex bg-white mt-20 mb-52' style={{ height: '600px' }}>
        <div className='flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2 '>
          <div>
            <h2 className='text-3xl font-semibold text-gray-800 md:text-4xl'>
              Build Your Self Into The{' '}
              <span className='text-red-600'>Man </span>
              You Wish You Could Be
            </h2>
            <p className='mt-2 text-sm text-gray-500 md:text-base'>
              Skip the red pill nonsense. The incel bullshit. The pickup artist
              trickery. All real no nonsense lessons to help you level up and
              find success in every facet of your life.
            </p>
            <div className='flex justify-center lg:justify-start mt-6'>
              {/* <Link
                className='px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800'
                to='/blogs'
              >
                Coaching and Mentorship
              </Link> */}
              <Link
                className='mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400'
                to='/blogs'
              >
                Read the Blog
              </Link>
            </div>
          </div>
        </div>
        <div
          className='hidden lg:block lg:w-1/2 '
          style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)' }}
        >
          <div
            className='h-full object-cover center bg-no-repeat bg-cover'
            style={{
              backgroundImage:
                ' url(https://images.unsplash.com/photo-1460194436988-671f763436b7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FycmlvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)'
            }}
          >
            <div className='h-full bg-black opacity-25'></div>
          </div>
        </div>
      </div>
      {/*End  Header Section */}
      {/* Cards Section */}
      <section className=' text-gray-200 bg-gray-900 mt-5 pb-40 sm:mb-0 md:mb-40'>
        <div className='max-w-6xl mx-auto px-5 py-24 '>
          <div className='flex flex-wrap w-full mb-20 flex-col items-center text-center justify-center '>
            <h1 className=' title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl'>
              {' '}
              Choose Your Path{' '}
            </h1>
            <p className='lg:w-1/2 w-full leading-relaxed text-base'>
              Independent paths that converge to build a complete man.{' '}
            </p>
          </div>
          {/* Cards container */}
          <div className='flex flex-wrap -m-4'>
            {/* Health Card */}

            <Link to='/blogs/health' className='xl:w-1/3 md:w-1/2 p-4'>
              <div className='border border-gray-300 p-6 rounded-lg  text-center'>
                <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-900 text-red-500 mb-4'>
                  <i class='fas fa-heartbeat fa-4x'></i>
                </div>
                <h2 className='text-lg  font-medium title-font mb-2'>
                  The Path to Health{' '}
                </h2>
                <p className='leading-relaxed text-base'>
                  The way to a healthier body.
                </p>
              </div>
            </Link>
            {/* Wealth Card */}
            <Link to='/blogs/wealth' className='xl:w-1/3 md:w-1/2 p-4'>
              <div className='border border-gray-300 p-6 rounded-lg text-center'>
                <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-900 text-red-500 mb-4'>
                  <i class='far fa-money-bill-alt fa-4x'></i>{' '}
                </div>
                <h2 className='text-lg  font-medium title-font mb-2'>
                  The Path to Wealth{' '}
                </h2>
                <p className='leading-relaxed text-base'>
                  The way to financial success.
                </p>
              </div>
            </Link>
            {/* Wisdom Card */}
            <Link to='/blogs/wisdom' className='xl:w-1/3 md:w-1/2 p-4 '>
              <div className='border border-gray-300 p-6 rounded-lg text-center '>
                <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-900 text-red-500 mb-4'>
                  <i class='fas fa-book-dead fa-4x'></i>{' '}
                </div>
                <h2 className='text-lg  font-medium title-font mb-2'>
                  The Path of Wisdom{' '}
                </h2>
                <p className='leading-relaxed text-base'>
                  The life long pursuit of wisdom.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* End Cards Section */}
    </div>
  );
};

export default Home;
