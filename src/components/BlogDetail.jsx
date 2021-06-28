import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const BlogPreview = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://knowledge-of-man-ozpds.ondigitalocean.app/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div className='post '>
      <h2 className='mt-12 mb-1 border-b-2 border-gray-700 pb-6 px-5'>
        <a href='blog-detail' className=' text-4xl px-5'>
          {post.title}
        </a>
      </h2>
      <p className='by-line font-semibold mb-1 px-5 '>{post.author}</p>
      <p className='font-bold text-sm mb-16 px-5 '>{post.updated_at}</p>

      <div className='content-area relative'>
        <img
          src={post.imageURL}
          alt=''
          className=' inset-0 w-full h-96 object-cover shadow-lg rounded-lg mb-16'
        />
        <ReactMarkdown className='text-left text-gray-800 mb-12 px-5 '>
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPreview;
