/**
 * Created with wangyonghua.
 * Date: 2018-11-24
 * Time: 22:40
 * Desc: 通过懒加载获取商品曝光率
 */
import React, {Component} from 'react';
import { notification } from 'antd';
import { productList } from './data';
import Products from './products';

import './style.css';

export default class App extends Component {
  constructor(props){
    super(props);
    window.localStorage.removeItem('my-redux-demo');
  }

  componentWillUnmount() {
    //离开页面的时候上传数据 并清除数据
    notification.success({
      placement: 'topRight',
      message: '曝光过的商品id',
      description: window.localStorage.getItem('my-redux-demo')
    })
    setTimeout(()=>{
      window.localStorage.removeItem('my-redux-demo');
    },3000)
  }

  render() {
    return (
      <div className="grid-container">
        <div className="grid-header">
          <h5>商品列表</h5>
        </div>
        <div className="grid-item">
          <Products data={productList}/>
        </div>
      </div>
    );
  }
}
