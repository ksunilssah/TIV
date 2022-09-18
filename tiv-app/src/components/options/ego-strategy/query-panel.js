import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { getEgoResult } from '../../../service/ego-service';

@inject('store')
@observer
export default class QueryPanel extends Component {
  onIndexChange = (event) => {
    const symbol = event.target.value;
    const { updateEgoQuery } = this.props.store;
    updateEgoQuery({ symbol });
  };

  onSubmit = () => {
    getEgoResult();
  };

  render() {
    const { symbol } = this.props.store.egoQuery;
    return (
      <>
        <div className="row ego-query query-panel">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-2 col-sm-2 form-group">
                    <select
                      onChange={this.onIndexChange}
                      value={symbol}
                      id="index"
                      className="form-control"
                    >
                      <option value="NIFTY">Nifty</option>
                      <option value="BANKNIFTY">Bank Nifty</option>
                    </select>
                  </div>

                  <div className="col-xl-2 col-sm-2">
                    <button
                      type="button"
                      className="btn btn-primary btn-fw submit-btn"
                      onClick={this.onSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
