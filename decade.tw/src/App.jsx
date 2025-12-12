import {useEffect, useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
    AlertFilled,
    AppstoreOutlined, DownOutlined, EllipsisOutlined, FacebookOutlined, FileTextOutlined, FolderViewOutlined,
    FormOutlined, FundViewOutlined, GithubOutlined,
    LeftOutlined, MailOutlined,
    MenuUnfoldOutlined, MoreOutlined, PoweroffOutlined,
    SwapOutlined, SyncOutlined, TwitterOutlined,
    UserOutlined, YoutubeOutlined
} from '@ant-design/icons'
import {
    AppOutline, StarFill,
    UnorderedListOutline,
} from 'antd-mobile-icons'
import {Button, Dropdown, Flex, FloatButton, Grid, Image, Layout, Menu, Space, theme} from 'antd';
import PAGEX_HOME from "./view/PAGEX_HOME.jsx";
import PAGEX_BLOG from "./view/PAGEX_BLOG.jsx";
import PAGE_WORKS from "./view/PAGE_WORKS.jsx";
import PAGEX_ABOUT from "./view/PAGEX_ABOUT.jsx";
import PAGEX_CONTACT from "./view/PAGEX_CONTACT.jsx";

const {Header, Content, Footer} = Layout;
const tabs = [{
    key: 'home',
    label: `首頁|Home`,
    icon: <AppOutline/>
}, {
    key: 'blog',
    label: `部落格|News`,
    icon: <StarFill/>
}, {
    key: 'works',
    label: `案例|Works`,
    icon: <AppstoreOutlined />
}, {
    key: 'about',
    label: `關於|About`,
    icon: <MenuUnfoldOutlined/>
}, {
    key: 'contacts',
    label: `聯繫|Contacts`,
    icon: < MailOutlined/>
}];

function BoardX(prop) {
    // console.log("[App][BoardX][useStoreX.getState()]",InitPageID);
    // const pageID = useStoreX((state) => state.pageID);
    switch (prop.whichid) {
        case tabs[0].key:
            return (<PAGEX_HOME isMobile={prop.isMobile}/>)
        case tabs[1].key:
            return (<PAGEX_BLOG isMobile={prop.isMobile}/>)
        case tabs[2].key:
            return (<PAGE_WORKS isMobile={prop.isMobile}/>)
        case tabs[3].key:
            return (<PAGEX_ABOUT isMobile={prop.isMobile}/>)
        case tabs[4].key:
            return (<PAGEX_CONTACT isMobile={prop.isMobile}/>)
    }
}

let initTab = 'tab1'

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
    return ((window.innerWidth <= 800) && (window.innerHeight <= 600));
}

function App() {
    const {useBreakpoint} = Grid;
    const screens = useBreakpoint();
    const isMobile2 = !screens.lg;
    console.log(`[DECADE.TW][][isMobile]: ${isMobile2}`);
    console.log(`[DECADE.TW][][window.location]: ${window.location}`);
    const params = new URLSearchParams(window.location.search);
    console.log(`[DECADE.TW][][params]: ${params}`);

    for (const [key, value] of params.entries()) {
        console.log(`[DECADE.TW][][]${key}: ${value}`);
    }
    const initTab = params.entries()['tab'] === undefined ? 'home' : params.entries()['tab']
    const r = tabs.filter((e) => initTab === e.key)
    console.log(`[DECADE.TW][App][r]: `, r, r.length);
    const [InitPageID, setInitPageID] = useState(r.length <= 0 ? tabs[0].key : r[0].key)
    console.log(`[DECADE.TW][][InitPageID]: ${InitPageID}`);
    const [menuMode, setMenuMode] = useState();
    const [isMobile, setisMobile] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    const onClickMenu = e => {
        console.log('click ', e);
        setInitPageID(e.key);
    };

    function isMobileUserAgent2() {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

    }

    function isMobileUserAgent() {
        return /Mobi|Android|iPhone|iPad|Windows Phone/i.test(navigator.userAgent);
    }

    function hasTouchSupport() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }

    function hasTouchScreen2() {
        if ('maxTouchPoints' in navigator) {
            return navigator.maxTouchPoints > 0;
        }
        return false; // Fallback for older browsers
    }

    function isTouchEnabled() {
        return 'ontouchstart' in document.documentElement;
    }

    function hasTouchScreen() {
        return navigator.maxTouchPoints > 0;
    }

    function isMobileScreen() {
        return window.innerWidth < 1280; // Example threshold for mobile width
    }

    function detectMobRatio() {
        return ((window.innerWidth < window.innerHeight));
    }

    const checkWindowSize = () => {
        if (detectMobRatio()) {
            setMenuMode("inline");
            setisMobile(true)
        } else {
            setMenuMode("horizontal");
            setisMobile(false)

        }
    };
    useEffect(() => {
        window.addEventListener("resize", checkWindowSize);
        checkWindowSize();
        return () => window.removeEventListener("resize", checkWindowSize);
    }, [checkWindowSize]);
    return (

        <Layout>
            {/*<FloatButton*/}
            {/*    icon={<FileTextOutlined />}*/}
            {/*    content="MENU"*/}
            {/*    shape="square"*/}
            {/*    type="primary"*/}
            {/*    badge={{ dot: true }}*/}
            {/*    style={{ right: `60px`, top: 4 ,height:'50px' }}*/}
            {/*/>*/}

            <Header style={{width: '100%', backgroundColor: "black"}}>
                <Flex align={'center'} justify={'space-between'}>
                    <div style={{ display: 'flex', alignItems: 'right' ,justifyContent: 'center' }}>
                        <Image onClick={()=>window.location.href = '/'} style={{height: '50px'}} src={`images/logo/decade_logo.png`} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Menu
                        mode="horizontal"
                        theme="dark"
                        defaultSelectedKeys={[InitPageID]}
                        items={tabs}
                        style={{
                            float:  'right',
                            width: isMobile ? '1%' : '100%',
                        }}
                        onClick={onClickMenu}
                    />
                    </div>
                </Flex>

            </Header>
            <Content style={{padding: '0 0px'}}>
                {/*<Breadcrumb*/}
                {/*    style={{ margin: '16px 0' }}*/}
                {/*    items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}*/}
                {/*/>*/}
                {/*<RouterProvider router={router} />*/}
                <BoardX isMobile={isMobile} whichid={InitPageID}/>


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
            <FloatButton.BackTop type="primary" visibilityHeight={0} onClick={() => {
                window.scrollTo(0, 0)
            }}/>
        </Layout>
    );
}

export default App
