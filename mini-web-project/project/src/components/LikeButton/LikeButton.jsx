
function LikeButton({isLiked, likesCount, onToggle}) {

  return (
    <>
     <button onClick={onToggle}>{isLiked ? "❤": "🤍"}{likesCount}</button>
    </>
  )
}

export default LikeButton
