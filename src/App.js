import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Second from './Component/link.js';
import About from './Component/About.js';

const App = () => {
    return(
      <div>       
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/link" element={<Second />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </Router>
      </div>
    )
}
export default App







                    //Swiper//

// import { Swiper, SwiperSlide } from 'swiper/react';
// import BI2 from './assets/BI2.jpg';
// import './style.css';

// // Import Swiper styles
// import 'swiper/css';

// export default () => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>
//           <h1>Slide 1</h1>
//           <img src={BI2} alt="BI2" class="img" style={{width:"400px"}}/>
//       </SwiperSlide>
//       <SwiperSlide>
//           <h1>Slide 1</h1>
//           <img src={BI2} alt="BI2" style={{width:"400px"}}/>
//       </SwiperSlide>
//       <SwiperSlide>
//           <h1>Slide 1</h1>
//           <img src={BI2} alt="BI2" style={{width:"400px"}}/>
//       </SwiperSlide>
//       <SwiperSlide>
//           <h1>Slide 4</h1>
//       </SwiperSlide>
      
//     </Swiper>
//   );
// };


        //Navbar with datagrid table

// import {
//   DesktopOutlined,
//   FileOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from '@ant-design/icons';
// import { Breadcrumb, Layout, Menu } from 'antd';
// import React, { useState } from 'react';
// import DataGridDemo from './Datatable/Datatable';
// const { Header, Content, Footer, Sider } = Layout;
// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
// const items = [
//   getItem('Option 1', '1', <PieChartOutlined />),
//   getItem('Option 2', '2', <DesktopOutlined />),
//   getItem('User', 'sub1', <UserOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />),
// ];
// const App = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   return (
//     <Layout
//       style={{
//         minHeight: '100vh',
//       }}
//     >
//       <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
//         <div className="logo" />
//         <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
//       </Sider>
//       <Layout className="site-layout">
//         <Header
//           className="site-layout-background"
//           style={{
//             padding: 0,
//           }}
//         />
//         <Content
//           style={{
//             margin: '0 16px',
//           }}
//         >
//           <Breadcrumb
//             style={{
//               margin: '16px 0',
//             }}
//           >
//             <Breadcrumb.Item>User</Breadcrumb.Item>
//             <Breadcrumb.Item>Bill</Breadcrumb.Item>
//           </Breadcrumb>
//           <div
//             className="site-layout-background"
//             style={{
//               padding: 24,
//               minHeight: 360,
//             }}
//           >
            
//             <DataGridDemo />   
//           </div>
//         </Content>
//         <Footer
//           style={{
//             textAlign: 'center',
//           }}
//         >
//           Ant Design ©2018 Created by Ant UED
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };
// export default App;
