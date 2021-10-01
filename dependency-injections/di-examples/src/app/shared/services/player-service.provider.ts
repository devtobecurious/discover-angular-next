import { Provider } from "@angular/core";
import { AuthenticateService } from "./authenticate.service";
import { LoggerService } from "./logger.service";
import { PlayerService } from "./player.service";

const factory = (loggerService: LoggerService, authService: AuthenticateService) => {
  return new PlayerService(loggerService, authService.isConnected);
};

export const userProvider: Provider = {
  provide: PlayerService,
  useFactory: factory,
  deps: [
    LoggerService,
    AuthenticateService
  ]
};
