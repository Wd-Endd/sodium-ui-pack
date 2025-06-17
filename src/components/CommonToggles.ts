import { Anchor, Bool, Identifier, Orientation, Types, UI } from "jsonui-scripting";
import { CommonButtons } from "./CommonButtons";

export class CommonToggles {
    static tabToggleControlBase(control: UI<Types.Image>, state: Bool) {
        return UI.extend(control, {
            size: ["100%c", "100%"],
            anchor: Anchor.Center,
            "$button_content": UI.image({
                alpha: state? 1 : 0,
                propagate_alpha: false,
                texture: ".endd/tab_checker",
                size: ["100%c + 12px", "100%"],
            }).addChild(UI.extend(CommonButtons.buttonText, {
                max_size: ["default", 10],
                anchor: Anchor.Center,
            })).getPath(),
        })
    }
    static tabToggleControlOffEnabled = this.tabToggleControlBase(
        CommonButtons.buttonControlEnabled,
        false,
    )
    static tabToggleControlOffHighlighted = this.tabToggleControlBase(
        CommonButtons.buttonControlHighlighted,
        false,
    )
    static tabToggleControlOffDisabled = this.tabToggleControlBase(
        CommonButtons.buttonControlDisabled,
        false,
    )
    static tabToggleControlOnEnabled = this.tabToggleControlBase(
        CommonButtons.buttonControlEnabled,
        true,
    )
    static tabToggleControlOnHighlighted = this.tabToggleControlBase(
        CommonButtons.buttonControlHighlighted,
        true,
    )
    static tabToggleControlOnDisabled = this.tabToggleControlBase(
        CommonButtons.buttonControlDisabled,
        true,
    )

    static toggleTemplate = UI.panel({
        size: ["100%c", "100%c"],
        "$button_size|default": ["100%c", "100%c"],
        "$toggle_view_binding_name|default": "this_toggle",

        "$unchecked_control|default": "common.empty_panel",
        "$checked_control|default": "common.empty_panel",
        "$unchecked_hover_control|default": "common.empty_panel",
        "$checked_hover_control|default": "common.empty_panel",
        "$unchecked_locked_control|default": "common.empty_panel",
        "$unchecked_locked_hover_control|default": "common.empty_panel",
        "$checked_locked_control|default": "common.empty_panel",
        "$checked_locked_hover_control|default": "common.empty_panel",
    }).addChild(UI.extend<Types.Toggle, string>("common.toggle", {
        size: "$button_size",
    }), {}, "$toggle_view_binding_name")

    static tabToggle = UI.extend(this.toggleTemplate, {
        "$button_text|default": "",
        "$radio_toggle_group": true,
        "$toggle_group_default_selected": 0,
        "$toggle_name|default": "this_toggle",

        "$unchecked_control": this.tabToggleControlOffEnabled.getPath(),
        "$checked_control": this.tabToggleControlOnEnabled.getPath(),
        "$unchecked_hover_control": this.tabToggleControlOffHighlighted.getPath(),
        "$checked_hover_control": this.tabToggleControlOnHighlighted.getPath(),
        "$unchecked_locked_control": this.tabToggleControlOffDisabled.getPath(),
        "$unchecked_locked_hover_control": this.tabToggleControlOffDisabled.getPath(),
        "$checked_locked_control": this.tabToggleControlOnDisabled.getPath(),
        "$checked_locked_hover_control": this.tabToggleControlOnDisabled.getPath(),
    });
}