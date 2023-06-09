import { useEffect, useState } from "react"
import { getNewsAPI } from "../../../services/NewsAPI/getNewsAPI"
type ReleventCardData = {
  title:string,
  link:string,
  pubDate:string,
};
const INITIAL_VALUES:ReleventCardData = {
  title:'',
  link:'',
  pubDate:'',
};

export const NewsCard = (props) => {
  const [newsAPIResponse, setNewsAPIResponse] = useState<ReleventCardData>(INITIAL_VALUES);
  
  const fetchNewsData = async () => {
    const apiData = await getNewsAPI();
    const desireResult = apiData?.results[2] as ReleventCardData
    setNewsAPIResponse(desireResult)
  };
  
  useEffect(() => {
    fetchNewsData()
  },[]);
  
  const {title,link,pubDate} = newsAPIResponse;
  
  return (
    <div className="text-center">
      <div>
        <h3 className="title">{title}</h3>
        <a href={link} target="_blank">Link to Article</a>
        <h2>Published Dates {pubDate}</h2>
      </div>
    </div>
  )
}