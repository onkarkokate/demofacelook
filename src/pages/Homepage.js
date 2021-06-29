
import React from "react";
import HeaderCmp from "../components/HeaderCmp";
import {Link} from 'react-router-dom';
import {data} from '../utils/data'
import "antd/dist/antd.css";
import {
  Layout,
  Input,
  Avatar,
  Button,
  Row,
  Col,
  Typography,
  Space,
  Divider,
  Image,
  Tooltip,
} from "antd";
import LeftSider from "../components/LeftSider";
import RightSider from "../components/RightSider";
import s1 from "../images/s1.jpg";
import s from "../images/s.png";
import s0 from "../images/s0.jpg";
import s2 from "../images/s2.png";
import s2p from "../images/s2.jpg";
// import s1 from './images/s1';
// import s1 from './images/s1';
// import s1 from './images/s1';
// import s1 from './images/s1';
// import s1 from './images/s1';
// import s1 from './images/s1';
import {
  UserOutlined,
  SmileTwoTone,
  FileImageTwoTone,
  VideoCameraTwoTone,
  LikeOutlined,
  CommentOutlined,
  ArrowRightOutlined,
  HeartOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import ImageD from "../images/s7.png";
import Harry from "../images/harryPotter.jpg";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;


function Homepage() {
  const [like, setLike] = React.useState(data[0].likes);
  const [likePost, setLikePost] = React.useState(data[1].likes);
  const [likePostOne, setLikePostOne] = React.useState(data[2].likes);
 

  const styles = {
    background: {
      backgroundColor: "#f0f2f5",
      minHeight: "100vh",
    },
    header: {
      backgroundColor: "#fff",
    },
    sider: {
      width: "25%",
    },
    searchBar: {
      background: "#f0f2f5",
      borderRadius: 30,
      marginLeft: 20,
      width: 410,
      height: 45,
    },
    card: {
      borderRadius: 10,
      marginBottom: 20,
      backgroundColor: "#fff",
      padding: 10,
    },
    cardOne: {
      display: "flex",
      marginBottom: 10,
    },
    cardTwo: {
      height: 60,
    },
    cardDiv: {
      backgroundColor: "white",
      height: 72,
      alignItems: "center",
      display: "flex",
      justifyContent: "space-evenly",
    },
    col: {
      textAlign: "center",
      width: "33.33%",
      marginTop: 10,
    },
    button: {
      borderRadius: 20,
      borderWidth: 2,
      borderColor: "#e7f3ff",
      height: 40,
    },
  };

  return (
    <Layout style={styles.background}>
      <Header style={{ backgroundColor: "white" }}>
        <HeaderCmp />
      </Header>
      <Layout>
        <Sider
          style={{
            height: "100vh",
          }}
        >
          <LeftSider />
        </Sider>
        <Content style={{ overflowY: "scroll" }}>
          <div style={{ width: "100%", marginTop: 20 }}>
            <Row justify="center">
              <Col>
                <div
                  style={{
                    backgroundImage: `url(${ImageD})`,
                    backgroundSize: "cover",
                    marginLeft: 5,
                    marginRight: 5,
                    height: 160,
                    width: 110,
                    borderRadius: 10,
                  }}
                ></div>
              </Col>
              <Col>
                <div
                  style={{
                    backgroundImage: `url(${s1})`,
                    backgroundSize: "cover",
                    marginLeft: 5,
                    marginRight: 5,
                    height: 160,
                    width: 110,
                    borderRadius: 10,
                  }}
                ></div>
              </Col>
              <Col>
                <div
                  style={{
                    backgroundImage: `url(${s})`,
                    backgroundSize: "cover",
                    marginLeft: 5,
                    marginRight: 5,
                    height: 160,
                    width: 110,
                    borderRadius: 10,
                  }}
                ></div>
              </Col>
              <Col>
                <div
                  style={{
                    backgroundImage: `url(${s0})`,
                    backgroundSize: "cover",
                    marginLeft: 5,
                    marginRight: 5,
                    height: 160,
                    width: 110,
                    borderRadius: 10,
                  }}
                ></div>
              </Col>
              <Col>
                <div
                  style={{
                    backgroundImage: `url(${s2p})`,
                    backgroundSize: "cover",
                    marginLeft: 5,
                    marginRight: 5,
                    height: 160,
                    width: 110,
                    borderRadius: 10,
                  }}
                ></div>
              </Col>
            </Row>
          </div>

          <div style={{ width: 500, margin: "auto", marginTop: 20 }}>
            <div style={styles.card}>
              <div style={styles.cardOne}>
                <Avatar size={45} icon={<UserOutlined />} />
                <Input
                  bordered={false}
                  style={styles.searchBar}
                  placeholder="What's on your mind onkar?"
                />
              </div>
              <Divider style={{ margin: 0 }} />
              <div>
                <Row justify="center">
                  <Col style={styles.col}>
                    <div>
                      <VideoCameraTwoTone twoToneColor="#f02849" />
                      <Text style={{ fontWeight: "bold" }}> Live Video</Text>
                    </div>
                  </Col>
                  <Col style={styles.col}>
                    <div>
                      <FileImageTwoTone twoToneColor="#45bd62" />
                      <Text style={{ fontWeight: "bold" }}> Photo</Text>
                    </div>
                  </Col>
                  <Col style={styles.col}>
                    <div>
                      <SmileTwoTone twoToneColor="#f7b928" />
                      <Text style={{ fontWeight: "bold" }}>
                        Feeling/Activity
                      </Text>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div style={{ ...styles.card, ...styles.cardDiv }}>
              <Button style={styles.button}>
                <VideoCameraTwoTone
                  twoToneColor="#bd49b8"
                  style={{ fontSize: 18 }}
                />
                <Text style={{ color: "#216fdb", fontWeight: "bold" }}>
                  Create Room
                </Text>
              </Button>
              <Avatar size={50} src={s1} />
              <Avatar
                size={50}
                src={
                  <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
              />
              <Avatar size={50} src={Harry} />
              <Avatar size={50} src={s2} />
            </div>
            {data.map((item, index) => {
              return (
                <div
                  key={index.toString()}
                  style={{
                    backgroundColor: "white",
                    minHeight: 600,
                    borderRadius: 10,
                  }}
                >
                  <div
                    style={{ padding: "15px 15px 15px 15px", display: "flex" }}
                  >
                    <Avatar size={50} src={<Image src={item.profileImage} />} />
                    <div>
                      <Space
                        direction="vertical"
                        style={{ lineHeight: 1, marginLeft: 10 }}
                      >
                        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                        <Text>{item.time}</Text>
                      </Space>
                    </div>
                    <Button style={{marginLeft:'auto',borderRadius:20}}><Link to={`/post/${item.id}`}>View Post</Link></Button>
                  </div>

                  <div style={{ paddingLeft: 15, paddingRight: 15 }}>
                    <p>{item.description}</p>
                  </div>
                  <div
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      height: 500,
                    }}
                  ></div>
                  <div style={{ display: "flex", margin: 15 }}>
                    <Avatar.Group>
                      <Tooltip title="Likes" placement="top">
                        <Avatar
                          size={25}
                          style={{
                            backgroundColor: "#129cf6",
                          }}
                          icon={<LikeOutlined />}
                        />
                      </Tooltip>
                      <Tooltip title="Love" placement="top">
                        <Avatar
                          size={25}
                          style={{
                            backgroundColor: "#fb5b76",
                          }}
                          icon={<HeartOutlined />}
                        />
                      </Tooltip>

                      <Tooltip title="smile" placement="top">
                        <Avatar
                          size={25}
                          style={{
                            backgroundColor: "#fee76e",
                          }}
                          icon={<SmileOutlined />}
                        />
                      </Tooltip>
                    </Avatar.Group>
                  
                    <Text>{item.likes}</Text>

                    <div style={{ marginLeft: "auto" }}>
                      <Space direction="horizontal">
                        <Text>{item.comment} Comment</Text>
                        <Text>{item.share} Share</Text>
                      </Space>
                    </div>
                  </div>
                  <Divider style={{ margin: 0 }} />

                  <div
                    style={{
                      display: "flex",
                      margin: 15,
                      paddingBottom: 15,
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    <div
                      style={{ width: "33.33%" }}
                     
                    >
                      <Button   onClick={() => {
                        if(item.id===1){
                          setLike(prev => prev + 1)
                          item.likes = like + 1;
                        }
                        if(item.id===2){
                          setLikePost(prev => prev + 1)
                          item.likes = likePost + 1;
                        }
                        if(item.id===3){
                          setLikePostOne(prev => prev + 1)
                          item.likes = likePostOne + 1;
                        }

                
                      }} style={{borderWidth:0}}>
                      <Space direction="horizontal">
                        <LikeOutlined />
                        <Text>Like</Text>
                      </Space>
                      </Button>
                    </div>
                    <div style={{ width: "33.33%" }}>
                      <Space direction="horizontal">
                        <CommentOutlined />
                        <Text>Comment</Text>
                      </Space>
                    </div>
                    <div style={{ width: "33.33%" }}>
                      <Space direction="horizontal">
                        <ArrowRightOutlined />
                        <Text>Share</Text>
                      </Space>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Content>
        <Sider
          style={{
            height: "100vh",
          }}
        >
          <RightSider />
        </Sider>
      </Layout>
    </Layout>
  );
}

export default Homepage;
