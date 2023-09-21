import { Card, List, AutoComplete, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

const renderTitle = (title: string) => (
  <span>
    {title}
    <a
      style={{ float: "right" }}
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      more
    </a>
  </span>
);

const renderItem = (title: string, count: number) => ({
  value: title,
  label: (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {title}
      <span>
        <UserOutlined /> {count}
      </span>
    </div>
  ),
});

const options = [
  {
    label: renderTitle("Libraries"),
    options: [
      renderItem("AntDesign", 10000),
      renderItem("AntDesign UI", 10600),
    ],
  },
  {
    label: renderTitle("Solutions"),
    options: [
      renderItem("AntDesign UI FAQ", 60100),
      renderItem("AntDesign FAQ", 30010),
    ],
  },
  {
    label: renderTitle("Articles"),
    options: [renderItem("AntDesign design language", 100000)],
  },
];

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
      <div
        style={{
          textAlign: "right",
        }}
      >
        <AutoComplete
          popupClassName="certain-category-search-dropdown"
          popupMatchSelectWidth={500}
          style={{ width: 250, marginTop: "10px" }}
          options={options}
          size="large"
        >
          <Input.Search size="large" placeholder="input here" />
        </AutoComplete>
      </div>
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
