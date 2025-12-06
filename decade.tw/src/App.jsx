import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';

import {
    AlertFilled, FacebookOutlined, FolderViewOutlined,
    FormOutlined, FundViewOutlined, GithubOutlined,
    LeftOutlined, MailOutlined,
    MenuUnfoldOutlined, PoweroffOutlined,
    SwapOutlined, SyncOutlined, TwitterOutlined,
    UserOutlined, YoutubeOutlined
} from '@ant-design/icons'
import {
    AppOutline, StarFill,
    UnorderedListOutline,
} from 'antd-mobile-icons'
import {Button, Image, Layout, Menu, Space, theme} from 'antd';
import PAGEX0 from "./view/PAGEX0.jsx";
import PAGEX1 from "./view/PAGEX1.jsx";
import PAGEX2 from "./view/PAGEX2.jsx";
import PAGEX3 from "./view/PAGEX3.jsx";
import PAGEX4 from "./view/PAGEX4.jsx";

const {Header, Content, Footer} = Layout;
const tabs = [{
    key: '/tab1',
    label: `首頁|Home`,
    iconx: <AppOutline/>
}, {
    key: '/tab2',
    label: `部落格|News`,
    iconx: <MenuUnfoldOutlined/>
}, {
    key: '/tab3',
    label: `案例|Works`,
    iconx: <StarFill/>
}, {
    key: '/tab4',
    label: `關於|About`,
    iconx: <MenuUnfoldOutlined/>
}, {
    key: '/tab5',
    label: `聯繫|Contacts`,
    iconx: < MailOutlined/>
}];

function BoardX(prop) {
    // console.log("[App][BoardX][useStoreX.getState()]",InitPageID);
    // const pageID = useStoreX((state) => state.pageID);
    switch (prop.whichid) {
        case tabs[0].key:
            return (<PAGEX0/>)
        case tabs[1].key:
            return (<PAGEX1/>)
        case tabs[2].key:
            return (<PAGEX2/>)
        case tabs[3].key:
            return (<PAGEX3/>)
        case tabs[4].key:
            return (<PAGEX4/>)
    }
}

function App() {
    const [InitPageID, setInitPageID] = useState('/tab1')

    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    const onClickMenu = e => {
        console.log('click ', e);
        setInitPageID(e.key);
    };
    return (
        <Layout>
            <Header style={{backgroundColor: "black"}}>
                <Image style={{height: '50px'}} src={`logo/decade_logo.png`}/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[InitPageID]}
                    items={tabs}
                    style={{float: 'right', flex: 1, minWidth: 0}}
                    onClick={onClickMenu}
                />
            </Header>
            <Content style={{padding: '0 0px'}}>
                {/*<Breadcrumb*/}
                {/*    style={{ margin: '16px 0' }}*/}
                {/*    items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}*/}
                {/*/>*/}
                <BoardX whichid={InitPageID}/>


            </Content>
            <Footer style={{backgroundColor: 'rgb(46, 46, 46)', color: '#eee', height: '400px', textAlign: 'center'}}>
                <p>
                    <Space size={'large'}>

                        <FacebookOutlined
                            style={{fontSize: '35px'}}
                            onClick={() => window.open("https://www.facebook.com/decade.tw", "_blank")}
                        />
                        <YoutubeOutlined
                             style={{fontSize: '35px'}}
                            onClick={() => window.open("https://www.facebook.com/decade.tw", "_blank")}
                        />
                        <TwitterOutlined
                             style={{fontSize: '35px'}}
                            onClick={() => window.open("https://twitter.com/", "_blank")}
                        />
                        <GithubOutlined
                             style={{fontSize: '35px'}}
                            onClick={() => window.open("https://github.com/xlinx/sd-webui-decadetw-auto-prompt-llm", "_blank")}
                        />
                        <MailOutlined
                            style={{fontSize: '35px'}}
                            onClick={() => window.open("https://decade.tw/contact", "_blank")}
                        />

                    </Space>
                </p>
                <p>©{new Date().getFullYear()} DECADE.TW - 帝凱科技有限公司 - 台北市北投路一段9-C號 | 隱私權政策</p>

            </Footer>
        </Layout>
    );
}

export default App
