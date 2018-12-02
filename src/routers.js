/**
 * Created with wangyonghua.
 * Date: 2018-11-30
 * Time: 22:49
 */
/**
 * <Menu.Item key="1">
 <Icon type="user" />
 <span className="nav-text">nav 1</span>
 </Menu.Item>
 <Route exact path="/" component={Home}/>
 <Route path="/demo1" component={Demo1}/>
 <Route path="/demo2" component={Demo2}/>
 */

export const routers = [
  {key:1,icon:'user',url:'/',name:'Home'},
  {key:2,icon:'user',url:'/demo1',name:'Demo1'},
  {key:3,icon:'user',url:'/demo2',name:'Demo2'},
];
