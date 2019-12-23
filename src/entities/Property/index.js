import { instance } from '../../apiClient'

const endpoint = 'properties';

const service = {
    get: ({ id } = {}) => {
        
        let params = '';
        if (id) {
            const parsedParam = parseInt(id, 10);

            if (isNaN(parsedParam) || parsedParam < 0) {
                throw new Error('id must be an unsigned integer');
            } else {
                params = params.concat(`/${parsedParam}`);
            }
        }

        return instance.get(`${endpoint}${params}`)   
    },
}
export {
    service,
}