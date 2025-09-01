import { useState } from 'react';

function LikeButton() {

    const [isLiked, setIsLiked] = useState(false);

    function handleLikeButton() {
        console.log("Like Button is triggered");
        let newLikeState = !isLiked;
        setIsLiked(newLikeState);
    }


    return (
        <div>
            <div>
                <i className={isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"} onClick={handleLikeButton}></i>
            </div>
        </div>
    )
}

export default LikeButton;