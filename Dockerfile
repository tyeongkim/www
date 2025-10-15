FROM oven/bun:latest AS builder

WORKDIR /app
COPY . .
RUN bun install --frozen-lockfile
RUN bun run build

FROM nginx:alpine AS runner

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
