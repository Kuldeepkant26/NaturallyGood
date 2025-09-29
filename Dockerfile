FROM node:20

WORKDIR /app

# Install deps using the project’s lockfile
COPY package.json ./
COPY pnpm-lock.yaml* yarn.lock* package-lock.json* ./

# Choose one package manager path
# If using pnpm:
RUN npm -g i pnpm@9.8.0 && pnpm --version && pnpm install
# If using npm instead, comment the pnpm line and uncomment below:
# RUN npm ci || npm install
# If using yarn, uncomment:
# RUN yarn install --frozen-lockfile

# Copy source
COPY . .

# Make Vite listen on all interfaces in container
ENV HOST=0.0.0.0
# Optional: force a port
# ENV PORT=5173

EXPOSE 5173

# Pass --host so the dev server is reachable from host
CMD ["npm", "run", "dev", "--", "--host", "--port", "5173"]
