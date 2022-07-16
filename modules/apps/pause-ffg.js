export default class PauseFFG extends Pause {
  static get defaultOptions() {
    const options = super.defaultOptions;
    options.id = "pause";
    options.template = "systems/genesys/templates/parts/ffg-paused.html";
    options.popOut = false;
    return options;
  }

  getData() {
    let icon = game.settings.get("genesys", "ui-pausedImage");
    if (icon?.length <= 0) {
      icon = "icons/svg/clockwork.svg";
    }

    return {
      paused: game.paused,
      icon,
    };
  }
}
