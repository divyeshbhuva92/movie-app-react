import { useState } from "react";
import { ThumbUpAlt, ThumbDownAlt } from "@mui/icons-material";

export function Counter() {
  // const [state, setState] = useState(InitialValue);   <= hooks syntex
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const likePercent = (like / (like + disLike)) * 100;
  const incrementLike = () => setLike(like + 1);
  const incrementdisLike = () => setDisLike(disLike + 1);
  return (
    <div className="counter-container">
      {/* {like > 10 ? <p>you have won people's heart ❤️</p> : null} */}
      <progress
        className="counter-progress"
        max="100"
        value={Number.isNaN(likePercent) ? 0 : likePercent}
      />
      <div className="counter-btn-container">
        {/* <button onClick={() => setLike(like + 1)}> 👍 {like}</button>
            <button onClick={() => setDisLike(disLike + 1)}> 👎 {disLike}</button> */}

        <ThumbUpAlt
          color="primary"
          fontSize="small"
          onClick={incrementLike}
        ></ThumbUpAlt>
        <h4 className="like-count">{like}</h4>

        <ThumbDownAlt
          color="primary"
          fontSize="small"
          onClick={incrementdisLike}
        ></ThumbDownAlt>
        <h4 className="dislike-count">{disLike}</h4>
      </div>
    </div>
  );
}
