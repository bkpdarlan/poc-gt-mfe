# 🚀 React 18 + Webpack 5 + Module Federation

Um projeto completo de **microfrontends** utilizando as tecnologias mais modernas e estáveis do ecossistema React.

## 🏗️ Arquitetura

Este projeto demonstra a implementação de **Module Federation** com duas aplicações independentes:

### 📁 Estrutura do Projeto
```
poc-gt-mfe/
├── host/                    # Aplicação container principal
│   ├── src/
│   │   ├── components/      # Componentes reutilizáveis
│   │   ├── pages/          # Páginas da aplicação
│   │   ├── styles/         # Estilos globais
│   │   ├── types/          # Declarações de tipos TypeScript
│   │   ├── App.tsx         # Componente principal
│   │   └── main.tsx        # Entry point
│   ├── public/
│   ├── webpack.dev.js      # Configuração Webpack desenvolvimento
│   ├── webpack.prod.js     # Configuração Webpack produção
│   ├── tsconfig.json       # Configuração TypeScript
│   └── package.json
│
└── remote/                  # Microfrontend remoto
    ├── src/
    │   ├── RemoteApp.tsx    # Componente exposto
    │   └── bootstrap.tsx    # Entry point
    ├── public/
    ├── webpack.dev.js       # Configuração Webpack desenvolvimento
    ├── webpack.prod.js      # Configuração Webpack produção
    ├── tsconfig.json        # Configuração TypeScript
    └── package.json
```

## 🛠️ Tecnologias Utilizadas

### Core
- **React 18.3.x** - Utilizando a nova `createRoot` API
- **TypeScript 5.6.x** - Tipagem completa e type-safe
- **Webpack 5.x** - Module bundler com Module Federation
- **SASS/SCSS** - Pré-processador CSS com CSS Modules

### Dependências de Desenvolvimento
- **Babel** - Transpilação de código moderno
- **ts-loader** - Carregamento de arquivos TypeScript
- **sass-loader** - Processamento de arquivos SASS/SCSS
- **HtmlWebpackPlugin** - Geração de HTML
- **CleanWebpackPlugin** - Limpeza de builds anteriores

### Module Federation
- **webpack/lib/container/ModuleFederationPlugin** - Plugin nativo do Webpack 5
- Compartilhamento de dependências entre aplicações
- Carregamento dinâmico de microfrontends

## ⚡ Quick Start

### 1️⃣ Instalação das Dependências

```bash
# Navegar para a pasta host
cd host
yarn install

# Navegar para a pasta remote
cd ../remote
yarn install
```

### 2️⃣ Executar em Modo de Desenvolvimento

**Terminal 1 - Remote App (porta 3001):**
```bash
cd remote
yarn start
```

**Terminal 2 - Host App (porta 3000):**
```bash
cd host
yarn start
```

### 3️⃣ Acessar a Aplicação

- **Host App**: http://localhost:3000
- **Remote App**: http://localhost:3001

## 🎯 Funcionalidades

### Host Application
- ✅ **Navegação com React Router DOM**
- ✅ **Página Home** com informações do projeto
- ✅ **Página Remote** que carrega o microfrontend dinamicamente
- ✅ **Design responsivo** com SCSS Modules
- ✅ **Navegação intuitiva** entre seções

### Remote Application
- ✅ **Componente contador interativo**
- ✅ **Estado local gerenciado** com React Hooks
- ✅ **Interface moderna** com animações
- ✅ **Informações em tempo real**
- ✅ **Modo standalone** para desenvolvimento independente

## 🔧 Scripts Disponíveis

### Host
```bash
yarn start    # Inicia servidor de desenvolvimento (porta 3000)
yarn build    # Build para produção
yarn clean    # Limpa diretório de build
```

### Remote
```bash
yarn start    # Inicia servidor de desenvolvimento (porta 3001)
yarn build    # Build para produção
yarn clean    # Limpa diretório de build
```

## 📐 Como Funciona o Module Federation

### 1. **Configuração no Remote (Exposição)**
```javascript
new ModuleFederationPlugin({
  name: 'remote',
  filename: 'remoteEntry.js',
  exposes: {
    './RemoteApp': './src/RemoteApp.tsx',  // Componente exposto
  },
  shared: ['react', 'react-dom']            // Dependências compartilhadas
})
```

### 2. **Configuração no Host (Consumo)**
```javascript
new ModuleFederationPlugin({
  name: 'host',
  remotes: {
    remote: 'remote@http://localhost:3001/remoteEntry.js'  // Remote consumido
  },
  shared: ['react', 'react-dom', 'react-router-dom']       // Dependências compartilhadas
})
```

### 3. **Carregamento Dinâmico**
```typescript
// Lazy loading do componente remoto
const RemoteWrapper = React.lazy(() => import('remote/RemoteApp'));

// Uso com Suspense
<Suspense fallback={<Loading />}>
  <RemoteWrapper />
</Suspense>
```

## 🎨 Personalização de Estilos

### CSS Modules + SASS
- **Escopamento automático** de estilos
- **Variáveis SASS** para consistência
- **Design system** escalável
- **Responsive design** mobile-first

### Exemplo de Uso
```typescript
import styles from './Component.module.scss';

<div className={styles.container}>
  <h1 className={styles.title}>Título</h1>
</div>
```

## 🔥 Hot Module Replacement (HMR)

- **Desenvolvimento rápido** com recarregamento instantâneo
- **Preservação de estado** durante atualizações
- **Sincronização automática** entre host e remote

## 🌐 Deploy e Produção

### Build para Produção
```bash
# Remote
cd remote && yarn build

# Host
cd host && yarn build
```

### Considerações de Deploy
- **Remote**: Deploy independente (ex: CDN, S3)
- **Host**: Atualizar URLs dos remotes para URLs de produção
- **CORS**: Configurar headers adequados
- **Versionamento**: Estratégia para updates independentes

## 🔍 Debugging e Desenvolvimento

### Ferramentas Úteis
- **React DevTools** - Debug de componentes
- **Redux DevTools** - Se usando Redux
- **Webpack Bundle Analyzer** - Análise de bundles
- **Source Maps** - Debug com código original

### Dicas de Desenvolvimento
1. **Execute o remote primeiro** para evitar erros de conexão
2. **Use o modo standalone** do remote para desenvolvimento isolado
3. **Monitore o console** para erros de Module Federation
4. **Teste em diferentes browsers** para compatibilidade

## 🚨 Troubleshooting

### Problemas Comuns

**1. Erro "Shared module is not available for eager consumption"**
- ✅ **Solução**: Implementado padrão bootstrap assíncrono
- ✅ Configurado `eager: false` nos módulos compartilhados
- ✅ Entry point carrega bootstrap.tsx dinamicamente

**2. Erro "Module not found: remote/RemoteApp"**
- ✅ Verifique se o remote está rodando na porta 3001
- ✅ Confirme a URL do `remoteEntry.js`
- ✅ Aguarde o remote carregar completamente antes do host

**3. Conflitos de versão de dependências**
- ✅ Mantenha as versões do React sincronizadas
- ✅ Use `singleton: true` nas dependências compartilhadas
- ✅ Configure `eager: false` para carregamento assíncrono

**4. Problemas de CORS**
- ✅ Configure headers adequados no dev server
- ✅ Use `Access-Control-Allow-Origin: *` para desenvolvimento

**5. Componente remoto não renderiza**
- ✅ Verifique o console para erros de JavaScript
- ✅ Confirme que as dependências compartilhadas estão corretas
- ✅ Teste o remote em modo standalone primeiro

## 📚 Recursos Adicionais

- [Webpack Module Federation Docs](https://webpack.js.org/concepts/module-federation/)
- [React 18 Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [SASS Documentation](https://sass-lang.com/documentation)

## 🎯 Próximos Passos

- [ ] **Adicionar testes** unitários e de integração
- [ ] **Implementar CI/CD** pipeline
- [ ] **Adicionar monitoramento** e logging
- [ ] **Criar mais microfrontends** para demonstrar escalabilidade
- [ ] **Implementar shared state** entre microfrontends
- [ ] **Adicionar autenticação** compartilhada

---

**🎉 Projeto criado com foco em produção, escalabilidade e melhores práticas!**

Desenvolvido com ❤️ usando React 18, TypeScript 5.6, Webpack 5 e Module Federation.# poc-gt-mfe
