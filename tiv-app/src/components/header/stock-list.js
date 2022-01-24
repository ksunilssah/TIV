import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { getHeaderStockList } from '../../service/header-service';
import { callFrequency } from '../../service/constants';

@inject('store')
@observer
export default class HeaderStockList extends Component {
  componentDidMount() {
    getHeaderStockList();
    this.interval = setInterval(function () {
      getHeaderStockList();
    }, callFrequency);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getStockList = () => {
    const { headerStockList } = this.props.store;
    const list = [];
    for (const key in headerStockList) {
      const index = headerStockList[key];
      const { ltp, pChange } = index;
      const red = 'text-danger ml-2 mb-0 font-weight-medium';
      const green = 'text-success ml-2 mb-0 font-weight-medium';
      const redIcon = 'icon icon-box-danger';
      const greenIcon = 'icon icon-box-success';
      const upArrow = 'mdi mdi-arrow-top-right icon-item';
      const downArrow = 'mdi mdi-arrow-bottom-right icon-item';

      const isNegative = Math.sign(pChange) <= -1;
      const item = (
        <li className="nav-item d-lg-block">
          <div className="row">
            <div className="d-flex align-items-center align-self-start">
              <h5 className="mb-0">
                {key} &nbsp; {ltp}
              </h5>
              <p className={isNegative ? red : green}>{pChange}%</p>
            </div>
            <div className={isNegative ? redIcon : greenIcon}>
              <span className={isNegative ? downArrow : upArrow}></span>
            </div>
          </div>
        </li>
      );
      list.push(item);
    }
    return list;
  };
  render() {
    return (
      <ul className="navbar-nav navbar-nav-right header-stock-list">
        {this.getStockList()}
      </ul>
    );
  }
}
