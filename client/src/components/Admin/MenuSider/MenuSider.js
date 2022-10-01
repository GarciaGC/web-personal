import React from "react";
import { Link } from "react-router-dom";
import {Layout, Menu} from 'antd';
import {HomeOutlined, MenuUnfoldOutlined} from '@ant-design/icons';

import './MenuSider.scss';
import MenuItem from "antd/lib/menu/MenuItem";

export default function MenuSiderder(props){
    const {menuCollapsed} = props;
    const {Sider} = Layout; 
    return (
        <Sider className="admin-sider" collapsed={menuCollapsed}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1">
                    <Link to={"/admin"}>
                        <HomeOutlined  type="home"/>
                        <span className="nav-text">Home</span>
                    </Link>
                </Menu.Item>
                <MenuItem key="2">
                    <Link to="/admin/menu-web">
                        <MenuUnfoldOutlined type="menu"/>
                        <span className="nav-text">Menu Web</span>
                    </Link>
                </MenuItem>
            </Menu>
        </Sider>
    );
}