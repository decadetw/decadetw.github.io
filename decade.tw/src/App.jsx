import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
import {Button, Grid, Image, Layout, Menu, Space, theme} from 'antd';
import PAGEX0 from "./view/PAGEX0.jsx";
import PAGEX1 from "./view/PAGEX1.jsx";
import PAGE_WORKS from "./view/PAGE_WORKS.jsx";
import PAGEX3 from "./view/PAGEX3.jsx";
import PAGEX4 from "./view/PAGEX4.jsx";

const {Header, Content, Footer} = Layout;
const tabs = [{
    key: 'home',
    label: `首頁|Home`,
    iconx: <AppOutline/>
}, {
    key: 'blog',
    label: `部落格|News`,
    iconx: <MenuUnfoldOutlined/>
}, {
    key: 'works',
    label: `案例|Works`,
    iconx: <StarFill/>
}, {
    key: 'about',
    label: `關於|About`,
    iconx: <MenuUnfoldOutlined/>
}, {
    key: 'contacts',
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
            return (<PAGE_WORKS/>)
        case tabs[3].key:
            return (<PAGEX3/>)
        case tabs[4].key:
            return (<PAGEX4/>)
    }
}
let initTab='tab1'
//about contact qa
function detectMob1() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}
function detectMob2() {
    return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
}
function App() {
    const {useBreakpoint} = Grid;
    const screens = useBreakpoint();
    const isMobile = !screens.lg;
    console.log(`[DECADE.TW][][isMobile]: ${isMobile}`);
    console.log(`[DECADE.TW][][window.location]: ${window.location}`);
    const params = new URLSearchParams(window.location.search);
    console.log(`[DECADE.TW][][params]: ${params}`);

    for (const [key, value] of params.entries()) {
        console.log(`[DECADE.TW][][]${key}: ${value}`);
    }
    const initTab=params.entries()['tab']===undefined?'home':params.entries()['tab']
    const r=tabs.filter((e)=>initTab===e.key)
    console.log(`[DECADE.TW][App][r]: `,r,r.length);
    const [InitPageID, setInitPageID] = useState(r.length<=0?tabs[0].key:r[0].key)
    console.log(`[DECADE.TW][][InitPageID]: ${InitPageID}`);

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
                    // mode="inline"
                    mode={isMobile ? "inline" : "horizontal"}
                    theme="dark"
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
                {/*<RouterProvider router={router} />*/}
                <BoardX whichid={InitPageID}/>


            </Content>
            <Footer style={{backgroundColor: 'rgb(46, 46, 46)', color: '#eee', height: '400px', textAlign: 'center'}}>
                <>
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
                </>
                <p>©{new Date().getFullYear()} DECADE.TW - 帝凱科技有限公司 - 台北市北投路一段9-C號 | 隱私權政策</p>

            </Footer>
        </Layout>
    );
}

export default App
