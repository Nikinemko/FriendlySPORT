import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function Registration() {
  return (
    <Layout>
      <Head>
        <title>Registration</title>
      </Head>
      <h1>Registration page</h1>
      <form action="/">
        <label for="nickname">Nickname:</label>
        <input type="text" id="nickname" name="nickname" />
        <br />
        <label for="password">Password</label>
        <input type="password" id="password" name="password" />
        <br />
        <label for="c-password">Confirm password</label>
        <input type="password" id="c-password" name="c-password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </Layout>
  );
}
