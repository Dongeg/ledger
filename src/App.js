import React from 'react';
import { Route,HashRouter,Link } from "react-router-dom";
import { Layout,ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './App.scss'
import Home from './containers/Home'
import Create from './containers/Create'
moment.locale('zh');
const { Header, Content } = Layout;
class App extends React.Component{
    render() {
        return (
            <HashRouter>
                <ConfigProvider  locale={zhCN}>
                <div className="App">

                        <Layout>
                            <Header className="header">
                                <Link to="/"> 在线账本系统 </Link>
                            </Header>
                            <Content>
                                <Route path='/' exact component={Home}></Route>
                                <Route path='/Create' component={Create}></Route>
                                <Route path='/edit/:id' component={Create}></Route>
                            </Content>
                        </Layout>

                </div>
                </ConfigProvider>
            </HashRouter>
        );
    }

}
export default App;
