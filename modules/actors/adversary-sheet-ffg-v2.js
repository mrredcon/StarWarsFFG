import { AdversarySheetFFG } from "./adversary-sheet-ffg.js";

export class AdversarySheetFFGV2 extends AdversarySheetFFG {
  constructor(...args) {
    super(...args);
  }

  /** @override */
  get template() {
    const path = "systems/genesys/templates/actors";
    return `${path}/ffg-adversary-sheet.html`;
  }

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["genesys", "sheet", "actor", "adversary", "v2"],
      template: "systems/genesys/templates/actors/ffg-adversary-sheet.html",
      width: 710,
      height: 650,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "characteristics" }],
      scrollY: [".tableWithHeader", ".tab", ".skillsGrid", ".skillsTablesGrid"],
    });
  }
}
