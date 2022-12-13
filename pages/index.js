import Image from "next/image";
import Header from "../src/components/Header";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Page from "../components/Page";
export default function Home() {
  const sendToken = () => {
    const options = {
      method: "GET",
      url: "/api/hello",
      headers: { authorization: "Bearer TOKEN" },
    };
    console.log(options, 555);
    axios(options)
      .then((response) => {
        console.log(response.data, 444444);
      })
      .catch((error) => {
        console.log(error, 5555555);
      });
  };
  return (
    <Page title="Home">
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </main>
        <button onClick={sendToken}>call api</button>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </Page>
  );
}
