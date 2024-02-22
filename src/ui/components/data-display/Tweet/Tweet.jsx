import styles from "./Tweet.module.css"
import { DataService } from "../../../../data/services/DateService"

export default function Tweet({ tweet }) {
    const { user } = tweet;
    return (
        <div className={styles['tweet-container']}>
            <img src={user.picture} alt={user.name} className={styles['avatar']} />
            <div className={styles['user']} >
                <span className={styles['user-name']}>{user.name}</span>{" "}
                <span className={styles['user-username']}>@{user.username}</span>
                <span className={styles['date']}> - há {DataService.relativeTime(tweet.date)}</span>
            </div>
            <div className={styles['tweet-text']} >{tweet.text}</div>
        </div>
    )
}