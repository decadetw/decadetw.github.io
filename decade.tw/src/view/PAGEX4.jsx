import React, {useEffect,memo} from "react";
import {Button, Carousel, Col, Divider, Image, Row, theme} from 'antd';
const contentStyle = {
    margin: 0,
    padding:0,
    // height: '660px',
    width:'100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#000',
};
const StaticHTML = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (<>

            <div
                style={{
                    background: colorBgContainer,
                    minHeight: 280,
                    padding: 24,
                    borderRadius: borderRadiusLG,
                }}
            >
                <Divider/>
                <Row gutter={'100px'} align={'middle'} justify={'space-between'}>
                    <Col span={15} push={9}>
                        <h1>公司資訊</h1>
                        <h3>帝凱科技有限公司 DECADE Co., Ltd. </h3>
                        <ul>
                            <li>台北市北投路一段9-C號。地圖：
                                <a href="https://goo.gl/maps/6UJAAUuYaViwRyBKA" target="_blank" rel="noreferrer noopener">GoogleMAP</a>
                            </li>
                            <li>No.9-C, Sec. 1, Beitou Rd., Beitou Dist. Taipei City, Taiwan.</li>
                            <li>統一編號：29133824</li>
                            <li>e-Mail: victoria@decade.tw </li>
                            <li>LINE: @ecz7450a</li>
                            <li>FB: <a href="https://www.facebook.com/DECADE.TW">DECADE.TW</a>
                            </li>
                        </ul>
                        <a href="https://lin.ee/RcQIUgM">
                            <img decoding="async" src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png"
                                 alt="加入好友" height="36" border="0"/>
                        </a>
                        <h1>帳務資訊</h1>
                        <ul>
                            <li>銀行：中國信託商業銀行－板新分行(822)</li>
                            <li>戶名：帝凱科技有限公司</li>
                            <li>帳號：4175-4026-6515</li>
                        </ul>
                        <h1>其他連結</h1>

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14449.701610014334!2d121.5010294!3d25.1213049!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe398fdb39ca95fe4!2z5bid5Yex5LqS5YuV56eR5oqA!5e0!3m2!1szh-TW!2stw!4v1631195282390!5m2!1szh-TW!2stw"
                                width="500" height="300" allowFullScreen="" loading="lazy"></iframe>


                    </Col>
                    <Col span={9} pull={15}>
                        <Image width={`100%`} src={`map/decade_map.jpg`}></Image>
                    </Col>
                </Row>
                <Divider/>


            </div>
        </>
    )
}
export default StaticHTML;
