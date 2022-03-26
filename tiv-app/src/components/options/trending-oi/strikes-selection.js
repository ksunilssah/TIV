import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Modal } from 'react-bootstrap';
import { getTrendingOIResult } from '../../../service/trending-oi-service';

@inject('store')
@observer
export default class StrikesSelection extends Component {
  state = {
    strikes: this.props.store.strikesList,
  };

  onClose = () => {
    const { onDialogClose } = this.props;
    onDialogClose();
  };

  onUpdate = () => {
    const { updateSelectedStrikes } = this.props.store;
    const { strikes } = this.state;
    const selectedStrikeList = [];
    strikes.forEach((item) => {
      if (item.selected === true) {
        selectedStrikeList.push(item.strike);
      }
    });

    updateSelectedStrikes(selectedStrikeList);
    this.onClose();
    getTrendingOIResult();
  };

  onCheckBoxChange = (event) => {
    const { strikes } = this.state;
    const updatedStrikeList = strikes.map((item) => {
      if (item.strike == event.target.value) {
        item.selected = event.target.checked;
        return item;
      }
      return item;
    });

    this.setState({
      strikes: updatedStrikeList,
    });
  };

  renderCheckBox = () => {
    const { strikes } = this.state;
    return strikes.map(({ strike, selected }) => {
      return (
        <li key={strike}>
          <div className="form-check">
            <label htmlFor={strike} className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                name={strike}
                value={strike}
                id={strike}
                checked={selected}
                onChange={this.onCheckBoxChange}
              />
              {strike}
              <i className="input-helper"></i>
            </label>
          </div>
        </li>
      );
    });
  };

  render() {
    const { showDialog } = this.props;

    return (
      <Modal
        show={showDialog}
        onHide={this.onClose}
        size="lg"
        centered
        className="strike-overlay"
      >
        <Modal.Header closeButton>
          <Modal.Title>Strikes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="strikes-list"
            style={{ height: '300px', width: '100%' }}
          >
            <div className="form-group">
              <ul className="strike-list">{this.renderCheckBox()}</ul>
              <div className="strike-btn">
                <button
                  type="button"
                  className="btn btn-primary btn-fw submit-btn"
                  onClick={this.onUpdate}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}
