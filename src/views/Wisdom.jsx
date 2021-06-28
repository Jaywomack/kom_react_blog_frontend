import BlogPreview from '../components/BlogPreview';

import { useEffect, useState } from 'react';
const Wisdom = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:1337/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  const wisdomPosts = posts.filter((post) => {
    return post.tag === 'wisdom';
  });
  return (
    <div className='home'>
      <div className='top-rated grid grid-cols-1 gap-8 justify-items-center'>
        {wisdomPosts.map((post) => (
          <BlogPreview post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Wisdom;
