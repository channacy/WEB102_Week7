import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './routes/ReadPosts'
import CreatePost from './routes/CreatePost'
import EditPost from './routes/EditPost'
import { Link } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dgiqkcnviqgtfiyjccqw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnaXFrY252aXFndGZpeWpjY3F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNzQ4MTUsImV4cCI6MTk5Njc1MDgxNX0.4r8O1nL84lB4GRs6sQBO0GKAa8lmkDfzi6UvWpLSw_g';

function App() {
  const supabase = createClient(supabaseUrl, supabaseKey)

  let element = useRoutes([
    {
      path: "/",
      element:<ReadPosts supabase={supabase}/>
    },
    {
      path:"/edit/:id",
      element: <EditPost supabase={supabase}/>
    },
    {
      path:"/create",
      element: <CreatePost supabase={supabase}/>
    }
  ]);
  
  return (
    <div className="App">

    <div className="header">
      <h1>Create your Dota 2 Team</h1>
      <Link to="/"><button className="headerBtn"> Explore Team </button></Link>
      <Link to="/create"><button className="headerBtn"> Create Team </button></Link>
    </div>
      {element}
    </div>
  );
}

export default App;