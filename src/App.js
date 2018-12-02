import React, { Component } from "react";
import { Layout, Menu, Icon, Switch, Affix } from "antd";
import { HashRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";

import { routers } from "./routers";

import Home from "./components/home";
import Demo1 from "./components/demo1";
import Demo2 from "./components/demo2";

const { Header, Content, Footer, Sider } = Layout;

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      theme: 'light',
      current: '1',
      collapsed: false,
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }


  handleClick=({ item, key, keyPath })=>{
    this.setState({
      current: key,
    });
}

  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }

  render() {
    return (
      <Router>
        <Layout>
          <Sider
            theme={this.state.theme}
            // breakpoint="lg"
            // collapsedWidth="0"
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0
            }}
          >
            <div className="logo">MY LOGO</div>

            <Menu theme={this.state.theme}
                  mode="inline"
                  selectedKeys={[this.state.current]}
                  defaultSelectedKeys={["1"]}
                  onClick={this.handleClick}>
              {routers.map(r => (
                <Menu.Item key={r.key}>
                  <Link to={r.url}>
                    <Icon type={r.icon} />
                    <span className="nav-text">{r.name}</span>
                  </Link>
                </Menu.Item>
              ))}
            </Menu>
            <div className={this.state.theme === "dark" ? "btn-theme-dark" : "btn-theme-light"}>
              {/*<Switch onChange={this.changeTheme} />*/}
              <Affix offsetBottom={20}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Affix>
            </div>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0, textAlign: "center", position: 'fixed', zIndex: 1, width: '100%'}}>
              <h1>My Leetcode</h1>
            </Header>
            <Content style={{ margin: "75px 15px 10px", overflow: "initial",paddingLeft: "200px" }}>
              <div
                style={{ padding: 24, background: "#fff", minHeight: '100%' }}
              >
                <Route exact path="/" component={Home} />
                <Route path="/demo1" component={Demo1} />
                <Route path="/demo2" component={Demo2} />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              My-Leetcode ©2018 Created by https://github.com/wyh2020
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
