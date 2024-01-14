import { FallbackProps } from "react-error-boundary";

export const FallbackComponent = ({ error, resetErrorBoundary }: FallbackProps) => {
    return (
        <div role="alert" className="w-fit px-4 py-2 bg-red-50 text-center text-red-500 font-medium text-sm">
            <p>COMPONENT RENDERING ERROR</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
};