import EmbeddedItemHelpers from "../helpers/embeddeditem-helpers.js";

export default class ItemBaseFFG extends Item {
  async update(data, options = {}) {
    if (!this.data?.flags?.genesys?.ffgTempId || (this.data?.flags?.genesys?.ffgTempId === this.data._id && !this.data.isTemp) || this.data?.flags?.genesys?.ffgIsOwned) {
      super.update(data, options);
      // if (this.compendium) {
      //   return this.sheet.render(true);
      // }
      return;
    } else {
      const preState = Object.values(this.apps)[0]._state;

      await EmbeddedItemHelpers.updateRealObject(this, data);

      if (this.flags?.genesys?.ffgParent?.isCompendium || Object.values(this.apps)[0]._state !== preState) {
        if (this.flags?.genesys?.ffgParent?.ffgUuid) {
          this.sheet.render(false);
        }
      } else {
        let me = this;

        // we're working on an embedded item
        await this.sheet.render(true);
        const appId = this.data?.flags?.genesys?.ffgParentApp;
        if (appId) {
          const newData = ui.windows[appId].object.data.data;
          newData[this.data.flags.genesys.ffgTempItemType][this.data.flags.genesys.ffgTempItemIndex] = mergeObject(newData[this.data.flags.genesys.ffgTempItemType][this.data.flags.genesys.ffgTempItemIndex], this.data);
          await ui.windows[appId].render(true, { action: "ffgUpdate", data: newData });
        }
        return;
      }
    }
  }
}
