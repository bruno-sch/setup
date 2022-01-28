import chalk from "chalk";

export const logInfo = console.info.bind(console);
export const logError = console.error.bind(console);

export function handleComplete(): never {
  logInfo("");
  logInfo(chalk.green("Environment setup complete 🎉"));
  logInfo("");

  process.exit(0);
}

export function handleError(err: Error): never {
  let message = err.message;

  if (err.name) {
    message = `${err.name}: ${message}`;
  }

  logError("");
  logError(chalk.bold(chalk.red(`[!] ${chalk.bold(message.toString())}`)));
  logError("");
  logError("Unable to complete environment setup");
  logError("");
  logError(
    chalk.dim(
      "Please refer to https://github.com/guidepup/guidepup/tree/main/guides for guides to manual environment setup"
    )
  );
  logError("");

  process.exit(1);
}
