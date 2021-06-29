import React from "react";
import "antd/dist/antd.css";
import { Avatar, Typography, Space } from "antd";
import { UserOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import profile from "../images/profile.jpg";
const { Text } = Typography;

const itemData = [
  {
    logo: <UsergroupAddOutlined />,
    name: "Friends",
  },
  {
    logo: <UserOutlined />,
    name: "Memories",
  },
  {
    logo: <UserOutlined />,
    name: "Group",
  },
  {
    logo: <UserOutlined />,
    name: "MarketPlace",
  },
  {
    logo: <UserOutlined />,
    name: "Watch",
  },
  {
    logo: <UserOutlined />,
    name: "Events",
  },
  {
    logo: <UserOutlined />,
    name: "Saved",
  },
  {
    logo: <UserOutlined />,
    name: "Pages",
  },
  {
    logo: <UserOutlined />,
    name: "See More",
  },
];
const LeftSider = () => {
  const styles = {
    background: {
      backgroundColor: "#f0f2f5",
      overflowY: "scroll",
      maxHeight: "100vh",
      width: 250,
    },

    divo: {
      marginTop: 20,
      marginBottom: 20,
      marginLeft:15,
    },
  };

  return (
    <div style={styles.background}>
      <div style={{ marginTop: 20 ,marginLeft:15}}>
        <Space direction="horizontal">
          <Avatar size={42} src={profile} />
          <Text style={{ fontWeight: "bold" }}>James Bond</Text>
        </Space>
      </div>
      {itemData.map((item, index) => {
        return (
          <div style={styles.divo} key={index.toString()}>
            <Space direction="horizontal">
              <Avatar size={45} icon={item.logo} />
              <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
            </Space>
          </div>
        );
      })}
    </div>
  );
};
export default LeftSider;
