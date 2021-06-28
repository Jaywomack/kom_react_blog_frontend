import BlogPreview from '../components/BlogPreview';

import { useEffect, useState } from 'react';
const Health = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:1337/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  const healthPosts = posts.filter((post) => {
    return post.tag === 'health';
  });

  return (
    <div className='home'>
      <div className='top-rated grid grid-cols-1 gap-8 justify-items-center'>
        {healthPosts.map((post) => {
          return <BlogPreview post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
};

export default Health;
