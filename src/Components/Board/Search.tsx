import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./search.css";

interface SearchProps {
  onSearch: (text: string, isSearchVisible: boolean) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchVisible, setSearchVisible] = useState<boolean>(false);

  const handleSearch = (text: string) => {
    setSearchText(text);
    if (text.trim() === "") {
      setSearchVisible(false);
    } else {
      setSearchVisible(true);
    }
    onSearch(text, true); // 검색어를 입력할 때 검색 수행
  };

  const handleSearchButtonClick = () => {
    setSearchVisible(!searchVisible); // 검색 버튼을 누를 때 searchVisible을 토글합니다.
    if (searchVisible && searchText.trim() !== "") {
      onSearch(searchText, true); // 검색 입력 창이 나타날 때 검색 수행
    }
  };

  return (
    <div>
      <form className="srh__form" onSubmit={(e) => e.preventDefault()}>
        <Input
          style={{ display: searchVisible ? "block" : "none" }}
          type="text"
          placeholder="프로젝트 검색"
          value={searchText}
          className="srh__input"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button
          type="button"
          className="srh__btn"
          onClick={handleSearchButtonClick}
        >
          <SearchOutlined />
        </button>
      </form>
    </div>
  );
};

export default Search;
