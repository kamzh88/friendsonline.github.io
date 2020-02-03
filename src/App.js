import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import AddFriend from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component {

  state = {
    friends
  };

  removeFriend = id => {
    // console.log(id);  
    
    const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({ friends });
  };

  addFriend = id => {
    console.log(id);
    // const friends = friends.filter(friend => !friend.state.map())
    
    
    // this.setState({ friends })
  }

  render() {
    const addFriends = friends.filter(friend => friend.state === false);
    const myFriends = this.state.friends.filter(friend => friend.state === true)
    return (
      <Wrapper>
        <div className="myfriends">
          <h1 className="title">Friends List</h1>
          {myFriends.map(friend => (
            <FriendCard
              removeFriend={this.removeFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />))}
        </div>
        <div className="addfriends">
          <h1 className="title">People</h1>
          {addFriends.map(friend => (
            <AddFriend
              removeFriend={this.addFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
