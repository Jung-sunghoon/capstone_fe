import React, { useEffect, useState } from "react";
import { List } from "antd";
import "./board.css";
import ProjectCard from "./ProjectCard";
import Search from "./Search";
import Filter from "./Filter";

// 프로젝트 데이터의 타입 정의
interface ProjectData {
  projectTitle: string; // title을 projectTitle로 변경
  description: string; // content를 description으로 변경
  readCnt: number;
  likes: number;
  generateDate: string; // createdAt를 generateDate로 변경
  status: "진행 중" | "완료";
  // projectId: number; // 새로운 필드 projectId 추가
  // creatorId: string; // 새로운 필드 creatorId 추가
  // recruitmentStatus: string; // 새로운 필드 recruitmentStatus 추가
  // recruitmentCount: number; // 새로운 필드 recruitmentCount 추가
  // acceptedID: string; // 새로운 필드 acceptedID 추가
}

// 가상의 프로젝트 데이터
const data: ProjectData[] = [
  {
    projectTitle: "프로젝트 제목1",
    description: "프로젝트 내용1",
    readCnt: 100,
    likes: 20,
    generateDate: "2023-09-01", // 날짜 형식 변경
    status: "완료",
  },
  {
    projectTitle: "프로젝트 제목2",
    description: "프로젝트 내용2",
    readCnt: 200,
    likes: 15,
    generateDate: "2023-09-02", // 날짜 형식 변경
    status: "진행 중",
  },
  {
    projectTitle: "프로젝트 제목3",
    description: "프로젝트 내용3",
    readCnt: 300,
    likes: 30,
    generateDate: "2023-09-03", // 날짜 형식 변경
    status: "진행 중",
  },
  {
    projectTitle: "프로젝트 제목4",
    description: "프로젝트 내용4",
    readCnt: 400,
    likes: 10,
    generateDate: "2023-09-04", // 날짜 형식 변경
    status: "완료",
  },
];

const Board: React.FC = () => {
  // 검색어 상태를 저장하는 상태 변수
  const [searchText, setSearchText] = useState<string>("");
  // 검색 및 정렬 결과 데이터를 저장하는 상태 변수
  const [filteredData, setFilteredData] = useState<ProjectData[]>(data);
  // 검색어 입력 필드를 표시할지 여부를 저장하는 상태 변수
  const [searchVisible, setSearchVisible] = useState<boolean>(false);
  // 정렬 옵션을 저장하는 상태 변수
  const [sortOption, setSortOption] = useState<string>("");
  // 현재 선택된 상태(진행 중 또는 완료)를 저장하는 상태 변수
  const [currentStatus, setCurrentStatus] = useState<"진행 중" | "완료">(
    "진행 중"
  );

  // 검색어 입력 핸들러 함수
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
    latest: (a, b) => {
      const dateA = new Date(a.generateDate);
      const dateB = new Date(b.generateDate);
      return dateB.getTime() - dateA.getTime();
    },
    popular: (a, b) => b.readCnt - a.readCnt,
    likes: (a, b) => b.likes - a.likes,
  };

  // 검색 및 정렬 수행 함수
  const performSearchAndSort = () => {
    // 검색어를 기반으로 데이터 필터링
    let filtered = data
      .filter((item) => item.status === currentStatus) // 현재 상태에 따라 필터링
      .filter((item) =>
        item.projectTitle.toLowerCase().includes(searchText.toLowerCase())
      );

    // 정렬 옵션에 따라 데이터 정렬
    if (sortOption && sortFunctions[sortOption]) {
      filtered.sort(sortFunctions[sortOption]);
    }

    // 필터링 및 정렬된 데이터를 상태 변수에 저장
    setFilteredData(filtered);
  };

  // 검색 버튼 클릭 핸들러 함수
  const handleSearchButtonClick = () => {
    if (searchText.trim() === "") {
      setSearchVisible(!searchVisible);
    }
    performSearchAndSort();
  };

  // 정렬 옵션 메뉴 클릭 핸들러 함수
  const handleMenuClick = (filterOption: string) => {
    setSortOption(filterOption);
    performSearchAndSort();
  };

  // "진행 중" 버튼 클릭 핸들러 함수
  const handleInProgressClick = () => {
    setCurrentStatus("진행 중");
    performSearchAndSort();
  };

  // "완료" 버튼 클릭 핸들러 함수
  const handleCompletedClick = () => {
    setCurrentStatus("완료");
    performSearchAndSort();
  };

  // 컴포넌트가 처음 렌더링될 때 초기 데이터 설정
  useEffect(() => {
    performSearchAndSort();
  }, [sortOption, currentStatus, searchText]);

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
              {/* 필터 컴포넌트를 렌더링하고 현재 상태(진행 중 또는 완료)를 전달 */}
              <Filter
                onFilter={handleMenuClick}
                currentStatus={currentStatus}
              />
            </li>
            <li
              // "진행 중" 버튼 클릭 시 현재 상태가 "진행 중"일 경우 "active" 클래스 추가
              onClick={handleInProgressClick}
              className={`pr__board ${
                currentStatus === "진행 중" ? "active" : ""
              }`}
            >
              진행 중
            </li>
            <li
              // "완료" 버튼 클릭 시 현재 상태가 "완료"일 경우 "active" 클래스 추가
              onClick={handleCompletedClick}
              className={`co__board ${
                currentStatus === "완료" ? "active" : ""
              }`}
            >
              완료
            </li>
          </ul>

          {/* 검색 컴포넌트를 렌더링하고 검색어 입력 핸들러 함수를 전달 */}
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
