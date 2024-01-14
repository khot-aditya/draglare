import { ErrorBoundaryProps } from "react-error-boundary";
import { FallbackComponent } from "./FallbackComponent";

export const errorBoundaryConfig: ErrorBoundaryProps = {
    onError(error, info) {
        console.log(error, info)
    },
    FallbackComponent
}