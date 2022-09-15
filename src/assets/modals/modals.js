import Swal from 'sweetalert2'

/* const ModalWapper = styled(Container)(({theme}) => ({
    borderRadius: '8px',
    border: '1px solid',
    borderColor: theme.palette.primary[200] + 75,
    backgroundColor: theme.palette.background.default,
})) */

export const deleteModal = (title, text) => {
    Swal.fire({
        title: `${title}`,
        text: `${text}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar'
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

