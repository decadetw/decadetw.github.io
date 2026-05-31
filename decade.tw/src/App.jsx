import {useEffect, useState} from 'react'
import './App.css'
import React from 'react';
import {
    AlertFilled,
    AppstoreOutlined, DownOutlined, EllipsisOutlined, FacebookOutlined, FileTextOutlined, FolderViewOutlined,
    FormOutlined, FundViewOutlined, GithubOutlined,
    LeftOutlined, MailOutlined,
    MenuUnfoldOutlined, MoreOutlined, PoweroffOutlined, ShoppingCartOutlined,
    SwapOutlined, SyncOutlined, TwitterOutlined,
    UserOutlined, YoutubeOutlined
} from '@ant-design/icons'
import {
    AppOutline, StarFill,
    UnorderedListOutline,
} from 'antd-mobile-icons'
import {Button, ConfigProvider, Dropdown, Flex, FloatButton, Grid, Image, Layout, Menu, Space, theme} from 'antd';
import PAGEX_HOME from "./view/PAGEX_HOME.jsx";
import PAGEX_BLOG from "./view/PAGEX_BLOG.jsx";
import PAGE_WORKS from "./view/PAGE_WORKS.jsx";
import PAGEX_ABOUT from "./view/PAGEX_ABOUT.jsx";
import PAGEX_CONTACT from "./view/PAGEX_CONTACT.jsx";
import PAGEX_CART from "./view/PAGEX_CART.jsx";
import {BrowserRouter, Route, Router, Routes, useNavigate} from "react-router";

const {Header, Content, Footer} = Layout;
function getTab(which){
    const tabs = [{
        key: 'home',
        label: `首頁|Home`,
        icon: <AppOutline/>,
        danger:true,
        p:<PAGEX_HOME isMobile={isMobile}/>
    },
    //     {
    //     key: 'blog',
    //     label: `部落格|News`,
    //     icon: <StarFill/>,
    //     PAGE:<PAGEX_BLOG isMobile={isMobile}/>
    // },
        {
        key: 'works',
        label: `案例|Works`,
        icon: <AppstoreOutlined />,
        p:<PAGE_WORKS isMobile={isMobile}/>
    }, {
        key: 'about',
        label: `關於|About`,
        icon: <MenuUnfoldOutlined/>,
        p:<PAGEX_ABOUT isMobile={isMobile}/>
    },
    //     {
    //     key: 'cart',
    //     label: `購物車|Cart`,
    //     icon: <ShoppingCartOutlined />,
    //     p:<PAGEX_CART isMobile={isMobile}/>
    // },
        {
        key: 'contacts',
        label: `聯繫|Contacts`,
        icon: < MailOutlined/>,
        p:<PAGEX_CONTACT isMobile={isMobile}/>
    }];
    if(which==='all')
        return tabs
    else{
        const r = tabs.filter((e)=>e.key===which)
        // console.log(`[DECADE.TW][getTab][r]: `, r);
        return r[0]
    }

}


function BoardX({InitPageID,isMobile}) {
    // return getTab(InitPageID,isMobile).p
        return (

            <Routes>
                <Route key={'00'} path="/" element={getTab('home').p} />
                {getTab('all').map((e,i) => <Route key={i} path={`/${e.key}`} element={e.p} />)}

                {/*<Route path="/app1" element={<App1 />} />*/}
                {/*<Route path="/app2" element={<App2 />} />*/}
            </Routes>

            )

    // return <PAGEX_HOME isMobile={isMobile}/>
}

// let initTab = 'tab1'

//about contact qa
// function detectMob1() {
//     const toMatch = [
//         /Android/i,
//         /webOS/i,
//         /iPhone/i,
//         /iPad/i,
//         /iPod/i,
//         /BlackBerry/i,
//         /Windows Phone/i
//     ];
//
//     return toMatch.some((toMatchItem) => {
//         return navigator.userAgent.match(toMatchItem);
//     });
// }
//
// function detectMob2() {
//     return ((window.innerWidth <= 800) && (window.innerHeight <= 600));
// }

function App() {
    // const {useBreakpoint} = Grid;
    // const screens = useBreakpoint();
    // const isMobile2 = !screens.lg;
    // console.log(`[DECADE.TW][][isMobile]: ${isMobile2}`);
    // console.log(`[DECADE.TW][][window.location]: ${window.location}`);
    const params = new URLSearchParams(window.location.search);
    // console.log(`[DECADE.TW][][params]: ${params}`);
    // for (const [key, value] of params.entries()) {
    //     console.log(`[DECADE.TW][][params.entries]${key}: ${value}`);
    // }
    // const initTab = params.entries()['tab'] === undefined ? 'home' : params.entries()['tab']
    // console.log(`[DECADE.TW][][initTab]: ${initTab}`);
    // const r = getTab(-1,false).filter((e) => initTab === e.key)
    // console.log(`[DECADE.TW][App][r]: `, r, r.length);
    // const [InitPageID, setInitPageID] = useState(r.length <= 0 ? getTab(0,false)[0].key : r[0].key)
    const [InitPageID, setInitPageID] =useState('home');
    // console.log(`[DECADE.TW][][InitPageID]: ${InitPageID}`);
    // const [menuMode, setMenuMode] = useState();
    const [isMobile, setisMobile] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();


    const onClickMenu = e => {
        console.log('click ', e);
        setInitPageID(e.key);

    };




    // const useDeviceOrientation = () => {
    //     const { width, height } = useWindowDimensions();
    //     return width > height ? 'landscape' : 'portrait';
    // };
    // const isMobile2 = () => {
    //     const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    //
    //     // 1. Check User Agent string for common mobile keywords
    //     const uaCheck = /android|bb\d+|meego.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent);
    //
    //     // 2. Check touch capability (Useful for newer iPads)
    //     const touchCheck = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    //
    //     // 3. Check modern experimental NavigatorUAData API if available
    //     const experimentalCheck = navigator.userAgentData?.mobile;
    //
    //     return experimentalCheck ?? (uaCheck || touchCheck);
    // };
    // function isMobileUserAgent2() {
    //     const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    //     return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    //
    // }
    //
    // function isMobileUserAgent() {
    //     return /Mobi|Android|iPhone|iPad|Windows Phone/i.test(navigator.userAgent);
    // }
    //
    // function hasTouchSupport() {
    //     return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    // }
    //
    // function hasTouchScreen2() {
    //     if ('maxTouchPoints' in navigator) {
    //         return navigator.maxTouchPoints > 0;
    //     }
    //     return false; // Fallback for older browsers
    // }
    //
    // function isTouchEnabled() {
    //     return 'ontouchstart' in document.documentElement;
    // }
    //
    // function hasTouchScreen() {
    //     return navigator.maxTouchPoints > 0;
    // }
    //
    // function isMobileScreen() {
    //     return window.innerWidth < 1280; // Example threshold for mobile width
    // }
    //
    // function detectMobRatio() {
    //     return ((window.innerWidth < window.innerHeight));
    // }

    // const checkWindowSize = () => {
    //     if (detectMobRatio()) {
    //         setMenuMode("inline");
    //         setisMobile(true)
    //     } else {
    //         setMenuMode("horizontal");
    //         setisMobile(false)
    //
    //     }
    // };
    const [orientation, setOrientation] = useState(
        window.screen?.orientation?.type || 'portrait-primary'
    );

    // useEffect(() => {
    //     const update = () => setOrientation(window.screen.orientation.type);
    //     console.log(`[DECADE.TW][][orientation]: ${orientation}`);
    //     window.screen.orientation?.addEventListener('change', update);
    //     return () => window.screen.orientation?.removeEventListener('change', update);
    // }, []);
    // useEffect(() => {
    //     window.addEventListener("resize", checkWindowSize);
    //     checkWindowSize();
    //     return () => window.removeEventListener("resize", checkWindowSize);
    // }, [isMobile2]);
    // const orientationQuery = window.matchMedia("(orientation: portrait)");
    // function handleOrientationChange(e) {
    //     if (e.matches) {
    //         console.log("Switched to Portrait");
    //         setisMobile(true)
    //     } else {
    //         console.log("Switched to Landscape");
    //         setisMobile(false)
    //     }
    // }
    // orientationQuery.addEventListener("change", handleOrientationChange);
    // Read current values
    // console.log(screen.orientation.type);  // e.g., "portrait-primary"
    // console.log(screen.orientation.angle); // e.g., 0, 90, 180, 270

// Listen for updates
    useEffect(() => {
        const callback=() => {
            // console.log(`New Orientation: ${screen.orientation.type}`);
            setisMobile(screen.orientation.angle===0 )
            console.log(`isMobile: ${isMobile} ${screen.orientation.angle} ${screen.orientation.type}`);
        }
        screen.orientation.addEventListener("change", callback);
        return () => screen.orientation?.removeEventListener('change', callback);
    }, []);
    const navigate = useNavigate();

    return (
<>
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
                        <Image onClick={()=>window.location.href = '/'}
                               style={{height: '50px'}}
                               src={`images/logo/decade_logo.png`} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <ConfigProvider
                            theme={{

                                components: {
                                    Menu: {
                                        algorithm: theme.defaultAlgorithm,
                                        collapsedIconSize:2222,
                                        collapsedWidth:2222,
                                        darkItemBg:'#aa0000',
                                        colorPrimary: '#00b96b',
                                        activeBarBorderWidth:11
                                    },
                                },
                            }}
                        >
                            <Menu mode={isMobile?'inline':'horizontal'}
                                // inlineCollapsed={isMobile}
                                // inlineIndent={1}
                                theme="dark"
                                defaultSelectedKeys={[InitPageID]}
                                items={getTab('all')}
                                style={{
                                    // rootStyle: {width:'1011px'},
                                    // float:  'right',
                                    // width: isMobile ? '1%' : '100%',
                                }}
                                onClick={(e)=>{console.log(e); setInitPageID(e.key); navigate('/'+e.key);}}
                            />
                        </ConfigProvider>

                    </div>
                </Flex>

            </Header>
            <Content style={{padding: '0 0px'}}>
                {/*<Breadcrumb*/}
                {/*    style={{ margin: '16px 0' }}*/}
                {/*    items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}*/}
                {/*/>*/}
                {/*<RouterProvider router={router} />*/}
                <BoardX InitPageID={InitPageID} isMobile={isMobile} />


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
</>
    );
}

export default App
