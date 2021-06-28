import { Link } from 'react-router-dom';

const BlogPreview = ({ post }) => {
  return (
    <div className='bg-white p-2 w-80 max-w-3xl sm:w-full sm:p-4 h-auto sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none'>
      <div
        style={{
          backgroundImage: `url(${post.imageURL})`
        }}
        className='h-52 sm:h-full sm:w-72 rounded-xl bg-gray-100 bg-center bg-cover'
      ></div>
      <div className='flex sm:flex-1 flex-col gap-2 p-1'>
        <Link to={`/blogs/${post.id}`}>
          <h1 className='text-lg sm:text-xl font-semibold  text-gray-600'>
            {post.title}
          </h1>
        </Link>
        <p className='text-gray-500 text-sm sm:text-base line-clamp-3'>
          {post.description}
        </p>
        <div className='flex gap-4 mt-auto'></div>
      </div>
    </div>
  );
};

export default BlogPreview;
