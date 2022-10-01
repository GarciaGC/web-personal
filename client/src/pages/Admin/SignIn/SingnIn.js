import React from 'react';
import {Layout, Tabs} from 'antd'; 
import './SignIn.scss';
import Logo from  '../../../assets/img/png/logo-white copia.png';
import RegisterForm from '../../../components/Admin/RegisterForm';

export default function Signin(){
    const {Content} = Layout;

    return(
        <Layout className='sign-in'>
            <Content className='sign-in__content'>
                <h1 className='sign-in__content-logo'>
                    <img src={Logo} alt="Elmer Garcia Cortez"/>
                </h1>

                <div className='sign-in__content-tabs'>
                <Tabs type="card">
                    <Tabs.TabPane tab={<span>Entar</span>} key="1">
                        Entrar
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<span>Nuevo usuario</span>} key="2">
                        <RegisterForm/>
                    </Tabs.TabPane>
                </Tabs>                    
                </div>
            </Content>
        </Layout>
    );
}