import Swal from 'sweetalert2'
import { deleteNode } from '../../store/slices/nodes/thunks'

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
    })
}

