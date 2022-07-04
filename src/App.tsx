import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import './global.css'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Rellyson"
            content="lorem ipassssssssssssssssssssssssssssssssssssssum dolor sit amet, consectetur adip"
          />
          <Post
            author="Rellyson"
            content="lorem ipsum dolor sit amet, consectetur adip"
          />
          <Post
            author="Rellyson"
            content="lorem ipsum dolor sit amet, consectetur adip"
          />
          <Post
            author="Rellyson"
            content="lorem ipsum dolor sit amet, consectetur adip"
          />
        </main>
      </div>
    </>
  )
}