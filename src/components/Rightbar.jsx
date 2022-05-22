import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';


const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={ { display: { xs: "none", sm: "block" }} } >
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2} >
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2018/03/18/18/43/guy-3237859_960_720.png" />
          <Avatar alt="Travis Howard" src="https://cdn.pixabay.com/photo/2014/04/05/11/29/people-315907_960_720.jpg" />
          <Avatar alt="Cindy Baker" src="https://cdn.pixabay.com/photo/2014/03/12/18/43/boys-286243_960_720.jpg" />
          <Avatar alt="Agnes Walker" src="https://cdn.pixabay.com/photo/2016/06/13/11/22/boy-1454054_960_720.png" />
          <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2018/03/18/18/43/guy-3237859_960_720.png" />
          <Avatar alt="Travis Howard" src="https://cdn.pixabay.com/photo/2014/04/05/11/29/people-315907_960_720.jpg" />
          <Avatar alt="Cindy Baker" src="https://cdn.pixabay.com/photo/2014/03/12/18/43/boys-286243_960_720.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>


        <Typography variant="h6" fontWeight={100} >
          Latest Posts
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={10}>
          <ImageListItem>
            <img
            src="https://cdn.pixabay.com/photo/2016/11/23/15/32/pedestrians-1853552_960_720.jpg"
            alt="POST PHOTO"
            />
          </ImageListItem>
          <ImageListItem>
            <img
            src="https://cdn.pixabay.com/photo/2016/11/23/15/32/pedestrians-1853552_960_720.jpg"
            alt="POST PHOTO"
            />
          </ImageListItem>
          <ImageListItem>
            <img
            src="https://cdn.pixabay.com/photo/2016/11/23/15/32/pedestrians-1853552_960_720.jpg"
            alt="POST PHOTO"
            />
          </ImageListItem>

        </ImageList>


        <Typography variant="h6" fontWeight={100} mt={2} >
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>


      </Box>
    </Box>
  );
};

export default Rightbar;
