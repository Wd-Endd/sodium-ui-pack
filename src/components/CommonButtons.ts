import { UI, Vanilla } from "jsonui-scripting";
import { Common } from "./Common";

export class CommonButtons {
    static buttonBg = UI.image({
        texture: "textures/ui/Black",
    });
    static buttonBgEnabled = UI.extend(this.buttonBg, { alpha: 0.5 });
    static buttonBgHighlighted = UI.extend(this.buttonBg, { alpha: 1 });
    static buttonBgDisabled = UI.extend(this.buttonBg, { alpha: 0.25 });

    static buttonControlBase = UI.panel({
        "$button_texture|default": "common.empty_panel",
        "$button_content|default": "common.empty_panel",
        "$hover_content|default": "common.empty_panel",
    })
        .addChild("$button_texture", { layer: 0 })
        .addChild("$button_content", { layer: 1 })
        .addChild("$hover_content");
    static buttonControlEnabled = UI.extend(this.buttonControlBase, {
        "$button_texture": this.buttonBgEnabled.getPath(),
    });
    static buttonControlHighlighted = UI.extend(this.buttonControlBase, {
        "$button_texture": this.buttonBgHighlighted.getPath(),
    });
    static buttonControlDisabled = UI.extend(this.buttonControlBase, {
        "$button_texture": this.buttonBgDisabled.getPath(),
    });

    static button = UI.extend("common.button", {
        locked_control: "locked",

        "$button_content": UI.extend(Common.globalText, {
            text: "$button_text",

        }).getPath(),

        "$button_text|default": "",
    })
        .addChild(this.buttonControlEnabled, {}, "default")
        .addChild(this.buttonControlHighlighted, {}, "hover")
        .addChild(this.buttonControlHighlighted, {}, "pressed")
        .addChild(this.buttonControlDisabled, {}, "locked");

    static button65x20 = UI.extend(this.button, {
        size: [65, 20],
    });
}