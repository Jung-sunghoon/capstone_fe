import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

interface FilterProps {
  onFilter: (filterOption: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilter }) => {
  const handleMenuClick = (e: { key: string }) => {
    onFilter(e.key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="latest">최신순</Menu.Item>
      <Menu.Item key="popular">조회순</Menu.Item>
      <Menu.Item key="likes">좋아요순</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menu} trigger={["click"]}>
        <span>
          정렬 <DownOutlined />
        </span>
      </Dropdown>
    </div>
  );
};

export default Filter;
