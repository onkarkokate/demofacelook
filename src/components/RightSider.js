import React from 'react';
import 'antd/dist/antd.css'
import { Avatar,Space,Typography} from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { Text } = Typography;


const RightSider=()=>{
    const styles={
        background:{
            backgroundColor:'#f0f2f5',
            overflowY: 'scroll',
            maxHeight: '100vh',
        },
       
    }

    return(
     <div style={styles.background}>
          <div style={{marginTop:20,marginBottom:20,fontWeight:'bold'}}><Space direction="horizontal"><Avatar size={45} icon={<UserOutlined />} />Name</Space></div>
          <div style={{marginTop:20,marginBottom:20,fontWeight:'bold'}}><Space direction="horizontal"><Avatar size={45} icon={<UserOutlined />} />Name</Space></div>
          <div style={{marginTop:20,marginBottom:20,fontWeight:'bold'}}><Space direction="horizontal"><Avatar size={45} icon={<UserOutlined />} />Name</Space></div>
          <div style={{marginTop:20,marginBottom:20,fontWeight:'bold'}}><Space direction="horizontal"><Avatar size={45} icon={<UserOutlined />} />Name</Space></div>
          <div style={{marginTop:20,marginBottom:20,fontWeight:'bold'}}><Space direction="horizontal"><Avatar size={45} icon={<UserOutlined />} />Name</Space></div>
          <div style={{marginTop:20,marginBottom:20,fontWeight:'bold'}}><Space direction="horizontal"><Avatar size={45} icon={<UserOutlined />} />Name</Space></div>
          <div style={{marginTop:20,marginBottom:20,fontWeight:'bold'}}><Space direction="horizontal"><Avatar size={45} icon={<UserOutlined />} />Name</Space></div>
          <div style={{marginTop:20,marginBottom:20,fontWeight:'bold'}}><Space direction="horizontal"><Avatar size={45} icon={<UserOutlined />} />Name</Space></div>
          <div style={{marginTop:20,marginBottom:20,fontWeight:'bold'}}><Space direction="horizontal"><Avatar size={45} icon={<UserOutlined />} />Name</Space></div>
          <div style={{marginTop:20,marginBottom:20,fontWeight:'bold'}}><Space direction="horizontal"><Avatar size={45} icon={<UserOutlined />} />Name</Space></div>
        
         </div>




    );
}
export default RightSider;