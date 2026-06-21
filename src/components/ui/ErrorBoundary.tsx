import React, { Component, ErrorInfo, ReactNode } from 'react';
import { log } from '../../utils/logger';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    log.error('ErrorBoundary a intercepté une erreur :', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-6 my-4 border border-red-500/20 bg-red-500/5 rounded-lg text-center">
          <p className="font-sans text-[14px] text-red-400">
            Une erreur est survenue dans cette section.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
