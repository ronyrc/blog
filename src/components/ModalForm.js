import React, { Component } from 'react'
import {
  Button,
  Modal,
  ModalFooter,
  ModalBody,
  ModalHeader
} from "reactstrap";

export default class ModalForm extends Component {

  cancel() {
    this.props.history.goBack();
  }
  render() {
    return <div>
        <Modal isOpen={true}>
          <ModalHeader toggle={() => this.cancel()}>
            {this.props.post ? "Edit Post" : "Novo Post"}
          </ModalHeader>
          <ModalBody>
            {this.props.post && this.props.post.body}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.cancel()}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>;
  }
}
