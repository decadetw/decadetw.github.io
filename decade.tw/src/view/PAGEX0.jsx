import React, {useEffect, memo} from "react";
import {Button, Card, Carousel, Divider, Flex, Image, theme, Typography} from 'antd';

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
    {
        t: '台北燈節主燈偶控系統',
        d: '史上第一個會跳舞的主燈！2021台北燈節「七彩八寶新世界」12/17 登場（台北市政府提供）',
        url: 'https://www.youtube.com/embed/et_1mErdoKY?feature=oembed'
    },
    {
        t: '2021台灣燈會主燈_乘風逐光(完整版)',
        d: '台灣燈會新竹主燈中央控制系統',
        url: 'https://www.youtube.com/embed/GGZHxkKLopg?feature=oembed'
    },
    {t: '高雄流行音樂中心', d: '', url: 'https://www.youtube.com/embed/GGZHxkKLopg?feature=oembed'},
    {
        t: '豪華朗機工「聆聽花開的聲音」',
        d: '豪華朗機工「聆聽花開的聲音」- 光落物生︱未來城市@天下雜誌',
        url: 'https://www.youtube.com/embed/GGZHxkKLopg?feature=oembed'
    },
    {t: '誠品30週年機械手臂控制', d: '', url: 'https://www.youtube.com/embed/GGZHxkKLopg?feature=oembed'},
    {t: '台電大樓馬達控制系統', d: '', url: 'https://www.youtube.com/embed/GGZHxkKLopg?feature=oembed'},
    {
        t: '2016 公共藝術作品 河飄風_Flowingly Blows the Breeze',
        d: '',
        url: 'https://www.youtube.com/embed/Xkbk8A6MBmI?feature=oembed'
    },
]
const StaticHTML = () => {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    return (<>
            <Divider style={{
                fontSize: '1em', fontStyle: 'italic', fontWeight: 'bold',
                borderColor: '#ffffff'
            }}> ...</Divider>
            <Carousel autoplay arrows>
                {Array.from({length: 21}, (value, index) => index).map((e) => {
                    return <div>
                        <div style={contentStyle}>
                            <Image
                                width={`100%`}
                                alt="basic image"
                                src={`slide/${e}.png`}
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
                <Divider style={{
                    fontSize: '3em', fontStyle: 'italic', fontWeight: 'bold',
                    borderColor: '#000000'
                }}>互動科技解決方案</Divider>
                <Divider style={{
                    fontSize: '1em', fontStyle: 'italic', fontWeight: 'bold',
                    borderColor: '#ffffff'
                }}>提供展場軟硬體整合設計規劃；舞台燈光控制</Divider>
                <Flex wrap gap="small">
                    {list_content_youtube.map(e => (
                        <Card hoverable
                              style={{width: '30vw',}}
                              cover={
                                  <div className="wrapper">

                                      <div className="frame-container">
                                          <iframe height="315"
                                                  src={e.url}
                                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                  referrerPolicy="strict-origin-when-cross-origin"
                                                  allowFullScreen></iframe>
                                      </div>
                                  </div>
                              }>
                            <Meta title={e.t} description={e.d}/>

                        </Card>
                    ))}
                </Flex>
                <Divider style={{
                    fontSize: '3em', fontStyle: 'italic', fontWeight: 'bold',
                    borderColor: '#000000'
                }}>聲/光/機/神控制</Divider>
                <Divider style={{
                    fontSize: '1em', fontStyle: 'italic', fontWeight: 'bold',
                    borderColor: '#ffffff'
                }}>軟/體/硬/電子電路/多媒體</Divider>
                <Flex wrap gap="small">
                    {list_content_youtube.map(e => (
                        <Card hoverable
                              style={{width: '30vw',}}
                              cover={
                                  <Image ></Image>
                              }>
                            <Meta title={e.t} description={e.d}/>

                        </Card>
                    ))}
                </Flex>
                <Divider style={{
                    fontSize: '3em', fontStyle: 'italic', fontWeight: 'bold',
                    borderColor: '#000000'
                }}>電路PCB設計/伺服馬達/機械手臂規劃部署</Divider>
                <Divider style={{
                    fontSize: '1em', fontStyle: 'italic', fontWeight: 'bold',
                    borderColor: '#ffffff'
                }}>常設／半永久性裝置</Divider>
                <Flex wrap gap="small">
                    {list_content_youtube.map(e => (
                        <Card hoverable
                              style={{width: '30vw',}}
                              cover={
                                  <Image ></Image>
                              }>
                            <Meta title={e.t} description={e.d}/>

                        </Card>
                    ))}
                </Flex>
                <Divider style={{
                    fontSize: '3em', fontStyle: 'italic', fontWeight: 'bold',
                    borderColor: '#000000'
                }}>ML/AI/軟體演算法設計</Divider>
                <Divider style={{
                    fontSize: '1em', fontStyle: 'italic', fontWeight: 'bold',
                    borderColor: '#ffffff'
                }}>effect algorithm / model training / fineTune</Divider>
                <Flex wrap gap="small">
                    {Array.from({length: 21}, (value, index) => index).map((e) => {
                        return <Card hoverable
                                     style={{width: '30vw',}}
                                     cover={
                                         <Image
                                             width={`100%`}
                                             alt="basic image"
                                             src={`slide/${e}.png`}
                                             preview={{
                                                 src: `slide/${e}.png`,
                                             }}
                                         />
                                     }>
                            {/*<Meta title={e.t} description={e.d}/>*/}

                        </Card>
                    })}

                </Flex>
                <Divider style={{
                    fontSize: '3em', fontStyle: 'italic', fontWeight: 'bold',
                    borderColor: '#000000'
                }}>ML/AI/軟體演算法設計</Divider>
                <Divider style={{
                    fontSize: '1em', fontStyle: 'italic', fontWeight: 'bold',
                    borderColor: '#ffffff'
                }}>effect algorithm / model training / fineTune</Divider>
                <Flex wrap gap="small">
                    {Array.from({length: 9}, (value, index) => index).map((e) => {
                        return <Card hoverable
                                     // bodyStyle={{padding: "0"}}
                                     style={{margin: "0",width: '30vw',height: '20vw',
                                         // boxShadow: '0px 1px 10px rgba(0,1,1,0.15)'
                                     }}
                                     // cover={ }
                        >
                            {/*<Meta title={e.t} description={e.d}/>*/}
                            <Image
                                src={`algorithmPic/${e}.png`}
                                preview={{
                                    src: `slide/${e}.png`,
                                }}
                            />
                        </Card>
                    })}

                </Flex>
            </div>


        </>
    )
}
export default StaticHTML;
