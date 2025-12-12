import React, {useEffect, memo} from "react";
import {Button, Card, Carousel, Divider, Space, Image, Flex, theme, Typography, Masonry} from 'antd';
// import { Typing, TypingStep } from "typing-effect-reactjs";

const {Meta} = Card;
const contentStyle = {
    margin: 0,
    padding: 0,
    // height: '660px',
    width: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#000',
};

const list_content_youtube = [
    {t: '基隆山海鳴光', d: '', url: 'https://www.youtube.com/embed/GGZHxkKLopg?feature=oembed&showinfo=0&controls=0'},
    {t: '台北燈節主燈偶控系統',d: '',url: 'https://www.youtube.com/embed/et_1mErdoKY?feature=oembed'},
    {t: '台灣燈會新竹主燈中央控制系統',d: '',url: 'https://www.youtube.com/embed/RtN9LXy0nSY?feature=oembed'},
    {t: '高雄流行音樂中心', d: '', url: 'https://www.youtube.com/embed/9_RAmF9dAQo?feature=oembed'},
    {t: '豪華朗機工「聆聽花開的聲音」',d: '',url: 'https://www.youtube.com/embed/AMcD4XxWp9Y?feature=oembed'},
    {t: '誠品30週年機械手臂控制', d: '', url: 'https://www.youtube.com/embed/uDib2sl9EQ4?feature=oembed'},
    {t: '台電大樓馬達控制系統', d: '', url: 'https://www.youtube.com/embed/YPILezM36Mk?feature=oembed'},
    {t: '台中世界花卉博覽會', d: '', url: 'https://www.youtube.com/embed/zv084TmAvKo?feature=oembed'},
    {t: '台電大樓風動電路設計', d: '', url: 'https://www.youtube.com/embed/Xkbk8A6MBmI?feature=oembed'},
    {t: '世大運開幕式', d: '', url: 'https://www.youtube.com/embed/mnyQ6473jj0?feature=oembed'},
    {t: '台灣科技園區裝置控制', d: '', url: 'https://www.youtube.com/embed/XWcwRYwDcVs?feature=oembed'},
    {t: '台南燈會中央控制系統', d: '', url: 'https://www.youtube.com/embed/uWbwuabvpgY?feature=oembed'},
]
const list_content_algorithm_youtube = [
    {t: '誠品３０週年機械手臂控制', d: '', url: 'https://www.youtube.com/embed/blTlSpL5gPA?feature=oembed&showinfo=0&controls=0'},
    {t: '法國IRCAM 中央控制',d: '',url: 'https://www.youtube.com/embed/G21wHvVLtVY?feature=oembed'},
    {t: '台北流行音樂中心公共藝術控制系統',d: '',url: 'https://www.youtube.com/embed/dF1C0cCYdGA?feature=oembed'},
    // {t: '博裝置中控手機', d: '', url: 'https://www.youtube.com/embed/7zb-bQNcHsE?feature=oembed'},
    {t: '台北燈節主燈牛偶控制系統', d: '', url: 'https://www.youtube.com/embed/iLRVEH9zFao?feature=oembed'},
    {t: '基隆車站控制系統',d: '',url: 'https://www.youtube.com/embed/yNvj24m-KbA?feature=oembed'},
    {t: '台南奇美博物館', d: '', url: 'https://www.youtube.com/embed/7wjWHlk9EHU?feature=oembed'},
    {t: '台灣電力公司日光域控制系統', d: '', url: 'https://www.youtube.com/embed/0wHT3ey_Dkc?feature=oembed'},
    {t: '新竹台灣燈會主燈控制系統', d: '', url: 'https://www.youtube.com/embed/RPPHKiupq58?feature=oembed'},
    {t: 'Arduino教父', d: '', url: 'https://www.youtube.com/embed/b9wYHVMWJ10?feature=oembed'},
];
const justifyOptions = [
    'Space-start',
    'center',
    'Space-end',
    'space-between',
    'space-around',
    'space-evenly',
];
const alignOptions = ['Space-start', 'center', 'Space-end'];
const diverStyle={
    width:'10%',
    fontSize: '2em', fontStyle: 'italic', fontWeight: 'bold',
    borderColor: '#000000'
}
const StaticHTML = (prop) => {
    const {token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    const [justify, setJustify] = React.useState(justifyOptions[3]);
    const [alignItems, setAlignItems] = React.useState(alignOptions[0]);
    return (<>
            <div style={{height:'2em',margin:'0px',backgroundColor:'whitesmoke'}}>
                {/*<Typing element="h4" styleClass='typing_style'*/}
                {/*    text={[*/}
                {/*        `ＤＥＣＡＤＥ since 2008 (possesses ${new Date().getFullYear()-2008}years experience as a interactive artisan.)`,*/}
                {/*        `ＤＥＣＡＤＥ.TW since 2008 (possesses ${new Date().getFullYear()-2008}years experience as a interactive artisan.)`,*/}
                {/*    ]}*/}
                {/*    smartBackspace*/}
                {/*/>*/}
            </div>
            {/*<p style={{*/}
            {/*    textAlign:'center',*/}
            {/*    fontSize: '1em', fontStyle: 'italic', fontWeight: 'bold',*/}
            {/*    borderColor: '#ffffff'*/}
            {/*}}> ＤＥＣＡＤＥ.TW since 2008 (possesses {new Date().getFullYear()-2008}years experience as a interactive artisan.)</p>*/}
            <Carousel autoplay arrows>
                {Array.from({length: 21}, (value, index) => index).map((e) => {
                    return <div>
                        <div style={contentStyle}>
                            <Image
                                width={`100%`}
                                alt="basic image"
                                src={`images/slide/${e}.png`}
                                preview={{
                                    src: `slide/${e}.png`,
                                }}
                            /></div>
                    </div>
                })}

            </Carousel>
            <div
                style={{
                    background: colorBgContainer,
                    minHeight: 280,
                    padding: 24,
                    borderRadius: borderRadiusLG,
                }}
            >
                <Divider style={diverStyle}>互動科技解決方案</Divider>
                <Divider style={{
                    fontSize: '1em', fontStyle: 'italic', fontWeight: 'bold',
                    borderColor: '#ffffff'
                }}>提供展場軟硬體整合設計規劃；舞台燈光控制</Divider>
                <Masonry
                    columns={prop.isMobile?2:4}
                    gutter={4}
                    items={list_content_youtube.map((img, index) => ({
                        key: `item-${index}`,
                        data: img,
                    }))}
                    itemRender={({ data }) => (
                        <Card hoverable
                            // style={{width: `${100/3.2}vw`,}}
                              cover={<div className="wrapper">
                                  <div className="frame-container">
                                      <iframe height="315"
                                              src={data.url}
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                              referrerPolicy="strict-origin-when-cross-origin"
                                              allowFullScreen></iframe>
                                  </div>
                              </div>
                              }>
                            <Meta title={data.t} description={data.d}/>
                        </Card>
                    )}
                />
                {/*<Space wrap gap="small" justify={justify} align={alignItems}>*/}
                {/*    {list_content_youtube.map(e => (*/}
                {/*        <Card hoverable*/}
                {/*              style={{width: `${100/4.4}vw`,}}*/}
                {/*              cover={*/}
                {/*                  <div className="wrapper">*/}

                {/*                      <div className="frame-container">*/}
                {/*                          <iframe height="315"*/}
                {/*                                  src={e.url}*/}
                {/*                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
                {/*                                  referrerPolicy="strict-origin-when-cross-origin"*/}
                {/*                                  allowFullScreen></iframe>*/}
                {/*                      </div>*/}
                {/*                  </div>*/}
                {/*              }>*/}
                {/*            <Meta title={e.t} description={e.d}/>*/}

                {/*        </Card>*/}
                {/*    ))}*/}
                {/*</Space>*/}
                <Divider style={diverStyle}>聲/光/機/神控制</Divider>
                <Divider style={{
                    fontSize: '1em', fontStyle: 'italic', fontWeight: 'bold',
                    borderColor: '#ffffff'
                }}>軟/體/硬/電子電路/多媒體</Divider>
                <Masonry
                    columns={prop.isMobile?2:3}
                    gutter={4}
                    items={list_content_algorithm_youtube.map((img, index) => ({
                        key: `item-${index}`,
                        data: img,
                    }))}
                    itemRender={({ data }) => (
                                <Card hoverable
                                  // style={{width: `${100/3.2}vw`,}}
                                  cover={<div className="wrapper">
                                      <div className="frame-container">
                                          <iframe height="315"
                                                  src={data.url}
                                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                  referrerPolicy="strict-origin-when-cross-origin"
                                                  allowFullScreen></iframe>
                                      </div>
                                  </div>
                                  }>
                                <Meta title={data.t} description={data.d}/>
                            </Card>
                    )}
                />
                {/*<Space wrap gap="small" justify={justify} align={alignItems}>*/}
                {/*    {list_content_algorithm_youtube.map(e => (*/}
                {/*        <Card hoverable*/}
                {/*              style={{width: `${100/3.2}vw`,}}*/}
                {/*              cover={<div className="wrapper">*/}

                {/*                  <div className="frame-container">*/}
                {/*                      <iframe height="315"*/}
                {/*                              src={e.url}*/}
                {/*                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
                {/*                              referrerPolicy="strict-origin-when-cross-origin"*/}
                {/*                              allowFullScreen></iframe>*/}
                {/*                  </div>*/}
                {/*              </div>*/}
                {/*              }>*/}
                {/*            <Meta title={e.t} description={e.d}/>*/}

                {/*        </Card>*/}
                {/*    ))}*/}
                {/*</Space>*/}

                <Divider style={diverStyle}>RF電路/伺服馬達/機械手臂</Divider>
                <Divider style={{
                    fontSize: '1em', fontStyle: 'italic', fontWeight: 'bold',
                    borderColor: '#ffffff'
                }}>常設／半永久性裝置</Divider>
                <Masonry
                    columns={prop.isMobile?2:4}
                    gutter={16}
                    items={Array.from({length: 20}, (value, index) => index).map((img, index) => ({
                        key: `item-${index}`,
                        data: `images/slide/${img}.png`,
                    }))}
                    itemRender={({ data }) => (
                        <Image src={`${data}`} alt="sample" style={{ width: '100%' }} />
                    )}
                />
                {/*<Space wrap gap="small" justify={justify} align={alignItems}>*/}
                {/*    {Array.from({length: 21}, (value, index) => index).map((e) => {*/}
                {/*        return <Card hoverable*/}
                {/*                     style={{width: `${100/3.2}vw`,*/}
                {/*                         boxShadow: '0px 1px 10px rgba(0,1,1,0.15)'*/}
                {/*                     }}                                     cover={*/}
                {/*                         <Image*/}
                {/*                             width={`100%`}*/}
                {/*                             alt="basic image"*/}
                {/*                             src={`slide/${e}.png`}*/}
                {/*                             preview={{*/}
                {/*                                 src: `slide/${e}.png`,*/}
                {/*                             }}*/}
                {/*                         />*/}
                {/*                     }>*/}
                {/*            /!*<Meta title={e.t} description={e.d}/>*!/*/}
                {/*        </Card>*/}
                {/*    })}*/}
                {/*</Space>*/}
                <Divider style={diverStyle}>ML/AI/軟體演算法設計</Divider>
                <Divider style={{
                    fontSize: '1em', fontStyle: 'italic', fontWeight: 'bold',
                    borderColor: '#ffffff'
                }}>effect algorithm / model training / fineTune</Divider>
                <Masonry
                    columns={prop.isMobile?2:4}
                    gutter={8}
                    items={Array.from({length: 9}, (value, index) => index).map((img, index) => ({
                        key: `item-${index}`,
                        data: `images/algorithmPic/${img}.png`,
                    }))}
                    itemRender={({ data }) => (
                        <Image src={`${data}`} alt="sample" style={{ width: '100%' }} />
                    )}
                />
                {/*<Space wrap gap="small" justify={justify} align={alignItems}>*/}
                {/*    {Array.from({length: 9}, (value, index) => index).map((e,i,a) => {*/}
                {/*        return <Card hoverable*/}
                {/*                     // bodyStyle={{padding: "0"}}*/}
                {/*                     style={{width: `${100/3.2}vw`,*/}
                {/*                         boxShadow: '0px 1px 10px rgba(0,1,1,0.15)'*/}
                {/*                     }}*/}
                {/*                     cover={*/}
                {/*                         <Image*/}
                {/*                             width={`100%`}*/}
                {/*                             height={i>=a.length-3?'500px':`300px`}*/}
                {/*                             alt="basic image"*/}
                {/*                             src={`algorithmPic/${e}.png`}*/}
                {/*                             preview={{*/}
                {/*                                 src: `algorithmPic/${e}.png`,*/}
                {/*                             }}*/}
                {/*                         />*/}
                {/*                     }>*/}
                {/*            */}
                {/*        </Card>*/}
                {/*    })}*/}
                {/*</Space>*/}
            </div>


        </>
    )
}
export default StaticHTML;
