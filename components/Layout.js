// components/Layout.js

import Header from "./Header";
import NavBar from "./NavBar";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%"
};

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column"
};

const Layout = (props) => (
  <div className="Layout" style={layoutStyle}>
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>
    <NavBar />
    <div className="Content" style={contentStyle}>
      {props.children}
    </div>
  </div>
);

export default Layout;