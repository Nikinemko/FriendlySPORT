import Head from "next/head";
import { useState } from "react";
import Layout from "../components/layout";
import dynamic from "next/dynamic";
import DataForm from "../components/DataForm";
const LeafletMap = dynamic(() => import("../components/LeafletMap"), {
  ssr: false,
});

export default function Registration() {
  const [data, setData] = useState("");
  const handleDataChange = (newData) => {
    setData(newData);
    console.log("Data changed", data);
  };
  return (
    <Layout>
      <Head>
        <title>Registration</title>
      </Head>
      <DataForm data={data} />
      <LeafletMap getCoordinates onDataChange={handleDataChange} />
    </Layout>
  );
}
