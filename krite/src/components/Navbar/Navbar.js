import React from "react";
import "./Navbar.css";
import { Button, Dropdown, Space } from "antd";
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];
const Navbar = () => (
  <div className="drop">
    <div className="drop-1">
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
      >
        <Button>All Brands</Button>
      </Dropdown>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
        <Button>Desk</Button>
      </Dropdown>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomRight"
      >
        <Button>Tags</Button>
      </Dropdown>
    </div>
    <div className="drop-2">
      <Dropdown
        menu={{
          items,
        }}
        placement="topLeft"
      >
        <Button>Meetings</Button>
      </Dropdown>
      <Dropdown
        menu={{
          items,
        }}
        placement="top"
      >
        <Button>Import/Export</Button>
      </Dropdown>
    </div>
  </div>
);
export default Navbar;
