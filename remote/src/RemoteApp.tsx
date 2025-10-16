import React, { useState, useEffect } from "react";
import styles from "./RemoteApp.module.scss";

interface CounterState {
  count: number;
  lastUpdated: Date;
}

const RemoteApp: React.FC = () => {
  const [counter, setCounter] = useState<CounterState>({
    count: 0,
    lastUpdated: new Date(),
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const increment = () => {
    setCounter((prev) => ({
      count: prev.count + 1,
      lastUpdated: new Date(),
    }));
  };

  const decrement = () => {
    setCounter((prev) => ({
      count: prev.count - 1,
      lastUpdated: new Date(),
    }));
  };

  const reset = () => {
    setCounter({
      count: 0,
      lastUpdated: new Date(),
    });
  };

  return (
    <div className={styles.remoteApp}>
      <div className={styles.header}>
        <h2>⚡ Remote Component</h2>
        <div className={styles.badge}>Carregado via Module Federation</div>
      </div>

      <div className={styles.content}>
        <div className={styles.counterSection}>
          <div className={styles.counterDisplay}>
            <span className={styles.label}>Contador:</span>
            <span className={styles.value}>{counter.count}</span>
          </div>

          <div className={styles.controls}>
            <button
              className={`${styles.button} ${styles.decrement}`}
              onClick={decrement}
              disabled={!mounted}
            >
              ➖ Decrementar
            </button>

            <button
              className={`${styles.button} ${styles.reset}`}
              onClick={reset}
              disabled={!mounted}
            >
              🔄 Reset
            </button>

            <button
              className={`${styles.button} ${styles.increment}`}
              onClick={increment}
              disabled={!mounted}
            >
              ➕ Incrementar
            </button>
          </div>
        </div>

        <div className={styles.info}>
          <h3>📊 Informações</h3>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <strong>Status:</strong>
              <span className={mounted ? styles.online : styles.loading}>
                {mounted ? "🟢 Online" : "🟡 Carregando..."}
              </span>
            </div>

            <div className={styles.infoItem}>
              <strong>Última atualização:</strong>
              <span>{counter.lastUpdated.toLocaleTimeString("pt-BR")}</span>
            </div>

            <div className={styles.infoItem}>
              <strong>Tecnologia:</strong>
              <span>React 18.3.x + TypeScript</span>
            </div>

            <div className={styles.infoItem}>
              <strong>Porta:</strong>
              <span>3001 (Remote)</span>
            </div>
          </div>
        </div>

        <div className={styles.features}>
          <h3>🚀 Características</h3>
          <ul className={styles.featureList}>
            <li>✅ Componente React moderno</li>
            <li>✅ State management local</li>
            <li>✅ TypeScript type-safe</li>
            <li>✅ Estilização com SCSS Modules</li>
            <li>✅ Hot Module Replacement (HMR)</li>
            <li>✅ Carregamento dinâmico via Module Federation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RemoteApp;
