import {KZ_IMG_PATH, NFACTORIAL_IMG_PATH} from '../images'
import Tweet from './Tweet'

export default function TweetsList(){
    const tweets = [

        {
            author: 'Free KZ today',
            authorUserName: '@kz',
            img: KZ_IMG_PATH,
            content: 'UPDATE: Alibek says he has not considered becoming finance minister again',
            replies: 200,
            retweets: 1000,
            likes: 500
    
        },
        {
            author: 'nfactorial',
            authorUserName: '@nfactorial',
            img: NFACTORIAL_IMG_PATH,
            content: 'Data analytics starts today!',
            replies: 20000,
            retweets: 100000,
            likes: 50770
    
        },

        {
            author: 'nfactorial',
            authorUserName: '@nfactorial',
            img: NFACTORIAL_IMG_PATH,
            content: 'BlackFriday! buy all courses today',
            replies: 20000,
            retweets: 100000,
            likes: 50770
    
        },
        {
            author: 'nfactorial',
            authorUserName: '@nfactorial',
            img: NFACTORIAL_IMG_PATH,
            content: 'BlackFriday! buy all courses today',
            replies: 50,
            retweets: 23,
            likes: 570
    
        },
        {
            author: 'nfactorial',
            authorUserName: '@nfactorial',
            img: NFACTORIAL_IMG_PATH,
            content: 'BlackFriday! buy all courses today',
            replies: 34343,
            retweets: 32323,
            likes: 370
    
        }
    ]
    
    return tweets.map((tweet, index)=><Tweet{...tweet} key={index}/>)
    
}