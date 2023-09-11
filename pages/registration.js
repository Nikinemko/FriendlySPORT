import Head from "next/head";
import Layout from "../components/layout";
import dynamic from "next/dynamic";
import DataForm from "../components/DataForm";
const LeafletMap = dynamic(() => import("../components/LeafletMap"), {
  ssr: false,
});

export default function Registration() {
  return (
    <Layout>
      <Head>
        <title>Registration</title>
      </Head>
      <div>
        <h1>Your Page</h1>
        <DataForm />
      </div>
      <LeafletMap />
    </Layout>
  );
}
