import React from 'react'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import { ExpandMore, Favorite, FavoriteBorder } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    Collapse,
    IconButton,
    Typography,
  } from "@mui/material";

const Post = () => {
  return (
    <div>

<Card sx={{margin:5}}>
        <CardContent>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="John Cena"
            subheader="May 20, 2022"
          />
          <CardMedia
            component="img"
            height="20%"
            image="https://cdn.pixabay.com/photo/2019/10/27/18/48/new-york-4582500_960_720.jpg"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>


    </div>
  )
}

export default Post