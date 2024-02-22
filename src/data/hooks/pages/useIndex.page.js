import { useState, useMemo } from "react";
import { mutate } from "swr";
import { useApi } from "../useApi";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
    const maxTextLength = 150,
        user = {
            name: "Luiz Fábio Santana",
            username: "SantFabio",
            picture: "https://github.com/SantFabio.png",
        },
        [text, setText] = useState(''),
        tweetslist = useApi("tweets").data,
        sortedTweetList = useMemo(() => {
            return (tweetslist || []).sort((a, b) =>
                a.data.date < b.data.date ? 1 : -1
            );
        }, [tweetslist]);

    function onTextChange(event) {
        const text = event.target.value;
        if (text.length <= maxTextLength) {
            setText(text);
        }
    }

    async function sendTweet() {
        await ApiService.post("tweets", {
            data: {
                user,
                text,
                date: new Date().toISOString()
            }
        })
        setText('');
        mutate("tweets")
    }

    return {
        user, 
        text, 
        onTextChange,
        maxTextLength,
        sendTweet,
        sortedTweetList
    };
}