
import React from 'react';
import { MenuUnfoldOutlined, LogoutOutlined, MenuFoldOutlined} from '@ant-design/icons';
import { Button} from 'antd';
import ElmLogo from "../../../assets/img/png/logo-white copia.png"

import './MenuTop.scss';

export default function MenuTop(props){
    const {menuCollapsed, setMenuCollapsed} = props;
    return(
        <div className='menu-top'>
            <div className='menu-top__left'>
                <img
                    className='menu-top__left-logo'
                    src={ElmLogo} //link donde se encuentra la img
                    alt="Elmer Garcia Cortez"
                />
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
            </div>
            <div className='menu-top__right'>
            <Button type="link"><LogoutOutlined /></Button>
                            
            </div>
        </div>
    )
}