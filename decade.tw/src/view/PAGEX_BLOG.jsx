import React, {useEffect,memo} from "react";
import {Button, Card, Carousel, Image, theme} from 'antd';

const StaticHTML = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (

            <div
                style={{
                    background: colorBgContainer,
                    minHeight: 280,
                    padding: 0,
                    margin:0,
                    borderRadius: borderRadiusLG,
                }}
            >

                <iframe style={{height:'100vh',width:'100%',border:0}}
                        src={'https://decadetw.wordpress.com/'}>

                </iframe>

            </div>

    )
}
export default StaticHTML;
