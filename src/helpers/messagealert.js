import swal from 'sweetalert';

const showMessage = (title, message, status) => {
    return swal(title, message, status);
}


export default showMessage;