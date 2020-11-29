import React, { useState, useEffect } from "react";
import axios from "axios";

function Facebook() {
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:3001/");
      const posts = res.data;
      setPosts(posts);
      console.log(res);
    };
    fetchPosts();
  }, []);

  const [posts, setPosts] = useState([]);

  return(

<div>
{posts.map(post => (
    <p>{post.description}</p>
)) }
Home

</div>

  );
  
}

export default Facebook;
