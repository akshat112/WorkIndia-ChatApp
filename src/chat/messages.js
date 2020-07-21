import React from "react";
import { Phone, Send, Search } from "react-feather";
import { Row, Col, Input, Button } from "reactstrap";
import "./message.css";

class Messages extends React.Component {
  state = {
    details: this.props.details,
  };
  addMessage() {
    let msg = document.getElementById("typeMessage").value;
    let details = this.state.details;
    details.chats.push({ user: "me", message: msg });
    this.setState({ details });
    document.getElementById("typeMessage").value = "";
    var objDiv = document.getElementById("conversation");
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  componentDidUpdate() {
    if (this.state.details.name != this.props.details.name) {
      this.setState({ details: this.props.details });
    }
  }

  render() {
    return (
      <div className="chatWindow">
        <div id="header">
          <Row>
            <Col lg="1">
              <img src={this.state.details.image} alt="" />
            </Col>
            <Col lg="9">
              <b>{this.state.details.name}</b> <br />
              <i>Online</i>
            </Col>
            <Col lg="2" className="pt-2">
              <Search /> &nbsp; &nbsp; &nbsp;
              <Phone />
            </Col>
          </Row>
        </div>
        <div id="conversation">
          {this.state.details.chats.length != undefined
            ? this.state.details.chats.map((chat) => {
                if (chat.user === "me")
                  return <div className="box3 sb13">{chat.message}</div>;
                else return <div className="box3 sb14">{chat.message}</div>;
              })
            : null}
        </div>
        <div className="newMessage">
          <Row>
            <Col lg="10">
              <Input
                type="text"
                placeholder="Enter a message to send"
                id="typeMessage"
              ></Input>
            </Col>
            <Col lg="2" id="sendMessage" onClick={this.addMessage.bind(this)}>
              <Button block>
                <Send />
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Messages;
