# === Stage 1: Build Angular app ===
FROM node:20-alpine AS build

WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install all dependencies (including devDependencies for Angular build)
RUN npm ci

# Copy the rest of your source code
COPY . .

# Build Angular for production
RUN npm run build -- --configuration production

# === Stage 2: Serve with Nginx ===
FROM nginx:1.25-alpine

# Create non-root user and group
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Add curl for healthcheck (tiny package)
RUN apk add --no-cache curl

# Replace the default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Replace the default nginx config
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy built Angular files
COPY --from=build /app/dist/alion.ui/browser /usr/share/nginx/html

# Fix permissions for non-root operation
RUN mkdir -p /var/cache/nginx /var/run /var/log/nginx && \
    touch /var/run/nginx.pid && \
    chown -R appuser:appgroup /var/cache/nginx /var/run /var/log/nginx /usr/share/nginx/html /var/run/nginx.pid


# Drop privileges
USER appuser

# Expose port
EXPOSE 8080

# Optional: healthcheck (non-root compatible)
HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost:8080/ || exit 1

# Start Nginx in foreground (required for Docker)
CMD ["nginx", "-g", "daemon off;"]
