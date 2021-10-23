import { computedFrom } from "aurelia-framework";
import { Address } from "services/EthereumService";
import "./createDao.scss";

interface ISafeOwner {
  telegramHandle: string;
  walletAddress: Address;
}
export class createDao {
  initialOwners: Array<Address> = new Array<string>();
  // channnelName: string;
  // telegramHandle: string;

  @computedFrom()
  get isValid(): boolean {
    return true; //  !!(this.channnelName?.length && this.telegramHandle?.length && this.telegramHandle.startsWith("@"));
  }

  deleteOwner(ndx: number): void {
    if (this.initialOwners.length > 1) {
      this.initialOwners.splice(ndx, 1);
    }
  }

  addOwner() : void {
    this.initialOwners.push("");
  }

  createDAO(): void {
    if (this.isValid) {

    }
  }
}
