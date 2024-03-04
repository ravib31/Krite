import React, { useEffect, useState } from "react";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  ProductOutlined,
  FolderOutlined,
} from "@ant-design/icons";
import { Input, Layout, Menu, theme, Pagination, Spin } from "antd";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const { Header, Content, Sider } = Layout;

const items2 = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  ProductOutlined,
  FolderOutlined,
  FolderOutlined,
  FolderOutlined,
  FolderOutlined,
  FolderOutlined,
].map((icon, index) => {
  const key = `Teams${index + 1}`;
  return {
    key,
    icon: React.createElement(icon),
    label: `Marketing ${key}`,
    children: new Array(4).fill(null).map((_, j) => ({
      key: index * 4 + j + 1,
      label: `option${index * 4 + j + 1}`,
    })),
  };
});

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const productsWithImages = data.map((product) => ({
        ...product,
        title:
          product.title.length > 20
            ? product.title.substring(0, 30) + "..."
            : product.title,
        images: Array.from(
          { length: Math.floor(Math.random() * 4) + 1 },
          (_, index) => `https://picsum.photos/200/300?random=${index}`
        ),
      }));
      setProducts(productsWithImages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setProducts(filteredProducts);
  };


  useEffect(() => {
    if (searchTerm === "") {
      fetchProducts();
    }
  }, [searchTerm]);

  

  return (
    <Layout>
      {loading ? (
        <div className="">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <Header className="navbar">
            <h1>Products</h1>
            <Input
              placeholder="Search products...."
              value={searchTerm}
              onChange={handleSearch}
            />
          </Header>

          <Layout>
            <Sider
              width={300}
              height={700}
              style={{
                background: colorBgContainer,
              }}
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                items={items2}
              />
            </Sider>
            <Layout>
              <Navbar />
              <Content>
                <div className="data">
                  <div className="data_div">
                    <p className="title">Brand</p>
                    <p className="category">Category</p>
                    <p className="description">Description</p>
                    <div className="photo">Members</div>
                    <p className="price">Tags</p>
                    <p className="rating">Next Meeting</p>
                  </div>
                </div>
                <div className="data">
                  {products.map((product) => (
                    <div className="data_div" key={product.id}>
                      <p className="title">
                        {product.title.substring(0, 20)}...
                      </p>
                      <p className="category">{product.category}</p>
                      <p className="description">
                        {product.description.substring(0, 50)}
                      </p>
                      <div className="photo">
                        {product.images.map((image, index) => (
                          <img key={index} src={image} alt="" />
                        ))}
                      </div>
                      <p className="price">Rs.{product.price}</p>
                      <p className="rating">In {product?.rating?.count} Mins</p>
                    </div>
                  ))}
                </div>
                <br />

                <br />
              </Content>
            </Layout>
          </Layout>
        </>
      )}
    </Layout>
  );
};

export default Home;
