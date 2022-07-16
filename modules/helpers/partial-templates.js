export default class TemplateHelpers {
  static async preload() {
    const templatePaths = [
      "systems/genesys/templates/parts/shared/ffg-modifiers.html",
      "systems/genesys/templates/parts/actor/ffg-skills.html",
      "systems/genesys/templates/parts/actor/ffg-weapon-armor-gear.html",
      "systems/genesys/templates/parts/actor/ffg-homestead-upgrades.html",
      "systems/genesys/templates/parts/actor/ffg-homestead-storage.html",
      "systems/genesys/templates/parts/actor/ffg-talents.html",
      "systems/genesys/templates/parts/actor/ffg-forcepowers.html",
      "systems/genesys/templates/parts/actor/ffg-criticalinjury.html",
      "systems/genesys/templates/parts/shared/ffg-block.html",
      "systems/genesys/templates/parts/actor/ffg-signatureability.html",
      "systems/genesys/templates/chat/roll-forcepower-card.html",
      "systems/genesys/templates/chat/roll-weapon-card.html",
      "systems/genesys/templates/parts/shared/ffg-tabs.html",
      "systems/genesys/templates/parts/actor/ffg-healingitem.html"
    ];

    return loadTemplates(templatePaths);
  }
}
