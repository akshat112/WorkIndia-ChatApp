import React from "react";
import {
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import "./chat.css";
import { Search } from "react-feather";
import LazyLoad from "react-lazyload";

import User1 from "./user1.webp";
import User2 from "./user2.webp";
import User3 from "./user3.webp";
import User4 from "./user4.png";
import User5 from "./user5.jpg";
import Messages from "./messages";

class Chat extends React.Component {
  state = {
    search: "",
    user: {},
    active: 1,
  };
  userList = [
    {
      id: 1,
      name: "Akshat",
      image: User1,
      unread: 3,
      chats: [
        {
          user: "me",
          message: "Hello",
        },
        {
          user: "other",
          message: "Hi",
        },
        {
          user: "me",
          message: "How are you",
        },
        {
          user: "other",
          message: "Good",
        },
        {
          user: "me",
          message: "Great",
        },
        {
          user: "other",
          message: "Thanks",
        },
        {
          user: "me",
          message: "welcome",
        },
        {
          user: "other",
          message: "For?",
        },
        {
          user: "other",
          message: "Good to know that. Hope to see you soon",
        },
      ],
    },
    {
      id: 2,
      name: "Sarthak",
      image: User2,
      chats: [
        {
          user: "me",
          message: "welcome",
        },
        {
          user: "other",
          message: "For?",
        },
        {
          user: "other",
          message: "That's so nice of you",
        },
      ],
    },
    {
      id: 3,
      name: "Aishwarya",
      image: User3,
      chats: [
        {
          user: "me",
          message: "Hello",
        },
        {
          user: "other",
          message: "Hi",
        },
        {
          user: "me",
          message: "How are you",
        },
        {
          user: "other",
          message: "Good",
        },
        {
          user: "me",
          message: "Great",
        },
        {
          user: "other",
          message: "Thanks",
        },
        {
          user: "me",
          message: "welcome",
        },
        {
          user: "other",
          message: "For?",
        },
        {
          user: "other",
          message: "Have a great day Ahead. Will meet tomorrow",
        },
      ],
    },
    {
      id: 4,
      name: "Shera",
      image: User4,
      unread: 1,
      chats: [
        {
          user: "me",
          message: "Hello",
        },
        {
          user: "other",
          message: "Hi",
        },
        {
          user: "me",
          message: "How are you",
        },
        {
          user: "other",
          message: "Good",
        },
        {
          user: "me",
          message: "Great",
        },
        {
          user: "other",
          message: "So finally what did you tell him?",
        },
      ],
    },
    {
      id: 5,
      name: "Chinmay",
      image: User5,
      unread: 5,
      chats: [
        {
          user: "me",
          message: "Hello",
        },
        {
          user: "other",
          message: "Hi",
        },
        {
          user: "me",
          message: "How are you",
        },
        {
          user: "other",
          message: "Good",
        },
        {
          user: "me",
          message: "welcome",
        },
        {
          user: "other",
          message: "For?",
        },
        {
          user: "other",
          message: "Tell me everything in detail",
        },
      ],
    },
    {
      id: 6,
      name: "Vandana",
      image: User1,
      chats: [
        {
          user: "me",
          message: "Hello",
        },
        {
          user: "other",
          message: "Hi",
        },
        {
          user: "other",
          message: "The fan isn't working. It's so hot here",
        },
      ],
    },
    {
      id: 7,
      name: "Bhavesh",
      image: User2,
      chats: [
        {
          user: "me",
          message: "Hello",
        },
        {
          user: "other",
          message: "Hi",
        },
        {
          user: "other",
          message: "Good",
        },
        {
          user: "me",
          message: "Great",
        },
        {
          user: "other",
          message: "Thanks",
        },
        {
          user: "me",
          message: "welcome",
        },
        {
          user: "other",
          message: "I hope this covid ends soon.",
        },
      ],
    },
    {
      id: 8,
      name: "Subhash",
      image: User3,
      chats: [
        {
          user: "me",
          message: "Hello",
        },
        {
          user: "other",
          message: "Hi",
        },
        {
          user: "me",
          message: "How are you",
        },
        {
          user: "other",
          message: "Good",
        },
        {
          user: "me",
          message: "Great",
        },
        {
          user: "other",
          message: "Thanks",
        },
        {
          user: "other",
          message: "I'm missing VIT sooooo much",
        },
      ],
    },
    {
      id: 9,
      name: "Kokil",
      image: User4,
      unread: 1,
      chats: [
        {
          user: "me",
          message: "Hello",
        },
        {
          user: "other",
          message: "Hi",
        },
        {
          user: "me",
          message: "How are you",
        },
        {
          user: "other",
          message: "Good",
        },
        {
          user: "me",
          message: "Great",
        },
        {
          user: "other",
          message: "Thanks",
        },
        {
          user: "me",
          message: "welcome",
        },
        {
          user: "other",
          message: "For?",
        },
        {
          user: "other",
          message: "I think August",
        },
      ],
    },
    {
      id: 10,
      name: "Dev",
      image: User5,
      chats: [
        {
          user: "me",
          message: "Hello",
        },
        {
          user: "other",
          message: "Hi",
        },
        {
          user: "other",
          message: "Thanks",
        },
        {
          user: "me",
          message: "welcome",
        },
        {
          user: "other",
          message: "For?",
        },
        {
          user: "other",
          message: "Okay take care!",
        },
      ],
    },

    {
      id: 11,
      name: "Vaibhav",
      image: User3,
      unread: 2,
      chats: [
        {
          user: "me",
          message: "Great",
        },
        {
          user: "other",
          message: "Thanks",
        },
        {
          user: "me",
          message: "welcome",
        },
        {
          user: "other",
          message: "For?",
        },
        {
          user: "other",
          message: "All the best beta",
        },
      ],
    },
    {
      id: 12,
      name: "Avani",
      image: User4,
      chats: [
        {
          user: "me",
          message: "Hello",
        },
        {
          user: "other",
          message: "Hi",
        },
        {
          user: "me",
          message: "Great",
        },
        {
          user: "other",
          message: "Thanks",
        },
        {
          user: "me",
          message: "welcome",
        },
        {
          user: "other",
          message: "For?",
        },
        {
          user: "other",
          message: "It's an amazing book",
        },
      ],
    },
    {
      id: 13,
      name: "Veer",
      image: User5,
      chats: [
        {
          user: "me",
          message: "Hello",
        },
        {
          user: "other",
          message: "Hi",
        },
        {
          user: "me",
          message: "How are you",
        },
        {
          user: "other",
          message: "Good",
        },
        {
          user: "me",
          message: "Great",
        },
        {
          user: "other",
          message: "Are you up for a match?",
        },
      ],
    },
  ];

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  openChat(key, e) {
    console.log(e);
    this.setState({ user: this.userList[key - 1], active: key });
    delete this.userList[key - 1].unread;
  }

  getUserData(start, end) {
    return this.userList.slice(start, end);
  }

  render() {
    let filtered = this.userList.filter((contact) => {
      return (
        contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });
    return (
      <div>
        <Row>
          <Col md="4" id="contacts">
            <div id="search">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <Search />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Enter a contact to search"
                  type="text"
                  value={this.state.search}
                  onChange={this.updateSearch.bind(this)}
                />
              </InputGroup>
            </div>
            <div className="contactsList">
              {filtered.map((user) => {
                return (
                  <LazyLoad height={0} offset={0}>
                    <Row
                      className="contact"
                      key={user.id}
                      onClick={(e) => this.openChat(user.id, e)}
                    >
                      <Col lg="2" className="image">
                        <img src={user.image} />
                      </Col>
                      <Col lg="7">
                        <span className="name">{user.name}</span> <br />
                        <span className="lastMsg">
                          {user.chats[user.chats.length - 1].message.substr(
                            0,
                            25
                          ) + "..."}
                        </span>
                      </Col>
                      <Col lg="3" className="text-center">
                        <span class="time">12:01 AM</span> <br />
                        {user.unread ? (
                          <span class="unread">{user.unread}</span>
                        ) : null}
                      </Col>
                    </Row>
                  </LazyLoad>
                );
              })}
            </div>
          </Col>
          <Col md="8" id="messages">
            <Messages
              details={
                Object.keys(this.state.user).length === 0 &&
                this.state.user.constructor === Object
                  ? this.userList[0]
                  : this.state.user
              }
            ></Messages>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Chat;
