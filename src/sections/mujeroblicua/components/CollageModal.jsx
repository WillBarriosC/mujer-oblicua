import { CardMedia, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

const CollageModal = ({ open, onClose, image }) => (
  <Dialog open={open} onClose={onClose}>
    <CardMedia component="img" sx={{ height: "auto" }} image={image} />
    <IconButton
      aria-label="close"
      onClick={onClose}
      sx={(theme) => ({
        position: "absolute",
        right: 8,
        top: 8,
        color: theme.palette.grey[500],
      })}
    >
      <CloseIcon />
    </IconButton>
  </Dialog>
);

export default CollageModal;

CollageModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};
