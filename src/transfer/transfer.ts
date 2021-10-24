import { Address, EthereumService } from "./../services/EthereumService";
import { autoinject } from "aurelia-framework";
import { BigNumber } from "ethers";
import { RouteConfig } from "aurelia-router";
import "./transfer.scss";
import { TelegramDaoService } from "services/TelegramDaoService";

@autoinject
export class Transfer {
  chatId: number;
  to: Address;
  amount: BigNumber;

  constructor(
    private ethereumService: EthereumService,
    private telegramDaoService: TelegramDaoService,
  ) {}

  activate(params: { chatId: string, to: Address, amount: string}, _routeConfig: RouteConfig): void {
    this.chatId = Number(params.chatId);
    this.to = params.to;
    this.amount = BigNumber.from(params.amount);
  }

  connect(): void {
    this.ethereumService.ensureConnected();
  }

  transfer(): void {
    this.telegramDaoService.createTransferProposal(this.chatId, this.to, this.amount);
  }
}
