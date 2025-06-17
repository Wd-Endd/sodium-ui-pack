import { Anchor, Image, Types, UI, Vanilla } from "jsonui-scripting";
import { Common } from "./Common";

export class CommonButtons {
    static buttonText = UI.extend(Common.globalText, {
        text: "$button_text",
        shadow: true,
    })
    static buttonBg = UI.image({
        texture: "textures/ui/Black",
    });
    static buttonBgEnabled = UI.extend(this.buttonBg, { alpha: 0.5 });
    static buttonBgHighlighted = UI.extend(this.buttonBg, { alpha: 1 });
    static buttonBgDisabled = UI.extend(this.buttonBg, { alpha: 0.25 });

    static buttonControlBase(bg: UI<Types.Image>, properties?: Image) {
        return UI.extend(bg, {
            ...properties,
            layer: 0,
            "$button_content|default": "common.empty_panel",
            "$hover_content|default": "common.empty_panel",
        })
            .addChild("$button_content", { layer: 1 })
            .addChild(UI.panel({
                size: [0, 0],
                anchor: Anchor.Center,
            }).addChild("$hover_content"));
    }
    static buttonControlEnabled = this.buttonControlBase(
        this.buttonBgEnabled, { size: ["100%", "100%"] },
    );
    static buttonControlHighlighted = this.buttonControlBase(
        this.buttonBgHighlighted, { size: ["100%", "100%"] },
    );
    static buttonControlDisabled = this.buttonControlBase(
        this.buttonBgDisabled, { size: ["100%", "100%"] },
    );

    static button = UI.extend("common.button", {
        locked_control: "locked",

        "$button_content": UI.extend(this.buttonText, {
            anchor: Anchor.Center,
            max_size: ["100%", 10],
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