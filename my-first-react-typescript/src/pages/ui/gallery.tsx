import React from "react";

import './ui.less'
import {Card, Col, Modal, Row} from "antd";

interface IStates {
    visible: boolean,
    currentImg: string,
}


export default class Gallery extends React.Component {

    state = {
        visible: false,
        currentImg: '',
    }

    imgs = [
        ['1.png', '2.png', '3.png', '4.png', '5.png'],
        ['6.png', '7.png', '8.png', '9.png', '10.png'],
        ['11.png', '12.png', '13.png', '14.png', '15.png'],
        ['16.png', '17.png', '18.png', '19.png', '20.png'],
        ['21.png', '22.png', '23.png', '24.png', '25.png'],
    ];

    imgList = this.imgs.map((img) =>
        img.map((item) =>
            <Card style={{marginBottom: 10}}
                  cover={<img src={'gallery/' + item} alt=""/>}
                  onClick={()=>this.openGallery(item)}>
                <Card.Meta title="React Admin" description="I Love Imooc"/>
            </Card>)
    )

    openGallery = (imgSrc: string)=>{
        this.setState({
            visible: true,
            currentImg: 'gallery/' + imgSrc,
        })
    }

    render() {
        return (
            <div className="wrap-card">
                <Row gutter={10}>
                    <Col md={5}>
                        {this.imgList[0]}
                    </Col>
                    <Col md={5}>
                        {this.imgList[1]}
                    </Col>
                    <Col md={5}>
                        {this.imgList[2]}
                    </Col>
                    <Col md={5}>
                        {this.imgList[3]}
                    </Col>
                    <Col md={4}>
                        {this.imgList[4]}
                    </Col>

                    <Modal width={350} visible={this.state.visible} onCancel={()=>{
                        this.setState({
                            visible: false,
                        })
                     }}
                    footer={null}>
                        {<img src={this.state.currentImg} alt="" style={{width: 300}}/>}
                    </Modal>
                </Row>
            </div>
        )
    }
}