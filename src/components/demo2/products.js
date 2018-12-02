/**
 * Created with wangyonghua.
 * Date: 2018-11-27
 * Time: 21:42
 */
import React, {Component} from 'react';
import LazyLoad from 'react-lazy-load';

class Index extends Component{
  constructor(props){
    super(props);
    this.changeLocalStorage = this.changeLocalStorage.bind(this);
  }

  changeLocalStorage(product){
    const item = window.localStorage.getItem('my-redux-demo');
    window.localStorage.setItem('my-redux-demo', item ? item + ',' + product.id : product.id);
  }

  render() {
    return (
      <div className="grid-item-p" style={{width: "300px", height: "300px"}}>
        {
          this.props.data.map((d, index) => {
            return (
              <div key={index}>
                <span>{d.id}</span>
                <span>{d.name}</span>
                <LazyLoad height={200}
                          onContentVisible={() => this.changeLocalStorage(d)}>
                  <img src={d.imgUrl} alt="111" width={200} height={200}/>
                </LazyLoad>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Index;
