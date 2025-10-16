import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ModuleFederationErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Module Federation Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div style={{
          padding: '2rem',
          background: '#fff5f5',
          border: '2px solid #fed7d7',
          borderRadius: '15px',
          textAlign: 'center',
          color: '#e53e3e',
          margin: '2rem 0'
        }}>
          <h3>🚨 Erro ao carregar Microfrontend</h3>
          <p>Não foi possível carregar o componente remoto.</p>
          <details style={{ marginTop: '1rem', textAlign: 'left' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>
              Ver detalhes do erro
            </summary>
            <pre style={{ 
              background: '#f7fafc', 
              padding: '1rem', 
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.875rem',
              marginTop: '0.5rem'
            }}>
              {this.state.error?.message || 'Erro desconhecido'}
            </pre>
          </details>
          <button
            onClick={() => this.setState({ hasError: false })}
            style={{
              background: 'linear-gradient(135deg, #e53e3e, #c53030)',
              color: 'white',
              border: 'none',
              padding: '0.75rem 2rem',
              borderRadius: '25px',
              fontWeight: 600,
              cursor: 'pointer',
              marginTop: '1rem'
            }}
          >
            🔄 Tentar Novamente
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ModuleFederationErrorBoundary;