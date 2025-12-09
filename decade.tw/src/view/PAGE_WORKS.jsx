import React, {useEffect,memo} from "react";
import {Anchor, Button, Card, Carousel, Col, Divider, Flex, Image, Row, theme} from 'antd';
const contentStyle = {
    margin: 0,
    padding:0,
    // height: '660px',
    width:'50%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#000',
};
const works_2025='「兩廳院 - 國家交響樂團」－ III資策會 X NSO X AI,「豪華朗機工」－ 宇宙寫生,「豪華朗機工」－ 日光域,「豪華朗機工」－ 手識,「豪華朗機工」－ 四合,「豪華朗機工」－ 很難很難,「ＩＯＮＩＣ」－ SacoMeasure'
+'「桃園會展中心」－ 入口裝置藝術 匯聚流 丁建中 ,「信義區微風顯示器」－ 視訊控制中心 ,「台中都會公園」－ 顯示控制中心 ,「特拉維夫」－ 裝置藝術 丁建中 ,「IRCAM 法國龐畢度美術館」－ 失眠寫生簿 豪華朗機工 ,「兩廳院 舞鈴劇團」－ 兩廳院 5G手環無線點控 資策會 ,「密室逃脫」－ 超高頻ＲＦＩＤ ,「北區資安中心」－ 顯示控制中心 ,「北區球場」－ 顯示控制中心 ,「ＩＴＲＩ」－ 震動演算法分析 ,「台北流行音樂中心－幻流行光 Ｘ 豪華朗機工」－中央控制軟體建置與技術總監 ,「高雄流行音樂中心 波光之翼 Ｘ 豪華朗機工」－中央控制軟體建置與技術總監,「基隆火車站 山海鳴光 Ｘ 豪華朗機工」－中央控制軟體建置與技術總監'
const works_2020='「台灣燈會－新竹主燈 Ｘ 豪華朗機工」－中央控制軟體技術總監,「台北燈會－台北萬華主燈 Ｘ ＡＫＩＢＯ老師」－中央控制軟體技術總監'
const works_2019='「信義誠品30週年」 一起幻想 Ｘ 豪華朗機工－機械手臂中央控制技術總監 ,「臺南奇美博物館」 影子特展 Ｘ 豪華朗機工－中央控制技術總監 ,「台北當代藝術館 」查無此人小花展 Ｘ 豪華朗機工 －中央控制技術總監,「永豐餘元太科技EINK 」電子紙控制計劃案'
const works_2018='「臺中世界花卉博覽會」聆聽花開的聲音 Ｘ 豪華朗機工－中央控制系統建置 天下雜誌 – https://youtu.be/AMcD4XxWp9Y 台中市政府 – https://youtu.be/T3IjXiGFess 台中市政府 – https://youtu.be/4oMRcMvEvJg ,「GoGoRo新⾞發表會」硬體控制系統建置 ,「宜蘭蘭傳藝中心 」互動介⾯多點控制設計,「臺北小巨蛋CTC世界盃國際標準舞公開賽」RF無線控制設計'
const works_2017='「松山文創園區讀衣II 」時尚 X 藝術跨界展 Ｘ JUST IN XX 周裕穎－驅動控制系統建置 ,「台北世大運」群控光電顧問 ,「白晝之夜」藝術活動 Ｘ 藝術家江惠菁 Ｘ 步里赫森－電路技術支援 ,「白晝之夜－台電大樓公共藝術」Ｘ 柯市長點燈－遠端控制系統 ,「元太科技EINK 電子紙」驅動控制系統規劃執行 ,「Fashion Tech JustInCase 」科技服裝設計 Ｘ JUST IN XX 周裕穎－驅動控制系統規劃建置 ,「農業溫室與政府公開資訊」研究計劃 ,「臺中機器學習MachineLearning」資料研究計劃,「國家歌劇院 UltraCombo群控無人機」通訊協定顧問'
const works_2016='「台灣電力公司公共藝術」日光域 Ｘ 華麗邏輯－電控技術設計與製作 ,「台灣電力公司公共藝術」河飄風 Ｘ 華麗邏輯－電路設計與製作,「台灣電力公司公共藝術」太陽之詩 Ｘ 華麗邏輯－馬達電控技術與製作'
const works_2015='「2015解密國家寶藏 Ｘ 奇想樂園互動科技館」X 工研院 X 華麗邏輯 X 光洋波斯特 『奇想樂園互動導覽技術與互動機台』採用本公司研發Centurion ProV2.0系統 ,「智慧型IMU壓力感測藍芽通訊柺杖」Ｘ 國立台灣大學 ivLab Ｘ 資策會創新所－共同研發 ,「智慧型震動馬達感測藍芽通訊鞋墊』Ｘ 資策會創新所 ,「敦煌擴增實境導覽裝置」小沙彌 Ｘ 台灣大學ivLab 2014年 ,「2014解密國家寶藏－奇想樂園互動科技館」X 工研院 X 華麗邏輯 『奇想樂園互動導覽技術與互動機台』採用本公司研發Centurion ProV1.5系統 ,「桃園機場第二航廈公共藝術裝置 」歐基理德的飛行 X 豪華朗機工 ,「英國曼側斯特」日光域 X 豪華朗機工 ,「臺南鹽水月津港燈節主燈」日光域 X 豪華朗機工 2013年 ,「文建會科技與表演藝術結合旗艦計畫」王俊傑 X 豪華朗機工 X 台北藝術大學科技藝術中心 『無人劇場Timecode系統研發』採用本公司研發Centurion ProV1.0系統 ,「汐止台灣科學園區大廳公共藝術」見為知著 X 豪華朗機工 ,「汐止台灣科學園區戶外公共藝術」時中光 X 豪華朗機工 2012年 ,「文建會科技與表演藝術結合旗艦計畫」M Project X 豪華朗機工 X 周先生 －共同創作 ,「足部壓力無線傳輸感測模組」X 國立台灣大學 X 資策會－共同創作 ,「文建會科技與表演藝術結合旗艦計畫 」線上演出『名導濾鏡』之雲端冒險演出之一 X 廣藝基金會 X 台北藝術大學 ,「Computex Taipei 」雲端個人3D印表機 X 威盛電子股份有限公司－合作研發 ,「Facebook互動式數位藝術櫥窗」X 台北教育大學 X 藝術家張博智 －合作研發 ,  業界演講 CTimes Android Days －『踏進Arduino互動科技世界－使用Android』（參與人數達200人次） ,「藝術裝置」福 X 豪華朗機工－互動設計 ,「ZigBee無線傳輸」X 德明財經科技大學－距離感測模組研發 , 研發 LED幻彩無線傳輸控制器 2011年 ,「Facebook互動式音樂」Tender Blackmail黑信 X 音樂家陳建騏 X 藝術家張博智 X 人力飛行劇團 －互動設計 ,「台北世界設計大會」聲音互動式展場 X 亞洲大學－聲音互動設計製作 ,「研發Centurion多點互動控制系統」 ,「藝術裝置」一日 X 豪華朗機工－電子控制設計 ,「藝術裝置」日光域 X 豪華朗機工－電子控制設計 ,「藝術裝置」游泳 X 豪華朗機工－電子控制設計 2010年 , 於台灣大學研發智慧感測手環 ,「藝術裝置」浪2 X 豪華朗機工－電子控制設計 ,「藝術裝置」無線音樂控制器 X 藝術家張博智－電子控制設計 ,「互動影像裝置」水立方時尚館 籠中鳥－藝術裝置電子控制設計 帝凱科技有限公司正式成立 2009年 , 於台灣大學研發智慧壓力感測鞋、智慧呼吸感測衣 ,「藝術裝置」浪1 X 豪華朗機工－電子控制設計 , 帝凱科技有限公司成立籌備處 , 申請國立台北藝術大學育成中心進駐廠商，獲99年度U-START教育部大專畢業生創業服務計畫30萬創業補助 2008年 , 美國洛杉磯與新加坡SIGGRAPH會議發表教室多人控制系統『Many to One PC by WSN System』 ,「藝術裝置」時間流產 X 朗機工－電子控制設計 ,「藝術裝置」南方樂浪 X 朗機工－電子控制設計 2007年 , 研發與生產－台灣中國石油S3加油機控制介面卡 2006年, 創辦Arduino.TW－台灣Arduino使用者社群'
const works=[
    {year:2025,list:works_2025.split(',')},
    // {year:2021,list:works_2021.split(',')},
    {year:2020,list:works_2020.split(',')},
    {year:2019,list:works_2019.split(',')},
    {year:2018,list:works_2018.split(',')},
    {year:2017,list:works_2017.split(',')},
    {year:2016,list:works_2016.split(',')},
    {year:2015,list:works_2015.split(',')}]
const StaticHTML = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    console.log('works',works)
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
                <h1 style={{alignContent:'center'}}>歷年實績|Works </h1>
                <Divider/>
                <Row>
                    <Col span={16}>
                        {works.map((e, i, a) => {
                            return <div key={`${e.year}${i}`} id={e.year} style={{ background: 'rgba(222,222,222,0.502)'}}>
                                <h2>{e.year}</h2>
                                <ul>
                                {e.list.map((e2,i2,a2)=>{
                                    return <li key={`${e.year}${i2}`}>{e2}</li>
                                })}
                                </ul>
                            </div>
                        })}
                    </Col>
                    <Col span={8}>
                        <Anchor
                            replace
                            items={[
                                {
                                    key: '2025',
                                    href: '#2025',
                                    title: '2025',
                                },
                                {
                                    key: '2020',
                                    href: '#2020',
                                    title: '2020',
                                },
                                {
                                    key: '2019',
                                    href: '#2019',
                                    title: '2019',
                                },
                                {
                                    key: '2018',
                                    href: '#2018',
                                    title: '2018',
                                },
                                {
                                    key: '2017',
                                    href: '#2017',
                                    title: '2017',
                                },
                                {
                                    key: '2016',
                                    href: '#2016',
                                    title: '2016',
                                },
                                {
                                    key: '2015',
                                    href: '#2015',
                                    title: '2008-2015',
                                },
                            ]}
                        />
                        <Divider/>
                        <h3 style={{ margin: 10,alignContent:'center'}}>works reviews </h3>
                        <Divider/>
                        <Carousel autoplay arrows>
                            {Array.from({length: 21}, (value, index) => index).map((e) => {
                                return <div>
                                    <div style={{
                                        margin: 10,
                                        padding:0,
                                        // height: '660px',
                                        width:'50%',
                                        // color: '#1ff',
                                        // lineHeight: '160px',
                                        textAlign: 'center',
                                        background: '#000',
                                    }}>
                                        <Image
                                            width={`100%`}
                                            alt="basic image"
                                            src={`images/slide/${e}.png`}
                                            preview={{
                                                src: `images/slide/${e}.png`,
                                            }}
                                        /></div>
                                </div>
                            })}

                        </Carousel>
                    </Col>
                </Row>
                <Divider/>
            </div>
        </>
    )
}
export default StaticHTML;
