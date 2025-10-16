import React, { Suspense } from 'react';
import ModuleFederationErrorBoundary from '@/components/ModuleFederationErrorBoundary';
import styles from './RemotePage.module.scss';

// Lazy load the Remote App component
const RemoteWrapper = React.lazy(() => import('remote/RemoteApp'));

const RemotePage: React.FC = () => {
  return (
    <div className={styles.remotePage}>
      <div className={styles.header}>
        <div className={styles.container}>
          <h1>🔗 Remote Microfrontend</h1>
          <p>Este componente é carregado dinamicamente de outra aplicação</p>
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.remoteContainer}>
            <ModuleFederationErrorBoundary>
              <Suspense fallback={
                <div className={styles.loading}>
                  <div className={styles.spinner}></div>
                  <p>Carregando microfrontend remoto...</p>
                </div>
              }>
                <RemoteWrapper />
              </Suspense>
            </ModuleFederationErrorBoundary>
          </div>
          
          <div className={styles.info}>
            <h3>💡 Como funciona?</h3>
            <ul>
              <li>O componente acima é servido da aplicação <strong>remote</strong> (porta 3001)</li>
              <li>É carregado dinamicamente usando <strong>Module Federation</strong></li>
              <li>Compartilha dependências como React e React-DOM</li>
              <li>Mantém isolamento de código e permite deploys independentes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemotePage;