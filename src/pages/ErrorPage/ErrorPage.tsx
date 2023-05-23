import { useRouteError, isRouteErrorResponse  } from 'react-router-dom';

export const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    if (isRouteErrorResponse(error)) {
        return (
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error?.statusText || error?.data}</i>
                </p>
            </div>
        );
    }

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
        </div>
    );
};