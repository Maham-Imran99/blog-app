import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { useMutation } from '@apollo/client';
import { DELETE_ARTICLE } from '../../graphQl/article/mutations';
import { DeleteDialogProps } from '../../interfaces';
import { CANCEL_BUTTON, DELETE_BOX_TEXT, DELETE_BUTTON } from '../../constants/constantText';

const DeleteDialog: React.FC<DeleteDialogProps> = ({ open, onClose, articleId }) => {
  const token = localStorage.getItem('token') || '';

  const [deleteArticle] = useMutation(DELETE_ARTICLE, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`
      }
    },
    variables: {
      input: articleId
    },
    onCompleted: () => {
      onClose();
    }
  })

  const handleDelete = () => {
    deleteArticle();
  }

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">

      <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>

      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {DELETE_BOX_TEXT}
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>{CANCEL_BUTTON}</Button>
        <Button onClick={handleDelete} color="error" autoFocus>
          {DELETE_BUTTON}
        </Button>
      </DialogActions>

    </Dialog>
  );
};

export default DeleteDialog;
