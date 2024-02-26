import { Layout, Menu } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import React, { FC, ReactNode } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './index.module.scss';

type Props = {
  children?: ReactNode[];
};

const items = [
  { key: 0, label: <Link to={'/posts'}>Posts</Link> },
  { key: 1, label: <Link to={'/albums'}>Albums</Link> },
  { key: 2, label: <Link to={'/todos'}>Todos</Link> }
];

const CusomLayout: FC<Props> = () => {
  return (
    <Layout className={styles.root}>
      <Header className={styles.header}>
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['0']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content className={styles.main}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>Footer</Footer>
    </Layout>
  );
};

export default CusomLayout;
