import React, { useEffect, useState } from "react";
import { List } from "antd";
import "./board.css";
import ProjectCard from "./ProjectCard";
import Search from "./Search";
import Filter from "./Filter";

// 프로젝트 데이터의 타입 정의
interface ProjectData {
  title: string;
  content: string;
  readCnt: number;
  likes: number;
  createdAt: Date;
  status: "진행 중" | "완료";
}

// 가상의 프로젝트 데이터
const data: ProjectData[] = [
  {
    title: "프로젝트 제목1",
    content: "프로젝트 내용1",
    readCnt: 100,
    likes: 20,
    createdAt: new Date("2023-09-01T10:00:00Z"),
    status: "완료",
  },
  {
    title: "프로젝트 제목2",
    content: "프로젝트 내용2",
    readCnt: 200,
    likes: 15,
    createdAt: new Date("2023-09-02T14:30:00Z"),
    status: "진행 중",
  },
  {
    title: "프로젝트 제목3",
    content: "프로젝트 내용3",
    readCnt: 300,
    likes: 30,
    createdAt: new Date("2023-09-03T09:15:00Z"),
    status: "진행 중",
  },
  {
    title: "프로젝트 제목4",
    content: "프로젝트 내용4",
    readCnt: 400,
    likes: 10,
    createdAt: new Date("2023-09-04T18:45:00Z"),
    status: "완료",
  },
];

const Board: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [filteredData, setFilteredData] = useState<ProjectData[]>(data);
  const [searchVisible, setSearchVisible] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<string>("");

  // 현재 선택한 상태를 기억하기 위한 상태
  const [currentStatus, setCurrentStatus] = useState<"진행 중" | "완료">(
    "진행 중"
  );

  // 검색어 입력 핸들러
  const handleSearch = (text: string) => {
    setSearchText(text);
    if (text.trim() !== "") {
      setSearchVisible(true);
    }
  };

  // 정렬 함수들
  const sortFunctions: Record<
    string,
    (a: ProjectData, b: ProjectData) => number
  > = {
    latest: (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
    popular: (a, b) => b.readCnt - a.readCnt,
    likes: (a, b) => b.likes - a.likes,
  };

  // 검색 및 정렬 수행 함수
  const performSearchAndSort = () => {
    let filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );

    if (sortOption && sortFunctions[sortOption]) {
      filtered.sort(sortFunctions[sortOption]);
    }

    setFilteredData(filtered);
  };

  // 검색 버튼 클릭 핸들러
  const handleSearchButtonClick = () => {
    if (searchText.trim() === "") {
      setSearchVisible(!searchVisible);
    }
    performSearchAndSort();
  };

  // 정렬 옵션 메뉴 클릭 핸들러
  const handleMenuClick = (filterOption: string) => {
    setSortOption(filterOption);
    performSearchAndSort();
  };

  // "진행 중" 버튼 클릭 핸들러
  const handleInProgressClick = () => {
    setCurrentStatus("진행 중");
    // 진행 중인 상태에서 진행 중인 프로젝트만 필터링
    const filtered = data.filter((item) => item.status === "진행 중");
    setFilteredData(filtered);
  };

  // "완료" 버튼 클릭 핸들러
  const handleCompletedClick = () => {
    setCurrentStatus("완료");
    // 완료 상태에서 완료된 프로젝트만 필터링
    const filtered = data.filter((item) => item.status === "완료");
    setFilteredData(filtered);
  };

  // 초기 렌더링 시 전체 데이터로 초기화
  useEffect(() => {
    setFilteredData(data);
  }, []);

  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <ul className="B__sort__menu">
            <li
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <Filter onFilter={handleMenuClick} />
            </li>
            <li onClick={handleInProgressClick}>진행 중</li>
            <li onClick={handleCompletedClick}>완료</li>
          </ul>

          <Search onSearch={handleSearch} />
        </div>

        {/* 카드 리스트 */}
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={filteredData}
          renderItem={(item: ProjectData) => (
            <List.Item>
              <ProjectCard projectData={item} />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Board;
