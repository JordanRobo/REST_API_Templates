FROM oven/bun

WORKDIR /app/

COPY package*.json bun.lockb ./

RUN bun install

COPY . .

EXPOSE 2323

CMD ["bun", "start"]