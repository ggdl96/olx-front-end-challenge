import { useEffect, useState } from 'react';

function useAsyncFetch(service, params = {}) {
    const [response, setResponse] = useState({ isFetching: false, data: null, error: null });

    useEffect(() => {
        async function handleFetch() {
            try {
                setResponse({...response, isFetching: true});

                const endpointResponse = await service.get(params);
                if (!endpointResponse) {
                    throw new Error('response is not defined');
                }

                setResponse({
                    ...response,
                    isFetching: false,
                    data: !params.id ? endpointResponse.data.content : endpointResponse.data,
                });
            }
            catch (exception) {
                setResponse({...response, isFetching: false, error: {}});

            }
        }

        if (!response.isFetching && !response.data && !response.error) {
            handleFetch();
        }
    }, [response, service, params]);

    return [response];
}

export { useAsyncFetch };
