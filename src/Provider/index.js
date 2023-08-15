import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

export const ReactQueryProvider = ({
    children
}) => {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}