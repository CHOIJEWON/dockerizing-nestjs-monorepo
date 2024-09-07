# 패키지 설치 단계
FROM node:20-alpine AS installer

WORKDIR /app

COPY package*.json ./

RUN npm install --silent 

# 빌드 단계
FROM node:20-alpine AS builder

WORKDIR /app

# installer에서 node_modules와 package*.json을 복사합니다.
COPY --from=installer /app/node_modules ./node_modules
COPY --from=installer /app/package*.json ./

# 필요한 디렉토리와 파일을 복사합니다.
COPY apps/cats ./apps/cats
COPY libs ./libs
COPY nest-cli.json ./
COPY tsconfig.json ./
COPY tsconfig.build.json ./

# 빌드 명령어 실행
RUN npm run build cats

RUN npm install --production

# 불필요한 파일 삭제
RUN ["/bin/sh", "-c", "find . ! -name dist ! -name node_modules -maxdepth 1 -mindepth 1 -exec rm -rf {} +"]

# 실제 애플리케이션 이미지 단계
FROM node:20-alpine

WORKDIR /app

# 빌드 결과물과 node_modules를 복사합니다.
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# 환경 변수 파일 복사 
COPY .prod.env ./

# PM2와 dotenv-cli 설치 (해당 과정의 의미가 있는지 알아봐야 함)
RUN npm install -g dotenv-cli

# 포트 open (ECS에서 해당 port로 맵핑 안 하면 health check안 돼서 테스크 분할되어 생성됨)
EXPOSE 3000

ENTRYPOINT ["dotenv", "-e", ".prod.env", "node", "dist/apps/cats/main.js"]
