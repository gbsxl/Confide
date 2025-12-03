# Confide

Monorepo contendo aplicação completa: Backend (Spring Boot) + Frontend (React)

## 📁 Estrutura do Projeto

```
Confide/
├── backend/          # API Spring Boot
│   ├── src/
│   └── pom.xml
│
└── frontend/         # Aplicação React
    ├── src/
    └── package.json
```

## 🚀 Como Executar Localmente

### Backend (Spring Boot)

```bash
cd backend
./mvnw spring-boot:run
```

API disponível em: `http://localhost:8080`

### Frontend (React)

```bash
cd frontend
npm install
npm start
```

Aplicação disponível em: `http://localhost:3000`

## 🌐 Deploy

- **Frontend**: Vercel → [URL quando tiver]
- **Backend**: Fly.io → [URL quando tiver]

## 👨‍💻 Desenvolvimento

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/Confide.git
   cd Confide
   ```

2. Execute o backend em um terminal:
   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```

3. Execute o frontend em outro terminal:
   ```bash
   cd frontend
   npm install
   npm start
   ```

4. Acesse `http://localhost:3000`

## 📦 Build para Produção

### Backend
```bash
cd backend
./mvnw clean package
```

### Frontend
```bash
cd frontend
npm run build
```
