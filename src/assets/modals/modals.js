import Swal from 'sweetalert2'
import { deleteNode } from '../../store/slices/nodes/thunks'


/* const ModalWapper = styled(Container)(({theme}) => ({
    borderRadius: '8px',
    border: '1px solid',
    borderColor: theme.palette.primary[200] + 75,
    backgroundColor: theme.palette.background.default,
})) */

export const deleteModal = ({title, text, theme, dispatch, userId, nodeId}) => {

    Swal.fire({
        title: `${title}`,
        text: `${text}`,
        icon: 'warning',
        iconColor: `${theme.palette.warning.dark}`,
        showCancelButton: true,
        confirmButtonColor: `${theme.palette.secondary.main}`,
        cancelButtonColor: `${theme.palette.error.main}`,
        confirmButtonText: 'Eliminar',
        preConfirm: () => dispatch(deleteNode({nodeId, userId})),
        customClass: {
            confirmButton: '',
            cancelButton: '',
          }
    })/* .then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
            )
        }
    }) */
}

