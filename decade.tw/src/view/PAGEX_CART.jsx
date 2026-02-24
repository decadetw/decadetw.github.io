import React, {useEffect,memo} from "react";
import {Button, Carousel, Col, Divider, DatePicker, Input, InputNumber, Row, Select, Space, theme, Image} from 'antd';
import {CarryOutTwoTone, CreditCardTwoTone, DollarTwoTone, IdcardTwoTone, ShoppingTwoTone} from "@ant-design/icons";
import { createFromIconfontCN } from '@ant-design/icons';

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
// const IconFont = createFromIconfontCN({
//     scriptUrl: [
//         '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overridden)
//         '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
//     ],
// });
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
                        <Space.Compact block>
                            <Select
                                defaultValue="ShoppingModel-App"
                                options={[
                                    { label: 'ShoppingModel-Net', value: 'ShoppingModel-Net' },
                                    { label: 'ShoppingModel-App', value: 'ShoppingModel-App' },
                                ]}
                            />
                            <Input style={{ width: '50%' }} defaultValue="input access token.." />
                            <InputNumber defaultValue={12} />
                        </Space.Compact>

                        <Space.Compact block>
                            <DatePicker.RangePicker style={{ width: '70%' }} />
                            <Input style={{ width: '30%' }} defaultValue="input invite code" />
                            <Button type="primary">Order</Button>
                        </Space.Compact>
                    </Col>
                    <Col span={9} pull={15} style={{textAlign:'center'}}>
                            <ShoppingTwoTone style={{fontSize:'11em'}}/>
                        <p>
                            <Space>
                                <CreditCardTwoTone />
                                <IdcardTwoTone />
                                <CarryOutTwoTone />
                                <DollarTwoTone />
                            </Space>
                        </p>

                    </Col>
                </Row>

                <Divider/>


            </div>
        </>
    )
}
export default StaticHTML;
