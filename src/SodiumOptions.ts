import { Anchor, Bool, Factory, Orientation, Properties, Types, UI, Vanilla } from "jsonui-scripting";
import { CommonButtons } from "./components/CommonButtons";
import { CommonToggles } from "./components/CommonToggles";

export class SodiumOptions {
    static stackedRow2<T extends Types = Types.Factory>(
        ui: UI<T>,
        properties?: Properties | undefined,
        ignored?: Bool,
    ) {
        return UI.panel({
            size: ["100%c + 2px", "100%c + 2px"],
        }).addChild(UI.extend(ui, {
            ...properties ||= {},
            anchor: Anchor.Center,
            ignored: ignored,
        }));
    }
    static headerPanel = UI.stackPanel({
        orientation: Orientation.Horizontal,
        size: ["100%c", 24],
    });

    static contentPanel = UI.panel({
        size: ["100%", "fill"],
    }).addChild(
        UI.stackPanel({ // Action Buttons
            orientation: Orientation.Horizontal,
            size: ["100%c", "100%cm"],
            anchor: Anchor.BottomRight,
        }).addChild(this.stackedRow2(CommonButtons.button65x20, {
            "$pressed_button_name": "button.reset_settings",
            "$button_text": "[LOC] Reset",

            property_bag: {
                reset_group: "video",
            },
        }, "(not $is_pregame)")).addChild(
            this.stackedRow2<Types.Panel>(CommonToggles.toggleTemplate, {
                "$unchecked_control": CommonButtons.buttonControlEnabled,
                "$checked_control": CommonButtons.buttonControlDisabled,
                "$unchecked_hover_control": CommonButtons.buttonControlHighlighted,
                "$checked_hover_control": CommonButtons.buttonControlDisabled,
                "$unchecked_locked_control": CommonButtons.buttonControlDisabled,
                "$unchecked_locked_hover_control": CommonButtons.buttonControlDisabled,
                "$checked_locked_control": CommonButtons.buttonControlDisabled,
                "$checked_locked_hover_control": CommonButtons.buttonControlDisabled,

                "$button_text": "[LOC] Done",

                "$toggle_view_binding_name": "done",
                "$radio_toggle_group": true,
                "$toggle_name": "navigation_tab",
                // "$toggle_group_default_selected": "$default_selector_toggle_index",
            })
        )
    );

    static screenContent = UI.stackPanel({
        orientation: Orientation.Vertical,
        size: ["100% - 9px", "100% - 11px"],
        anchor: Anchor.TopLeft,
        offset: [3, 3],
    })
        .addChild(this.headerPanel)
        .addChild(this.contentPanel);

    static mainPanel = UI.panel()
        .addChild(this.screenContent);
}