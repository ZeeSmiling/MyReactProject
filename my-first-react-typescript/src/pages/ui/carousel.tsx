import React from "react";

import './ui.less'
import {Card, Carousel} from "antd";

export default class Carousels extends React.Component {

    onChange = (number: number) => {
        console.log(number);
    }

    render() {
        return (
            <div style={{width: '100%'}}>
                <Card title="背景轮播">
                    <Carousel afterChange={this.onChange}>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                    </Carousel>
                </Card>
                <div>
                    <Card title="图片背景轮播" className="slider-wrap">
                        <Carousel effect="fade">
                            <div>
                                <img style={{width: 1238}} src="/carousel-img/carousel-1.jpg" alt=""/>
                            </div>
                            <div>
                                <img src="/carousel-img/carousel-2.jpg" alt=""/>
                            </div>
                            <div>
                                <img src="/carousel-img/carousel-3.jpg" alt=""/>
                            </div>
                        </Carousel>
                    </Card>
                </div>
            </div>
        )
    }
}