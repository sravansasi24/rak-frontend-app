"use client"; 

import React from 'react';
import { Typography,Image } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';

import Logo from '../assets/rakbanklogos.png'

const SuccessMessage = () => (
  <div style={{ textAlign: 'center', padding: '50px' }}>
  {/* Logo at the top */}
  <div style={{ textAlign: 'center', marginBottom: '20px' }}>
  <Image
        src={Logo}
        width={240} 
        height={180} 
        preview={false}
      />
  </div>

   {/* Bold "Successfully Submitted!" message */}
   <Typography.Title level={3} style={{ fontWeight: 'bold', color:'#52c41a', fontSize: 28 }}>
    Successfully Submitted!
  </Typography.Title>

  {/* Check Icon centered */}
  <div 
  style={{
    display: 'flex',            
    justifyContent: 'center',   
    alignItems: 'center',       
    height: 200
  }}
  >
  <CheckCircleTwoTone twoToneColor={['#52c41a', '#FFFF']} style={{ fontSize: '128px'  }} />
</div>

  {/* Additional text */}
  <Typography.Text style={{  color:'#52c41a', fontSize: 12 }}>
    Our representative will get in touch with you shortly.
  </Typography.Text>
</div>
);

export default SuccessMessage;