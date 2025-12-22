import { Component } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

/**
 * Error Boundary component to catch React errors and show a friendly fallback UI
 */
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render shows the fallback UI
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // Log error to console (could integrate with Sentry in the future)
        console.error('ErrorBoundary caught an error:', error, errorInfo);
        this.setState({ errorInfo });
    }

    handleReload = () => {
        window.location.reload();
    };

    handleGoHome = () => {
        // Clear the error state and navigate to home
        this.setState({ hasError: false, error: null, errorInfo: null });
        window.location.href = '/';
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
                    <div className="max-w-md w-full bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <AlertTriangle size={32} className="text-red-400" />
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-2">
                            Algo deu errado
                        </h2>
                        <p className="text-white/60 mb-6">
                            Ocorreu um erro inesperado. Seus dados foram salvos automaticamente e podem ser recuperados.
                        </p>

                        <div className="space-y-3">
                            <button
                                onClick={this.handleReload}
                                className="w-full flex items-center justify-center gap-2 bg-amber-500 text-black font-bold py-3 px-4 rounded-lg hover:bg-amber-400 transition-colors"
                            >
                                <RefreshCw size={18} />
                                Tentar Novamente
                            </button>

                            <button
                                onClick={this.handleGoHome}
                                className="w-full flex items-center justify-center gap-2 bg-white/10 text-white py-3 px-4 rounded-lg hover:bg-white/20 transition-colors"
                            >
                                <Home size={18} />
                                Voltar ao Início
                            </button>
                        </div>

                        {/* Error details for debugging (hidden in production) */}
                        {import.meta.env.DEV && this.state.error && (
                            <details className="mt-6 text-left text-xs text-white/40">
                                <summary className="cursor-pointer hover:text-white/60">
                                    Detalhes do erro (dev only)
                                </summary>
                                <pre className="mt-2 p-2 bg-black/50 rounded overflow-auto max-h-40">
                                    {this.state.error.toString()}
                                    {this.state.errorInfo?.componentStack}
                                </pre>
                            </details>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
