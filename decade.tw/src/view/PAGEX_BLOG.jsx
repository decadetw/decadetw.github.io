import React, {useEffect,memo} from "react";
import {Button, Card, Carousel, Image, theme} from 'antd';
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
                    padding: 0,
                    borderRadius: borderRadiusLG,
                }}
            >
                <Card style={{margin:'0px',padding:'0px'}}>
                <iframe style={{height:'100vh',width:'100%'}} src={'https://decadetw.wordpress.com/'}></iframe>
                </Card>
            </div>
        </>
    )
}
export default StaticHTML;
