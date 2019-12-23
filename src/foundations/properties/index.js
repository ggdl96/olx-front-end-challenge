const statusMapper = {
    available: 'disponible',
    rented: 'rentado',
    reserved: 'reservado',
};

function getStatus(status) {
    return statusMapper[status]
}

export { getStatus };
