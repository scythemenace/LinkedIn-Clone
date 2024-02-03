import React, { useEffect, useState} from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import InputOption from './inputOption';
import SubscriptionIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function Feed() {
  const [input, setInput] = useState('') //I want to get input by mapping <Input /> to the input state

  /*We'll create states in react to store the posts*/
  /*State is a variable in react*/
  /*useState is a hook in react*/
  const [posts, setPosts] = useState([]) //This is how you create a state in react

  /*We'll use the map function to iterate through the posts*/
  /*We'll use google firebase to store the posts*/

  /*We'll use useEffect to fetch the posts from the database*/
  /*The useEffect hook is a special hook that allows us to fire a hook whenever a feed components look - whenever is re-renders if we don't 
  pass a second argument.
  If we pass a blank dependency like:-
  useEffect(() => {
    //This will run once when the feed component loads and not again
  }, [] <- This is the blank dependency) */

/*The code below gives us a snapshot of whenever a post gets added to our database in real time
Everytime the post changes we are going to update post changes
snapshot.docs means in a collection we have many docs so we'll map through a doc*/
  useEffect(() => {
    db.collection('posts')
    .orderBy("timestamp", "desc") //Basically all new posts should be at the top and older ones should go at the bottom
    .onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => ( //For every single doc we'll return an object
        {
          id: doc.id, //This will give us the id of the doc in the database
          data: doc.data(), //This will give us the data of the doc
        }
      )))
    ))
  }, [])

    /*What the above useEffect hook has done is that it has created a listener to the database and whenever a post is added to the database
  it will directly map to the post in frontend*/

  const sendPost = (e) => {
    e.preventDefault() //This will prevent the page from refreshing
    db.collection('posts').add({
      name: 'Ankur Pandey',
      description: 'This is a test',
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp() //This will give us the timestamp of the server based on the location's time
    })
    setInput('') //This will clear the input after we have sent the post
  }

  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
            <CreateIcon />
            <form>
                <input value={input} onChange={e => setInput(e.target.value)}/*Get the value of the text*/ type="text" />
                <button onClick={sendPost} type="submit">Send</button>
            </form>
        </div>
        <div className="feed__inputOptions">
          {/*Every like, comment, share, etc. will be displayed here using a component*/}
          <InputOption Icon = {ImageIcon} title = 'Photo' color = '#70B5F9' />
          <InputOption Icon = {SubscriptionIcon} title = 'Video' color = '#E7A33E' />
          <InputOption Icon = {EventNoteIcon} title = 'Event' color = '#C0CBCD' />
          <InputOption Icon = {CalendarViewDayIcon} title = 'Write article' color = '#7FC15E' />
        </div>
      </div>
      {/*Posts will be displayed here*/}
      {posts.map(({id, data: {name, description, message, photoUrl}}) => (
        <Post 
        key={id} //Key is very important in react when you are mapping through an array because we only want react to render out the new component, so if we don't give it a key it will re-render the whole component. For eg. If there were a 100 elements it will only render the last one added
        name={name}
        description={description}
        message={message}
        photoUrl={photoUrl}
        />
      ))}

    </div>
  )
}

export default Feed
