import React from 'react';

import { Layout } from 'antd';

//im portamos tambien el fichero de sass
import "./LayoutBasic.scss"; //a continuacion lo creamos en Layouts

export default function LayoutBasic(props){
    const {children} = props;
    const {Content, Footer} = Layout;

    return(
        <Layout>
            <h2>Menu...</h2>
            <Layout>
                <Content>{children}</Content>
                <Footer>Footer: Elmer GArcia</Footer>
            </Layout>
        </Layout>
    );
}

