import { TelegramDaoService } from "./../services/TelegramDaoService";
import { Utils } from "services/utils";
import { autoinject } from "aurelia-framework";
import { Address, EthereumService } from "services/EthereumService";
import { RouteConfig } from "aurelia-router";
import "./createDao.scss";

@autoinject
export class createDao {
  initialOwners: Array<Address> = new Array<string>();
  newOwner: Address;
  threshold: number;
  chatId: string;
  chatTitle: string;

  constructor(
    private ethereumService: EthereumService,
    private telegramDaoService: TelegramDaoService,
  ) {}

  activate(params: unknown, routeConfig: RouteConfig): void {
    console.dir(params);
  }

  // @computedFrom()
  get isValid(): boolean {
    return (this.initialOwners.length > 0) && (this.threshold < (this.initialOwners.length + 1)); //  !!(this.channnelName?.length && this.telegramHandle?.length && this.telegramHandle.startsWith("@"));
  }

  deleteOwner(ndx: number): void {
    this.initialOwners.splice(ndx, 1);
  }

  addOwner() : void {
    if (Utils.isAddress(this.newOwner) && (this.initialOwners.indexOf(this.newOwner) === -1)) {
      this.initialOwners.push(this.newOwner);
      this.newOwner = "";
    }
  }

  connect(): void {
    this.ethereumService.ensureConnected();
  }

  createDAO(): void {
    if (this.isValid && this.ethereumService.defaultAccountAddress) {
      // this.telegramDaoService.deployDao({

      // });
    }
  }
}
