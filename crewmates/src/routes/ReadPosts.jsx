import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const ReadPosts = ({ supabase }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Define the fetchData() function
    const fetchData = async () => {
      // Fetch all records from the "Posts" table
      const { data } = await supabase
        .from('Crew')
        .select()
        .order('created_at', { ascending: true });
      // Set the state of "posts" with the retrieved data
      setPosts(data);
    };
    // Call the fetchData() function when the component mounts
    fetchData();
  }, []);

  return (
    <div className="ReadPosts">
      {posts && posts.length > 0 ? (
        posts.map((post, index) => (
          <Card key={post.id} id={post.id} name={post.name} role={post.role} lane={post.lane}/>
        ))
      ) : (
        <h2>{"No Troops Assembled"}</h2>
      )}
    </div>
  );
};

export default ReadPosts;