import React from "react";
import "./nav-left.less";
import MenuConfig from '../../configs/menuConfig';
import {Menu} from "antd";
import {NavLink} from "react-router-dom"

// import imgURL from "/assets/logo-ant.svg";

const {SubMenu} = Menu;

export class NavLeft extends React.Component {

    constructor(props: any) {
        super(props);
        this.state = {
            menuTreeNode: MenuConfig,
        };
    }

    state = {
        menuTreeNode: MenuConfig,
    };

    renderMenu(data: any) {
        return data.map((item: any) => {
            if (item.children) {
                return <SubMenu title={item.title} key={item.key}>
                    {this.renderMenu(item.children)}
                </SubMenu>;
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>;
        });
    };

    render() {
        const menu_widget = this.renderMenu(this.state.menuTreeNode);
        return (
            <div className="nav-left">
                <div className="logo">
                    <img src="/assets/logo-ant.svg"  alt=""/>
                    <h1>Imooc MS</h1>
                </div>
                <Menu mode={"inline"} theme={"dark"}>
                    {menu_widget}
                </Menu>
            </div>
        );
    }
}
