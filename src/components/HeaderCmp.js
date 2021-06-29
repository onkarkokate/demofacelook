import React from "react";
import "antd/dist/antd.css";
import { Avatar, Input, Row, Col, Badge, Typography, Space } from "antd";
import {
  SearchOutlined,
  HomeFilled,
  YoutubeFilled,
  CaretDownOutlined,
  ShopFilled,
  UsergroupAddOutlined,
  BellOutlined,
  WalletOutlined,
  PlusOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import logo from "../images/facebookLogo.png";
import profile from "../images/profile.jpg";

const { Text } = Typography;

const HeaderCmp = () => {
  const styles = {
    header: {
      backgroundColor: "#fff",
      display: "flex",
    },
    searchBar: {
      background: "#f0f2f5",
      borderRadius: 20,
      marginLeft: 10,
      height: 35,
    },
    leftItem: {
      width: "25%",
      paddingRight: 30,
    },
    middleItem: {
      width: "50%",
    },
    rightItem: {
      width: "25%",
      paddingLeft: 30,
    },
    icons: {
      fontSize: 25,
    },
    iconColor: {
      color: "black",
    },
  };

  return (
    <div style={styles.header}>
      <div style={styles.leftItem}>
        <Row justify="space-around" align="middle">
          <Col>
            <Avatar size={50} src={logo} />
          </Col>
          <Col>
            <Input
              bordered={false}
              style={styles.searchBar}
              placeholder="Search Facebook"
              prefix={<SearchOutlined />}
            />
          </Col>
        </Row>
      </div>

      <div style={{ ...styles.middleItem, ...styles.icons }}>
        <Row justify="space-around" align="middle">
          <Col>
            <div>
              <HomeFilled />
            </div>
          </Col>
          <Col>
            <div>
              <YoutubeFilled />
            </div>
          </Col>
          <Col>
            <div>
              <ShopFilled />
            </div>
          </Col>
          <Col>
            <div>
              <UsergroupAddOutlined />
            </div>
          </Col>
          <Col>
            <div>
              <WalletOutlined />
            </div>
          </Col>
        </Row>
      </div>
      <div style={styles.rightItem}>
        <Row justify="space-around" align="middle">
          <Col>
            <div>
              <Space direction="horizontal">
                <Avatar size={42} src={profile} />
                <Text style={{ fontWeight: "bold" }}>James</Text>
              </Space>
            </div>
          </Col>
          <Col>
            <div>
              <Avatar
                size={40}
                icon={<PlusOutlined style={styles.iconColor} />}
              />
            </div>
          </Col>
          <Col>
            <div>
              <Avatar
                size={40}
                icon={<MessageOutlined style={styles.iconColor} />}
              />
            </div>
          </Col>
          <Col>
            <div>
              <Badge count={2}>
                <Avatar
                  size={40}
                  icon={<BellOutlined style={styles.iconColor} />}
                />
              </Badge>
            </div>
          </Col>
          <Col>
            <div>
              <Avatar
                size={40}
                icon={<CaretDownOutlined style={styles.iconColor} />}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HeaderCmp;
