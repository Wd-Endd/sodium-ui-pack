import { Anchor, Bool, Int, Orientation, Properties, Types, UI } from "jsonui-scripting";
import { CommonButtons } from "./components/CommonButtons";
import { CommonToggles } from "./components/CommonToggles";
import { Common } from "./components/Common";
import { CommonScroll } from "./components/CommonScroll";
import { SodiumSections } from "./SodiumSections";

export class SodiumOptions {
    static stackedRow2<T extends Types = Types.Factory>(
        ui: UI<T>,
        properties?: Properties,
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
        properties?: Properties,
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

    static tabNavigationToggleBase(text: string, bind: string, index: Int) {
        return this.stackedRow3<Types.Panel>(
            CommonToggles.tabToggle, {
                "$toggle_nme": "sodium_navigation_tab",
                "$button_size": ["100%c", 18],

                "$toggle_group_forced_index": index,
                "$button_text": text,
                "$toggle_view_binding_name": bind,
            }
        )
        // return UI.extend(CommonToggles.tabToggle, {

        // })
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

        "$button_size": [65, 20],

        "$button_text|default": "",
        "$button_content": UI.extend(CommonButtons.buttonText, {
            anchor: Anchor.Center,
            max_size: ["100%", 10],
        }).getPath(),
     });

    static headerPanel = UI.stackPanel({
        orientation: Orientation.Horizontal,
        size: ["100%c", "100%cm"],
    }).addChild(this.tabNavigationToggleBase(
        "[LOC] General",
        "sodium_general_tab",
        0,
    )).addChild(this.tabNavigationToggleBase(
        "[LOC] Quality",
        "sodium_quality_tab",
        1,
    ));

    static optionsContent = UI.panel({
        size: ["fill", "100%"],
    // }).addChild(UI.panel({
    }).addChild(UI.extend(CommonScroll.scrollingPanel, {
        "$scrolling_content": SodiumSections.sodiumOptionContent.getPath(),
        size: ["100% - 3px", "100% - 3px"],
        anchor: Anchor.TopLeft,
        offset: [1, 1],
    }));

    static contentPanel = UI.panel({
        size: ["100%", "fill"],
    }).addChild(
        UI.stackPanel({ // Main Content
            orientation: Orientation.Horizontal,
            size: [206, "100%"],
            anchor: Anchor.TopLeft,
        }).addChild(UI.panel({ size: [2, "100%"] })).addChild(
            this.optionsContent,
        )
    ).addChild(
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