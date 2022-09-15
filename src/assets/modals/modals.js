import Swal from 'sweetalert2'

/* const ModalWapper = styled(Container)(({theme}) => ({
    borderRadius: '8px',
    border: '1px solid',
    borderColor: theme.palette.primary[200] + 75,
    backgroundColor: theme.palette.background.default,
})) */

export const deleteModal = ({title, text, theme}) => {
    Swal.fire({
        title: `${title}`,
        text: `${text}`,
        icon: 'warning',
        iconColor: `${theme.palette.warning.dark}`,
        showCancelButton: true,
        confirmButtonColor: `${theme.palette.secondary.main}`,
        cancelButtonColor: `${theme.palette.error.main}`,
        confirmButtonText: 'Eliminar',
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

