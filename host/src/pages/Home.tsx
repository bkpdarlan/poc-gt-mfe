import React from 'react';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            🚀 Welcome to Module Federation
          </h1>
          <p className={styles.subtitle}>
            React 18 + Webpack 5 + TypeScript 5.6 + Module Federation
          </p>
          <div className={styles.description}>
            <p>
              Esta é a aplicação <strong>HOST</strong> do nosso projeto de microfrontends.
              Aqui você pode navegar entre diferentes aplicações que são carregadas dinamicamente.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.container}>
          <h2>🛠️ Tecnologias Utilizadas</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.icon}>⚛️</div>
              <h3>React 18.3.x</h3>
              <p>Utilizando a mais recente versão do React com createRoot API</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.icon}>📦</div>
              <h3>Webpack 5</h3>
              <p>Configuração moderna com Module Federation Plugin</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.icon}>🔷</div>
              <h3>TypeScript 5.6</h3>
              <p>Tipagem completa e desenvolvimento type-safe</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.icon}>🔗</div>
              <h3>Module Federation</h3>
              <p>Arquitetura de microfrontends escalável</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.container}>
          <h2>📚 Como Testar</h2>
          <ol className={styles.steps}>
            <li>Execute <code>yarn install</code> nas pastas host e remote</li>
            <li>Execute <code>yarn start</code> na pasta remote (porta 3001)</li>
            <li>Execute <code>yarn start</code> na pasta host (porta 3000)</li>
            <li>Navegue para <strong>/remote</strong> para ver o microfrontend remoto</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Home;