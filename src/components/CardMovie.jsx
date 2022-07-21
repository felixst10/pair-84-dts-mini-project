import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";

const CardMovie = ({ propsMovies }) => {
  const urlDepanPosterPath = "https://image.tmdb.org/t/p/w200";

  return (
    <>
      <Card className="boxy">
        <Box
          className="boxy"
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <CardMedia
            component="img"
            sx={{ width: 150 }}
            image={`${urlDepanPosterPath}${propsMovies.poster_path}`}
            alt="seekor-kucing"
          ></CardMedia>
          <CardContent>
            <Typography variant="body1">{propsMovies.title}</Typography>
            <Typography variant="body1">{propsMovies.overview}</Typography>
            <Rating
              value={propsMovies.vote_average / 2}
              precision={0.1}
              readOnly
            />
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default CardMovie;
