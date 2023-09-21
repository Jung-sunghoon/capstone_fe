import { Card, List } from "antd";

//     "projectId": 0,
//     "projectTitle": "string",
//     "description": "string",
//     "creatorId": "string",
//     "recruitmentStatus": "string",
//     "recruitmentCount": 0,
//     "generateDate": "string",
//     "acceptedID": "string"
const data = [
  {
    title: "프로젝트 제목1",
    content: "프로젝트 내용1",
    readCnt: 100,
  },
  {
    title: "프로젝트 제목2",
    content: "프로젝트 내용2",
    readCnt: 200,
  },
  {
    title: "프로젝트 제목3",
    content: "프로젝트 내용3",
    readCnt: 300,
  },
  {
    title: "프로젝트 제목4",
    content: "프로젝트 내용4",
    readCnt: 400,
  },
];

const Board = () => {
  return (
    <div>
      Board
      <div
        style={{
          margin: "0px 10px 0px 10px",
        }}
      >
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Card
                title={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>{item.title}</div>
                    <div>{item.readCnt}</div>
                  </div>
                }
              >
                {item.content}
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Board;
