import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { CircularProgress, ListItemIcon, MenuItem } from "@mui/material";
import { IconTrash } from "@tabler/icons-react";
import Image from "next/image";
import { CleaningServiceService } from "@services/cleaningService.service";
import { useToast } from "@/app/hooks/useToast";

const DeleteCleaningServiceDialog = ({
  closeMenu,
  singleItemData,
  refresh,
}) => {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const toast = useToast();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    closeMenu();
  };

  const deleteCleaningService = () => {
    setIsLoading(true);
    CleaningServiceService.remove(singleItemData._id)
      .then((_) => {
        toast("success", "you have successfully deleted this item");
        refresh();
        handleClose();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <MenuItem
        onClick={() => {
          handleClickOpen();
        }}
      >
        <ListItemIcon>
          <IconTrash width={18} />
        </ListItemIcon>
        Delete
      </MenuItem>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Image
          src="/images/backgrounds/top-error-shape.png"
          alt="img"
          className="top-img"
          width={59}
          height={81}
        />
        <div className="pr-4 pt-4 pb-2">
          <DialogTitle id="alert-dialog-title">
            Are you sure!
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              When you click on Delete this item will be deleted and can&ldquo;t be
              restored.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button disabled={isLoading} color="error" onClick={deleteCleaningService}>
              {isLoading ? (
                <CircularProgress size={30} color="error" />
              ) : (
                "Delete"
              )}
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </>
  );
};

export default DeleteCleaningServiceDialog;
