import { CliCommandInterface } from '../core/cli-command/cli-command.interface';
/**
 * Менеджер для управления командами
 * commands - содержит информацию о всех командах
 * registerCommands - регистрация команд. Принимает массив команд
 */
export default class CLIApplication {
  private commands: {[propertyName: string]: CliCommandInterface} = {};

  public registerCommands(commandList: CliCommandInterface[]): void {
    commandList.reduce((acc, command) => {
      const cliCommand = command;
      acc[cliCommand.name] = cliCommand;
      return acc;
    }, this.commands);
  }

}
