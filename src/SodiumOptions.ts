import { Anchor, Bool, Factory, Orientation, Properties, Types, UI, Vanilla } from "jsonui-scripting";
import { CommonButtons } from "./components/CommonButtons";
import { CommonToggles } from "./components/CommonToggles";
import { Common } from "./components/Common";

export class SodiumOptions {
    static stackedRow2<T extends Types = Types.Factory>(
        ui: UI<T>,
        properties?: Properties | undefined,
        ignored?: Bool,
    ) {
        return UI.panel({
            size: ["100%c + 4px", "100%c + 4px"],
        }).addChild(UI.extend(ui, {
            ...properties ||= {},
            anchor: Anchor.Center,
            ignored: ignored,
        }));
    }
    static stackedRow3<T extends Types = Types.Factory>(
        ui: UI<T>,
        properties?: Properties | undefined,
        ignored?: Bool,
    ) {
        return UI.panel({
            size: ["100%c + 6px", "100%c + 6px"],
        }).addChild(UI.extend(ui, {
            ...properties ||= {},
            anchor: Anchor.Center,
            ignored: ignored,
        }));
    }

    static actionTabToggle = UI.extend(CommonToggles.toggleTemplate, {
        "$unchecked_control": CommonButtons.buttonControlEnabled.getPath(),
        "$checked_control": CommonButtons.buttonControlDisabled.getPath(),
        "$unchecked_hover_control": CommonButtons.buttonControlHighlighted.getPath(),
        "$checked_hover_control": CommonButtons.buttonControlDisabled.getPath(),
        "$unchecked_locked_control": CommonButtons.buttonControlDisabled.getPath(),
        "$unchecked_locked_hover_control": CommonButtons.buttonControlDisabled.getPath(),
        "$checked_locked_control": CommonButtons.buttonControlDisabled.getPath(),
        "$checked_locked_hover_control": CommonButtons.buttonControlDisabled.getPath(),

        size: [65, 20],
        "$button_content": UI.extend(Common.globalText, {
            text: "$button_text",
            "$button_text|default": "",
        }).getPath(),
     });

    static headerPanel = UI.stackPanel({
        orientation: Orientation.Horizontal,
        size: ["100%c", "100%cm"],
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
            this.stackedRow2<Types.Panel>(this.actionTabToggle, {
                "$button_text": "[DEV] Video",

                "$toggle_view_binding_name": "dev_video_button_toggle",
                "$radio_toggle_group": true,
                "$toggle_name": "navigation_tab",
            }),
        ).addChild(
            this.stackedRow2<Types.Panel>(this.actionTabToggle, {
                "$button_text": "[LOC] Done",

                "$toggle_view_binding_name": "done",
                "$radio_toggle_group": true,
                "$toggle_name": "navigation_tab",
            }),
        ),
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