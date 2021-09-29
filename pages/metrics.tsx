import { setupAPIClient } from "../services/api";
import { withSSRAuth } from "../utils/utilSSRAuth";
import decode from 'jwt-decode';

export default function Metrics() {

    return (
        <>
            <h1>Metrics</h1>            
        </>
    )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
    const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get('/me');

    return {
        props: {}
    }
}, {
    permissions: ['metrics.lista'],
    roles: ['administrator'],
})