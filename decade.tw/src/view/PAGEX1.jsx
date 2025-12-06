import React, {useEffect,memo} from "react";
import {Button, Carousel, Image,theme} from 'antd';
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
                Content1
            </div>
        </>
    )
}
export default StaticHTML;
