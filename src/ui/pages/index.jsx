import { useIndex } from "../../data/hooks/pages/useIndex.page"
import styles from "../styles/pages/index.module.css"
import TextInput from "../components/inputs/TextInput/TextInput";
import Tweet from "../components/data-display/Tweet/Tweet";

const tweet = {
    date: "há 5 dias",
    text: "Meu primeiro tweet",
    user: {
        name: "Luiz Fábio Santana",
        username: "SantFabio",
        picture: "https://github.com/SantFabio.png"
    },
}

export default function Index() {
    const { user } = useIndex();
    return (
        <div>
            <h1 className={styles["page-title"]}>CloneTweet</h1>
            <div className={styles["tweet-container"]}>
                <img className={styles['avatar']}
                    src={user.picture}
                    alt={user.name} />
                <TextInput />
            </div>
            <div className={styles['button-container']} >
                <div>0 / 150</div>
                <button className={styles['post-button']}>Tweetar</button>
            </div>
            <ul className={styles['tweet-list']}>
                <li className={styles["tweet-list-item"]}>
                    <Tweet tweet={tweet} />
                </li>
                <li className={styles["tweet-list-item"]}>
                    <Tweet tweet={tweet} />
                </li>
                <li className={styles["tweet-list-item"]}>
                    <Tweet tweet={tweet} />
                </li>
            </ul>
        </div>
    )
}