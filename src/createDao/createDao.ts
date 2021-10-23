import { Utils } from "services/utils";
import { computedFrom } from "aurelia-framework";
import { Address } from "services/EthereumService";
import "./createDao.scss";

export class createDao {
  initialOwners: Array<Address> = new Array<string>();
  newOwner: Address;
  // channnelName: string;
  // telegramHandle: string;

  @computedFrom()
  get isValid(): boolean {
    return this.initialOwners.length > 0; //  !!(this.channnelName?.length && this.telegramHandle?.length && this.telegramHandle.startsWith("@"));
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

  createDAO(): void {
    if (this.isValid) {

    }
  }
}
