import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import {
  Avatar,
  Box,
  Fab,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DateRangeIcon from "@mui/icons-material/DateRange";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  // justifyContent:"center"
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%-25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://cdn.pixabay.com/photo/2012/04/16/11/39/plumber-35611_960_720.png"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              JohnCena
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind"
            variant="standard"
          />
          {/* stack is a flexbox */}
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>

          <ButtonGroup
          fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button   sx={{width:"100px"}} >
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
