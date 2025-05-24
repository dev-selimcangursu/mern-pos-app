import React from "react";
import { Space, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "Ürün Görseli",
    dataIndex: "image",
    key: "image",
    render: (url) => <img src={url} alt="Ürün" style={{ width: 50 }} />,
  },
  {
    title: "Ürün Adı",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Kategori",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Ürün Adeti",
    dataIndex: "count",
    key: "count",
    render:(data)=> <div>
        <button>-</button> {data} <button>+</button>
    </div>
  },
  {
    title: "Toplam Fiyat",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "İşlem",
    key: "action",
    render: () => (
      <Space>
        <DeleteOutlined style={{ color: "red" }} />
      </Space>
    ),
  },
];

const TableUI = ({ data }) => {
  return <Table columns={columns} dataSource={data} rowKey="key" />;
};

export default TableUI;
