import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react';

const Likes = ({ card, user }) => {
  if (card?.likes.length > 0) {
    return card.likes.find(like => like === user?.uid) ? (
      <>
        <FavoriteIcon fontSize='large' />
        &nbsp;{card.likes.length}
      </>
    ) : (
      <>
        <FavoriteBorderIcon fontSize='large' />
        &nbsp;{card.likes.length}
      </>
    );
  }

  return (
    <>
      <FavoriteBorderIcon fontSize='large' />
      &nbsp;0
    </>
  );
};

export default Likes;
