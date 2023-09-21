import React, { useState } from "react";
import { Card, List, Input } from "antd";

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
  const [searchText, setSearchText] = useState(""); // 검색어 상태

  // 검색어 입력 시 상태 업데이트
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  // 검색어와 일치하는 프로젝트 필터링
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <div>
        <div>
          <Input
            type="text"
            placeholder="프로젝트 검색"
            value={searchText}
            className="B__search__btn"
            onChange={handleSearch}
          />
        </div>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={filteredData}
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
