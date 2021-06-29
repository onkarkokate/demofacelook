import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../utils/data";
import "antd/dist/antd.css";
import {
  CaretDownOutlined,
  BellOutlined,
  PlusOutlined,
  MessageOutlined,
  LikeOutlined,
  HeartOutlined,
  SmileOutlined,
  CommentOutlined,
  SearchOutlined
} from "@ant-design/icons";
import profile from "../images/profile.jpg";
import {
  Avatar,
  Row,
  Col,
  Badge,
  Typography,
  Space,
  Image,
  Button,
  Tooltip,
  Input,
  Divider
} from "antd";
const { Text } = Typography;

const PostDetails = () => {
   
  const { id } = useParams();
  const postData = data.find((item) => item.id === Number(id));
  console.log(postData);
  const [like,setLike]=React.useState(postData.likes);
  const styles = {
    divMain: {
      display: "flex",
    },
    divLeft: {
      width: "75%",
      backgroundColor: "black",
      backgroundSize: "cover",
      textAlign: "center",
    },
    divRight: {
      width: "25%",
    },
    searchBar: {
        background: "#f0f2f5",
        borderRadius: 30,
        marginLeft: 10,
        height: 45,
        width:250
      },
  };
  return (
    <div style={styles.divMain}>
      <div style={styles.divLeft}>
        <img src={postData.image} />
      </div>
      <div style={styles.divRight}>
        <Row justify="space-around" align="middle" style={{ marginTop: 10 }}>
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
        <div style={{marginTop:20,marginLeft:10,display:'flex'}}>
        <Avatar size={45} src={<Image src={postData.profileImage} />} />
        <div>
                      <Space
                        direction="vertical"
                        style={{ lineHeight: 1, marginLeft: 10 }}
                      >
                        <Text style={{ fontWeight: "bold" }}>{postData.name}</Text>
                        <Text>{postData.time}</Text>
                      </Space>
                    </div>
                    
            </div>
            <div style={{ paddingLeft: 15, paddingRight: 15,marginTop:15 }}>
                    <p>{postData.description}</p>
                  </div>
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
                    <Text>{postData.likes}</Text>

                    <div style={{ marginLeft: "auto" }}>
                      <Space direction="horizontal">
                        <Text>{postData.comment} Comment</Text>
                        <Text>{postData.share} Share</Text>
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
                      style={{ width: "50%" }}
                     
                    >
                      <Button   onClick={() => {
                        if(postData.id){
                          setLike(prev => prev + 1)
                          postData.likes = like + 1;
                        }

                
                      }} style={{borderWidth:0}}>
                      <Space direction="horizontal">
                        <LikeOutlined />
                        <Text>Like</Text>
                      </Space>
                      </Button>
                    </div>
                    <div style={{ width: "50%" }}>
                      <Space direction="horizontal">
                        <CommentOutlined />
                        <Text>Comment</Text>
                      </Space>
                    </div>
      
                   
                 
                </div>
                <div style={{marginLeft:15,position:'fixed',bottom:5}}>
        <Row align="middle">
          <Col>
            <Avatar size={50} src={profile} />
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

     

        </div>
    
     
    </div>
  );
};
export default PostDetails;
