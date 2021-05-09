import React from 'react';
import { Heading } from '@chakra-ui/react';

type TErrorBoundaryProps = {};
type TErrorBoundaryState = { hasError: boolean; };

export default class ErrorBoundary extends React.Component<TErrorBoundaryProps, TErrorBoundaryState> {
  constructor (props: TErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError () {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // componentDidCatch (error: Error, errorInfo: ErrorInfo) {
  //     // You can also log the error to an error reporting service
  //     logErrorToMyService(error, errorInfo);
  // }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Heading as="h2" size="md" color="teal.300">Ops. This is not good!</Heading>;
    }

    return this.props.children;
  }
}
