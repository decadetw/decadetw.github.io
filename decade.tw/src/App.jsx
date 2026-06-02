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
import {
    Breadcrumb,
    Button,
    ConfigProvider,
    Dropdown,
    Flex,
    FloatButton,
    Grid,
    Image,
    Layout,
    Menu,
    Space,
    theme
} from 'antd';
import PAGEX_HOME from "./view/PAGEX_HOME.jsx";
import PAGEX_BLOG from "./view/PAGEX_BLOG.jsx";
import PAGE_WORKS from "./view/PAGE_WORKS.jsx";
import PAGEX_ABOUT from "./view/PAGEX_ABOUT.jsx";
import PAGEX_CONTACT from "./view/PAGEX_CONTACT.jsx";
import PAGEX_CART from "./view/PAGEX_CART.jsx";
import {BrowserRouter, Route, Router, RouterProvider, Routes, useNavigate} from "react-router";

const {Header, Content, Footer} = Layout;


function App() {
    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search);
    const [InitPageID, setInitPageID] =useState('home');
    const [isMobile, setisMobile] = useState(screen.orientation.angle !==0);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();


    const onClickMenu = e => {
        console.log('click ', e);
        setInitPageID(e.key);

    };

    function getTab(which){
        const tabs = [{
            key: 'home',
            label: `首頁`,
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
                label: `案例`,
                icon: <AppstoreOutlined />,
                p:<PAGE_WORKS isMobile={isMobile}/>
            }, {
                key: 'about',
                label: `關於`,
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
                label: `聯繫`,
                icon: < MailOutlined/>,
                p:<PAGEX_CONTACT isMobile={isMobile}/>
            }];
        if(which==='all')
            return tabs
        else{
            const r = tabs.filter((e)=>e.key===which)
            return r[0]
        }
    }
    function BoardX({InitPageID,isMobile}) {
        return (

            <Routes>
                <Route key={'00'} path="/" element={getTab('home').p} />
                {getTab('all').map((e,i) => <Route key={i} path={`/${e.key}`} element={e.p} />)}

                {/*<Route path="/app1" element={<App1 />} />*/}
                {/*<Route path="/app2" element={<App2 />} />*/}
            </Routes>
        )
    }
    const [orientation, setOrientation] = useState(
        window.screen?.orientation?.type || 'portrait-primary'
    );

    useEffect(() => {
        setisMobile(window.innerWidth<1280)
    }, [window.innerWidth]);
    // useEffect(() => {
    //     // const callback=() => {
    //         // console.log(`New Orientation: ${screen.orientation.type}`);
    //         setisMobile(screen.orientation.angle ===0)
    //         console.log(`isMobile: ${isMobile} ${screen.orientation.angle} ${screen.orientation.type}`);
    //     // }
    //     // screen.orientation.addEventListener("change", callback);
    //     // return () => screen.orientation?.removeEventListener('change', callback);
    // }, [screen.orientation.angle]);


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
                            <Menu mode={'horizontal'}
                                  // inlineIndent={isMobile ? 0 : 1}
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
            <Content style={{width: '100%'}}>
                <Breadcrumb
                    style={{ margin: '0px 0' }}
                    items={[{ title: 'Home' }, { title: `isMobile=${isMobile}` }, { title: 'decade.tw' }]}
                />
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
